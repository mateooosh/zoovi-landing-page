export default class CSSVars {
    static getVar(name: string): string {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    }
}
