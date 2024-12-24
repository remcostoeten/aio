export const passwordStrengthConfig = {
  minLength: 8,
  requirements: [
    {
      id: 'length',
      label: 'At least 8 characters',
      validator: (password: string) => password.length >= 8
    },
    {
      id: 'lowercase',
      label: 'One lowercase letter',
      validator: (password: string) => /[a-z]/.test(password)
    },
    {
      id: 'uppercase',
      label: 'One uppercase letter',
      validator: (password: string) => /[A-Z]/.test(password)
    },
    {
      id: 'number',
      label: 'One number',
      validator: (password: string) => /\d/.test(password)
    },
    {
      id: 'special',
      label: 'One special character',
      validator: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password)
    }
  ],
  strengthLevels: [
    { threshold: 0, label: 'Very Weak', color: '#ff4444' },
    { threshold: 2, label: 'Weak', color: '#ffbb33' },
    { threshold: 3, label: 'Medium', color: '#00C851' },
    { threshold: 4, label: 'Strong', color: '#007E33' },
    { threshold: 5, label: 'Very Strong', color: '#00695C' }
  ]
} as const