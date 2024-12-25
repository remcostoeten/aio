/**
 * @author Remco Stoeten
 * @description Reusable error boundary component with fallback UI
 */

import type { ReactNode } from 'react'
import { Component } from 'react'
import { Button } from 'ui'
import { strings } from '../config/strings'
import { handleError } from '../lib/errors'

type Props = {
	children: ReactNode
	fallback?: ReactNode
	onError?: (error: Error) => void
}

type State = {
	hasError: boolean
	error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error) {
		const handledError = handleError(error)
		console.error('Error caught by boundary:', handledError)
		this.props.onError?.(handledError)
	}

	private getErrorMessage(error: Error | undefined): string {
		const handledError = error ? handleError(error) : undefined

		if (handledError?.code === 'AUTH_ERROR') {
			return strings.errors.auth.unauthorized
		}
		if (handledError?.code === 'NETWORK_ERROR') {
			return strings.errors.network.serverError
		}
		if (handledError?.code === 'VALIDATION_ERROR') {
			return strings.errors.validation.invalid
		}

		return handledError?.message || strings.common.error
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback
			}

			return (
				<div className="flex flex-col items-center justify-center min-h-[200px] p-4 space-y-4">
					<h2 className="text-lg font-semibold">
						{strings.common.error}
					</h2>
					<p className="text-sm text-muted-foreground">
						{this.getErrorMessage(this.state.error)}
					</p>
					<Button
						variant="outline"
						onClick={() =>
							this.setState({ hasError: false, error: undefined })
						}
					>
						{strings.common.retry}
					</Button>
				</div>
			)
		}

		return this.props.children
	}
}
