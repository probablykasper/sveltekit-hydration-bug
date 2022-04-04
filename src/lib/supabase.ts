import { writable } from 'svelte/store'

export const user = writable(false)
const isBrowser = typeof window !== 'undefined'
export const userInitialized = isBrowser
