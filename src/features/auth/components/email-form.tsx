"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { PasswordField } from './password-field'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { cn } from '@/shared/helpers'
import { theme } from '@/shared/config/theme'

interface FormData {
  email: string
  password: string
  rememberMe: boolean
}

export function EmailForm({ type }: { type: 'login' | 'register' }) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // Handle form submission
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={cn(
            "bg-[#1f1f1f] border-[#2f2f2f]",
            errors.email && "border-red-500"
          )}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <PasswordField
        register={register}
        error={errors.password}
        showStrength={type === 'register'}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <Checkbox {...register('rememberMe')} />
          <span className="text-sm text-neutral-400">Remember me</span>
        </label>
        
        <a 
          href="#" 
          className={`text-sm text-[${theme.colors.primary}] hover:opacity-80 transition-opacity`}
        >
          Forgot password?
        </a>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full h-10",
          `bg-[${theme.colors.primary}] hover:bg-[${theme.colors.primary}]/90`,
          "text-white font-medium"
        )}
      >
        {loading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          type === 'login' ? 'Sign In' : 'Sign Up'
        )}
      </Button>
    </form>
  )
}