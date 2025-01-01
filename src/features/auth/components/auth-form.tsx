import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../contexts/auth-context'
import { Mail } from 'lucide-react'
import { SocialLoginButtons } from './social-login-buttons'
import { useFormField } from '../hooks/use-form-field'
import { validateField, emailModel } from '../models/auth-models'
import { Checkbox } from './checkbox'
import { ToggleButton } from './toggle-button'

type AuthFormProps = {
  mode: 'signin' | 'signup' | 'forgot-password'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const email = useFormField('', (value) => validateField(emailModel, value))
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signIn, signUp, resetPassword } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      if (mode === 'forgot-password') {
        const { error } = await resetPassword(email.value)
        if (error) {
          setError(error.message)
        } else {
          setSuccess(true)
        }
        return
      }

      const result = mode === 'signin' 
        ? await signIn(email.value, password)
        : await signUp(email.value, password)
      
      if (result.error) {
        setError(result.error.message)
      } else {
        navigate({ to: '/' })
      }
    } catch (err) {
      setError('An unexpected error occurred')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4 animate-fadeIn">
      <div className="max-w-[440px] w-full space-y-8">
        <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-medium text-white mb-1">
            {mode === 'forgot-password' 
              ? 'Reset Password'
              : mode === 'signin' ? 'Welcome back' : 'Create account'}
          </h2>
          <p className="text-sm text-gray-400">
            {mode === 'forgot-password'
              ? 'Enter your email to reset your password'
              : mode === 'signin' 
                ? 'Sign in to your account' 
                : 'Sign up for an account'}
          </p>
        </div>

        {success ? (
          <div className="bg-green-500/10 text-green-400 p-4 rounded-lg animate-fadeIn">
            Check your email for password reset instructions
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email.value}
                  onChange={(e) => email.onChange(e.target.value)}
                  onBlur={email.onBlur}
                  className={`block w-full px-3 py-2 bg-surface-light border rounded text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-sm transition-colors duration-200 ease-in-out hover:bg-surface focus:bg-surface ${
                    email.error && email.touched
                      ? 'border-red-500'
                      : 'border-gray-600'
                  }`}
                  placeholder="Email address"
                />
                {email.error && email.touched && (
                  <p className="mt-1 text-sm text-red-500 animate-error" key={email.error}>
                    {email.error}
                  </p>
                )}
              </div>
              {mode !== 'forgot-password' && (
                <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-3 py-2 bg-surface-light border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand text-sm transition-colors duration-200 ease-in-out hover:bg-surface focus:bg-surface pr-10"
                      placeholder="Password"
                    />
                    <ToggleButton
                      show={showPassword}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
              )}
            </div>

            {mode === 'signin' && (
              <div className="flex items-center justify-between animate-fadeInUp" style={{ animationDelay: '700ms' }}>
                <Checkbox
                  checked={rememberMe}
                  onChange={setRememberMe}
                  label="Remember me"
                />
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            {error && (
              <div className="text-red-400 text-sm animate-error" key={error}>
                {error}
              </div>
            )}

            <div className="flex flex-col space-y-4 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-1 focus:ring-brand transition-all duration-200 ease-in-out active:bg-brand-darker"
              >
                <Mail className="h-4 w-4 mr-2" />
                {mode === 'signin' ? 'Sign in' : 'Sign up'} with Email
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-surface text-gray-500">Or continue with</span>
                </div>
              </div>

              <SocialLoginButtons mode={mode} />
            </div>
          </form>
        )}

        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            {mode === 'signin'
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </Link>
        </div>
      </div>
    </div>
  )
}
