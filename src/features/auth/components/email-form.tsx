
import { type FormEvent } from 'react'
import { Button, Input } from '@/shared/components/ui'
import { type EmailFormProps } from '../types'

export function EmailForm({ type, onSubmit }: EmailFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        {type === 'login' ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  )
}
