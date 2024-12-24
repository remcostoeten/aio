import { useState, useEffect, useCallback } from 'react'
import { storage } from '../services/storage'

export function usePersistentState<T>(key: string, initialValue: T) {
  // Initialize state with stored value or initial value
  const [state, setState] = useState<T>(() => {
    const stored = storage.get<T>(key)
    return stored !== null ? stored : initialValue
  })

  // Sync with storage when state changes
  useEffect(() => {
    storage.set(key, state)
  }, [key, state])

  // Wrapped setState to ensure type safety
  const setPersistedState = useCallback((value: T | ((prev: T) => T)) => {
    setState(value)
  }, [])

  return [state, setPersistedState] as const
}