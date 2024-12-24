import { useCallback } from 'react'

export function useStorage<T>(key: string) {
  const get = useCallback((): T | null => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error(`Error reading from storage for key "${key}":`, error)
      return null
    }
  }, [key])

  const set = useCallback((value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error writing to storage for key "${key}":`, error)
    }
  }, [key])

  const remove = useCallback((): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing from storage for key "${key}":`, error)
    }
  }, [key])

  return { get, set, remove }
}