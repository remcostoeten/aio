
import { OAuthButtons } from './oauth-buttons'
import { EmailForm } from './email-form'
import { type AuthFormProps } from '../types'

export function AuthForm({ type, action }: AuthFormProps) {
  return (
    <div className="space-y-6">
      <OAuthButtons />
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-[#666666] bg-[#1C1C1C]">
            or
          </span>
        </div>
      </div>

      <EmailForm type={type} onSubmit={action} />
    </div>
  )
}
