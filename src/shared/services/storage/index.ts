export interface StorageService {
  get<T>(key: string): T | null
  set<T>(key: string, value: T): void
  remove(key: string): void
}

class LocalStorageService implements StorageService {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  }

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Storage error:', error)
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Storage error:', error)
    }
  }
}

export const storage = new LocalStorageService()