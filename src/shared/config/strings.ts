/**
 * @author Remco Stoeten
 * @description Centralized string constants for the application
 */

export const strings = {
	common: {
		loading: 'Loading...',
		error: 'Something went wrong',
		retry: 'Try again',
		save: 'Save',
		cancel: 'Cancel',
		delete: 'Delete',
		edit: 'Edit',
		create: 'Create',
		submit: 'Submit',
		search: 'Search',
		noResults: 'No results found',
		required: 'This field is required'
	},
	auth: {
		login: {
			title: 'Welcome back',
			subtitle: 'Sign in to your account',
			emailLabel: 'Email address',
			passwordLabel: 'Password',
			forgotPassword: 'Forgot password?',
			noAccount: "Don't have an account?",
			signUp: 'Sign up',
			signIn: 'Sign in'
		},
		register: {
			title: 'Create an account',
			subtitle: 'Sign up for a new account',
			nameLabel: 'Full name',
			emailLabel: 'Email address',
			passwordLabel: 'Password',
			confirmPasswordLabel: 'Confirm password',
			hasAccount: 'Already have an account?',
			signIn: 'Sign in',
			signUp: 'Sign up'
		},
		errors: {
			invalidCredentials: 'Invalid email or password',
			emailRequired: 'Email is required',
			passwordRequired: 'Password is required',
			emailInvalid: 'Please enter a valid email address',
			passwordTooShort: 'Password must be at least 8 characters',
			passwordMismatch: 'Passwords do not match'
		}
	},
	snippets: {
		editor: {
			newSnippet: 'New Snippet',
			untitled: 'Untitled',
			publish: 'Publish Changes',
			commitMessage: 'Enter a commit message (optional)',
			draft: 'Draft',
			selectLanguage: 'Select a language',
			selectFramework: 'Select a framework',
			addTag: 'Add tag...',
			description: 'Description'
		},
		errors: {
			loadFailed: 'Failed to load snippets',
			saveFailed: 'Failed to save snippet',
			deleteFailed: 'Failed to delete snippet',
			publishFailed: 'Failed to publish changes'
		}
	},
	errors: {
		network: {
			offline: 'You are offline',
			timeout: 'Request timed out',
			serverError: 'Server error occurred'
		},
		validation: {
			required: 'This field is required',
			invalid: 'This field is invalid',
			tooShort: 'This field is too short',
			tooLong: 'This field is too long'
		},
		auth: {
			unauthorized: 'You are not authorized',
			unauthenticated: 'Please sign in to continue',
			sessionExpired: 'Your session has expired'
		}
	}
}
