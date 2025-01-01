import { Header } from '../components/header';
import { AuthForm } from '../features/auth/components/auth-form';

interface AuthPageProps {
  mode: 'signin' | 'signup';
}

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex pt-16">
        <div className="w-[500px] flex bg-bg items-center justify-center animate-fadeIn overflow-y-auto">
        <div className="w-full max-w-md">
          <AuthForm mode={mode} />
        </div>
        </div>

        <div
          className="border-l border-border flex-1 bg-surface-dark p-8 flex items-center justify-center animate-fadeIn"
          style={{ animationDelay: '200ms' }}
        >
          <div className="max-w-md space-y-6">
            <blockquote className="text-2xl font-medium text-white">
              "The best way to predict the future is to invent it."
            </blockquote>
            <footer className="text-gray-400">
              <cite>Alan Kay</cite>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
