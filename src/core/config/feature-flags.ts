export enum FeatureFlag {
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  SOCIAL_LOGIN = 'SOCIAL_LOGIN',
  TWO_FACTOR_AUTH = 'TWO_FACTOR_AUTH',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  PASSWORD_STRENGTH_CHECKER = 'PASSWORD_STRENGTH_CHECKER',
  SHOW_NOTIFICATIONS = 'SHOW_NOTIFICATIONS'
}

export enum AnimationType {
  GRID = 'grid',
  AUTH_FADE = 'authFade',
  PASSWORD_STRENGTH = 'passwordStrength',
  STAGGERED_FADE = 'staggeredFade'
}

type FeatureFlagsConfig = {
  [key in FeatureFlag]: boolean
} & {
  animations: {
    [key in AnimationType]: boolean
  }
}

export const featureFlags: FeatureFlagsConfig = {
  [FeatureFlag.FORGOT_PASSWORD]: true,
  [FeatureFlag.SOCIAL_LOGIN]: true,
  [FeatureFlag.TWO_FACTOR_AUTH]: false,
  [FeatureFlag.EMAIL_VERIFICATION]: true,
  [FeatureFlag.PASSWORD_STRENGTH_CHECKER]: true,
  [FeatureFlag.SHOW_NOTIFICATIONS]: true,
  animations: {
    [AnimationType.GRID]: true,
    [AnimationType.AUTH_FADE]: true,
    [AnimationType.PASSWORD_STRENGTH]: true,
    [AnimationType.STAGGERED_FADE]: true
  }
} as const

export const isFeatureEnabled = (feature: FeatureFlag): boolean => {
  return featureFlags[feature]
}

export const isAnimationEnabled = (animation: AnimationType): boolean => {
  return featureFlags.animations[animation]
}