import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    output: 'standalone',
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    images: {
        domains: ['api.uifaces.co']
    }
}

export default nextConfig