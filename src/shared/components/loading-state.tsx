/**
 * @author Remco Stoeten
 * @description Reusable loading state component with variants
 */

import { cn } from '@/shared/helpers'
import type { HTMLAttributes } from 'react'

type LoadingVariant = 'spinner' | 'dots' | 'pulse'

type LoadingStateProps = HTMLAttributes<HTMLDivElement> & {
	variant?: LoadingVariant
	text?: string
	fullscreen?: boolean
}

export function LoadingState({
	variant = 'spinner',
	text = 'Loading...',
	fullscreen = false,
	className,
	...props
}: LoadingStateProps) {
	const content = (
		<>
			{variant === 'spinner' && (
				<div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
			)}
			{variant === 'dots' && (
				<div className="space-x-1">
					<span className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce" />
					<span className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
					<span className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
				</div>
			)}
			{variant === 'pulse' && (
				<div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
			)}
			{text && (
				<span className="text-sm text-muted-foreground mt-2">
					{text}
				</span>
			)}
		</>
	)

	if (fullscreen) {
		return (
			<div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
				<div className="flex flex-col items-center justify-center min-h-screen">
					{content}
				</div>
			</div>
		)
	}

	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center p-4',
				className
			)}
			{...props}
		>
			{content}
		</div>
	)
}
