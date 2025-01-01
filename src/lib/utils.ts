type ClassValue = string | undefined | null | boolean | { [key: string]: boolean }

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}