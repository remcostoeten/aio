/**
 * @author Remco Stoeten
 * @description Vite configuration with build optimizations
 */

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [
			react(),
			visualizer({
				template: 'treemap',
				open: true,
				gzipSize: true,
				brotliSize: true,
				filename: 'dist/stats.html'
			})
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
				ui: resolve(__dirname, './src/shared/components/ui'),
				db: resolve(__dirname, './src/server/db'),
				schema: resolve(__dirname, './src/server/db/schema'),
				mutation: resolve(__dirname, './src/server/actions/mutations'),
				query: resolve(__dirname, './src/server/actions/queries')
			}
		},
		build: {
			target: 'esnext',
			outDir: 'dist',
			assetsDir: 'assets',
			cssCodeSplit: true,
			sourcemap: false,
			minify: 'esbuild',
			rollupOptions: {
				output: {
					manualChunks: {
						'react-vendor': [
							'react',
							'react-dom',
							'react-router-dom'
						],
						'monaco-editor': ['@monaco-editor/react'],
						'ui-components': [
							'@radix-ui/react-dialog',
							'@radix-ui/react-select',
							'@radix-ui/react-tabs'
						]
					}
				}
			},
			chunkSizeWarningLimit: 1000
		},
		server: {
			port: 3000,
			strictPort: true,
			host: true
		},
		preview: {
			port: 3000,
			strictPort: true,
			host: true
		}
	}
})
