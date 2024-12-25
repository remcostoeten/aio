
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { PasswordStrength } from './password-strength'
import type { UseFormRegister, FieldError } from 'react-hook-form'

interface PasswordFieldProps {
  register: UseFormRegister<any>
  error?: FieldError
  showStrength?: boolean
}

export function PasswordField({ register, error, showStrength }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register('password', {
            onChange: (e) => setPassword(e.target.value)
          })}
          className="bg-[#1f1f1f] border-[#2f2f2f] pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-neutral-400" />
          ) : (
            <Eye className="h-4 w-4 text-neutral-400" />
          )}
        </Button>
      </div>

      {error && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}

      {showStrength && password && (
        <PasswordStrength password={password} />
      )}
    </div>
  )
}