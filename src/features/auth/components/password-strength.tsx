"use client"

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { cn } from '@/shared/helpers'

interface Requirement {
  re: RegExp
  label: string
}

const requirements: Requirement[] = [
  { re: /.{8,}/, label: 'At least 8 characters' },
  { re: /[0-9]/, label: 'At least one number' },
  { re: /[a-z]/, label: 'At least one lowercase letter' },
  { re: /[A-Z]/, label: 'At least one uppercase letter' },
  { re: /[^A-Za-z0-9]/, label: 'At least one special character' },
]

export function PasswordStrength({ password }: { password: string }) {
  const strength = requirements.filter(req => req.re.test(password)).length

  return (
    <div className="space-y-2">
      <div className="h-1 rounded-full bg-neutral-800 overflow-hidden">
        <motion.div
          className="h-full transition-colors"
          style={{
            backgroundColor: [
              'rgb(239, 68, 68)', // red-500
              'rgb(234, 179, 8)', // yellow-500
              'rgb(34, 197, 94)', // green-500
            ][Math.floor((strength / requirements.length) * 3)],
            width: `${(strength / requirements.length) * 100}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${(strength / requirements.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="space-y-1">
        {requirements.map((requirement, index) => {
          const isValid = requirement.re.test(password)
          
          return (
            <motion.div
              key={requirement.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center",
                isValid ? "bg-green-500/20" : "bg-red-500/20"
              )}>
                {isValid ? (
                  <Check className="w-3 h-3 text-green-500" />
                ) : (
                  <X className="w-3 h-3 text-red-500" />
                )}
              </div>
              <span className="text-sm text-neutral-400">
                {requirement.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}