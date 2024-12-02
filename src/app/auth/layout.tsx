/**
 * @author Remco Stoeten
 * @description Auth layout with shared UI elements
 */

import Image from 'next/image'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-[#1C1C1C] text-white">
            <header className="p-4">
                <div className="max-w-7xl mx-auto">
                    <Image
                        src="/logo.svg"
                        alt="AIO Logo"
                        width={24}
                        height={24}
                        className="text-white"
                    />
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-[400px] mx-auto p-4">
                    {children}
                </div>
            </main>
        </div>
    )
} 
