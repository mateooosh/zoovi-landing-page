<script setup lang="ts">
import useStore from '../store'

const store = useStore()
</script>

<template>
  <div>
    <div>Home</div>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <p>Store -> test {{ store.test }}</p>
    <nav class="flex gap-4">
      <RouterLink to="/">
        <Button>Go to Home</Button>
      </RouterLink>
      <RouterLink to="/about">
        <Button>Go to About</Button>
      </RouterLink>
      <RouterLink to="/login">
        <Button>Go to Login</Button>
      </RouterLink>
      <RouterLink to="/register">
        <Button>Go to Register</Button>
      </RouterLink>
      <RouterLink to="/documentation">
        <Button>Go to Documentation</Button>
      </RouterLink>
      <RouterLink to="/company-dashboard">
        <Button>Go to Company Dashboard</Button>
      </RouterLink>
    </nav>
    <InputText type="text" v-model="store.test"/>
  </div>
</template>

<style scoped>

</style>