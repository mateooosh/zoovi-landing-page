import { defineStore } from 'pinia'

const STORAGE_KEY = 'zoovi'

interface State {
    test: string
}

export const useStore = defineStore(STORAGE_KEY, {
    state: (): State => ({
        test: ''
    }),

    actions: {
        setTest(test: string): void {
            this.test = test
        }
    }
})

export default useStore
