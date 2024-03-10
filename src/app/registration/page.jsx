import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
            <p className="text-gray-600 text-lg mb-8">We're working on this. Stay tuned!</p>
            <div className="flex space-x-4">
                <Link href="/" className="bg-blue-900 hover:bg-blue-800  text-white py-2 px-4 rounded-full shadow-lg transition duration-300">
                    Home
                </Link>
                <Link href="/reach-us" className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300">
                    contact
                </Link>
            </div>
        </div>
    )
}
