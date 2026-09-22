/**
 * Type-safe localStorage abstraction.
 * All methods are safe — they catch storage errors silently.
 */

export const storage = {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return null;
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Silently fail (e.g. private browsing quota exceeded)
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // Silently fail
    }
  },

  clear(keys: string[]): void {
    keys.forEach((k) => storage.remove(k));
  }
};

export const STORAGE_KEYS = {
  client: 'tarek_elevator_client_v2',
  cart: 'tarek_elevator_cart_v2',
  step: 'tarek_elevator_step_v2'
} as const;
