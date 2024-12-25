
import { useState } from 'react'
import { type FormEvent } from 'react'

type ValidationResult = {
  isValid: boolean
  message?: string
}

type UseAuthFormProps = {
  onSubmit: (formData: FormData) => Promise<void>
}

export function useAuthForm({ onSubmit }: UseAuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null)

  const validateEmail = (value: string): ValidationResult => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    setIsEmailValid(value.length > 0 ? isValid : null)
    setEmail(value)
    return {
      isValid,
      message: isValid ? undefined : 'Please enter a valid email address'
    }
  }

  const validatePassword = (value: string): ValidationResult => {
    const isValid = value.length >= 8
    setIsPasswordValid(value.length > 0 ? isValid : null)
    setPassword(value)
    return {
      isValid,
      message: isValid ? undefined : 'Password must be at least 8 characters'
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEmailValid && isPasswordValid) {
      const formData = new FormData(e.currentTarget)
      await onSubmit(formData)
    }
  }

  return {
    email,
    password,
    isEmailValid,
    isPasswordValid,
    validateEmail,
    validatePassword,
    handleSubmit
  }
} 
