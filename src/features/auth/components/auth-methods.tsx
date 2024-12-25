
import { AuthFeatureFlag, isAuthFeatureEnabled, isAnimationEnabled, AnimationType } from '@/core/config/feature-flags'
import { motion } from 'framer-motion'
import { OAuthButtons } from './oauth-buttons'
import { AuthForm } from './auth-form'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface AuthMethodsProps {
  type: 'login' | 'register'
}

export function AuthMethods({ type }: AuthMethodsProps) {
  const showOAuth = isAuthFeatureEnabled(AuthFeatureFlag.OAUTH)
  const showEmailPassword = isAuthFeatureEnabled(AuthFeatureFlag.EMAIL_PASSWORD)
  const animateOAuth = isAnimationEnabled(AnimationType.OAUTH_BUTTONS)
  const animateEmailForm = isAnimationEnabled(AnimationType.EMAIL_FORM)

  if (!showOAuth && !showEmailPassword) {
    return (
      <div className="text-center text-neutral-400">
        No authentication methods available
      </div>
    )
  }

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {showOAuth && (
        <motion.div 
          variants={animateOAuth ? containerVariants : undefined}
          animate="visible"
          initial="hidden"
        >
          <OAuthButtons />
        </motion.div>
      )}

      {showOAuth && showEmailPassword && (
        <motion.div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#1C1C1C] px-2 text-neutral-400">
              or
            </span>
          </div>
        </motion.div>
      )}

      {showEmailPassword && (
        <motion.div variants={animateEmailForm ? containerVariants : undefined}>
          <AuthForm type={type} />
        </motion.div>
      )}
    </motion.div>
  )
}