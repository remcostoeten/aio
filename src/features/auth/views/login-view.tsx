import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/shared/helpers'
import { Github } from 'lucide-react'
import { Logo } from '@/components/theme/logo'
import { Separator } from '@/shared/components/ui'
import { useSignIn } from '../api/mutations'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginView() {
  const signIn = useSignIn()
  const { 
    register, 
    handleSubmit, 
    formState: { errors, touchedFields } 
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center">
        <Logo className="h-8" />
        <a 
          href="/docs" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Documentation
        </a>
      </header>

      {/* Main Content */}
      <div className="container relative min-h-screen flex items-center justify-center">
        <div className="w-[400px] space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          {/* OAuth */}
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => signIn.mutate({ provider: 'github' })}
          >
            <Github className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit((data) => signIn.mutate(data))}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className={cn(
                    "transition-all duration-200",
                    touchedFields.email && errors.email && "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...register('email')}
                />
                {touchedFields.email && errors.email && (
                  <p className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="••••••••"
                  className={cn(
                    "transition-all duration-200",
                    touchedFields.password && errors.password && "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...register('password')}
                />
                {touchedFields.password && errors.password && (
                  <p className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                loading={signIn.isPending}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Quote */}
      <footer className="fixed bottom-0 left-0 right-0 p-6">
        <blockquote className="text-sm text-muted-foreground">
          "The art of programming is the art of organizing complexity." 
          <span className="block mt-2">― Remco Stoeten</span>
        </blockquote>
      </footer>
    </div>
  )
} 
    