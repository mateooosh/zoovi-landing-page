<template>
  <div class="handwritten-container">
    <svg ref="svg" width="100%" height="100" viewBox="0 0 800 100"></svg>
  </div>
</template>

<script>
import opentype from 'opentype.js';
import fontUrl from '/src/assets/fonts/JustMeAgainDownHere.ttf?url';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    fontUrl: {
      type: String,
      default: ''
    },
    strokeSpeed: {
      type: Number,
      default: 500 // Pixels per second; higher values make animation faster
    },
    letterDelay: {
      type: Number,
      default: 0.1 // Seconds delay between starting each letter's animation
    },
    color: {
      type: String,
      default: 'black' // Color for the fill
    },
  },
  async mounted() {
    try {
      let font = null;
      if(this.fontUrl) {
        font = await opentype.load(this.fontUrl);
      }
      else {
        const fontResponse = await fetch(fontUrl)
        if (!fontResponse.ok) throw new Error('Failed to fetch font');
        const arrayBuffer = await fontResponse.arrayBuffer();
        font = opentype.parse(arrayBuffer);
      }

      let xOffset = 0;
      const glyphPaths = font.getPaths(this.text, 0, 60, 72); // Returns array of Path objects, one per glyph

      const svg = this.$refs.svg;
      const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      style.textContent = `
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes fill { to { fill-opacity: 1; } }
      `;
      svg.appendChild(style);

      glyphPaths.forEach((glyphPath, index) => {
        const d = glyphPath.toPathData(2); // Get path data string
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', this.color);
        path.setAttribute('fill-opacity', '0');
        path.setAttribute('stroke', this.color);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('transform', `translate(${xOffset}, 0)`);

        svg.appendChild(path); // Append to calculate length
        const length = path.getTotalLength();
        svg.removeChild(path); // Remove temporarily

        path.setAttribute('stroke-dasharray', length);
        path.setAttribute('stroke-dashoffset', length);

        const strokeDuration = length / this.strokeSpeed; // Duration for stroke animation
        const strokeDelay = index * this.letterDelay;
        const fillDelay = strokeDelay + strokeDuration; // Start fill after stroke completes

        path.style.animation = `
          draw ${strokeDuration}s linear ${strokeDelay}s forwards,
          fill ${0.1}s linear ${fillDelay}s forwards
        `;

        svg.appendChild(path);

        // Update xOffset for next glyph (approximate width)
        xOffset += font.getAdvanceWidth(this.text[index], 12);
      });
    } catch (error) {
      console.error('Error loading font or generating paths:', error);
    }
  }
};
</script>

<style scoped>
.handwritten-container {
  display: inline-block;
}
</style>
