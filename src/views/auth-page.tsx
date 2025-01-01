import { Header } from '../components/header';
import AuthForm from '../features/auth/components/auth-form';
import Logo from '../components/theme/logo';

interface AuthPageProps {
  mode: 'signin' | 'signup' | 'forgot-password'
}

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <div className="min-h-screen flex">
      <div className="fixed top-4 left-4">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="w-[500px] flex bg-bg items-center justify-center animate-fadeIn overflow-y-auto">
        <div className="w-full max-w-md">
          <AuthForm mode={mode} />
        </div>
      </div>

      <div className="border-l border-border flex-1 bg-surface-dark p-8 flex items-center justify-center animate-fadeIn" style={{ animationDelay: '200ms' }}>
        <div className="max-w-md space-y-6">
          <blockquote className="text-2xl font-medium text-white animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            "The best way to predict the future is to invent it."
          </blockquote>
          <footer className="text-gray-400 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <cite>Alan Kay</cite>
          </footer>
        </div>
      </div>
    </div>
  );
  }