import { Head, Link } from '@inertiajs/inertia-react';

export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-100 to-white">
            <Head title="Welcome" />

            {/* Main content that grows to push footer down */}
            <main className="flex flex-1 items-center justify-center px-4 py-16 text-center">
                <div className="w-full max-w-3xl">
                    <h1 className="mb-6 font-serif text-5xl font-bold text-blue-900">Inami Jamii Funeral Home</h1>
                    <p className="mb-10 text-xl leading-relaxed text-gray-700">
                        Honoring lives with dignity and compassion. Our online memorials help families celebrate their loved ones.
                    </p>

                    <div className="flex flex-col justify-center gap-6 sm:flex-row">
                        <Link
                            href="/submit-obituary"
                            className="transform rounded-lg bg-blue-800 px-8 py-4 text-lg font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                        >
                            Submit an Obituary
                        </Link>
                        <Link
                            href="/view-obituaries"
                            className="transform rounded-lg border-2 border-blue-800 bg-white px-8 py-4 text-lg font-medium text-blue-800 shadow-md transition-all hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg"
                        >
                            View Memorials
                        </Link>
                    </div>
                </div>
            </main>

            {/* Updated footer with social icons */}
            <footer className="w-full border-t border-gray-300 py-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
                        {/* Contacts section */}
                        <div className="text-center">
                            <div className="text-blue-900">
                                <p className="font-medium">Contact Us</p>
                                <p className="text-sm">Nakuru, KENYA</p>
                                <p className="text-sm">Phone: (555) 123-4567</p>
                                <p className="text-sm">Email: care@inamijamii.com</p>
                            </div>
                        </div>

                        {/* Social media section with icons */}
                        <div className="text-center">
                            <div className="text-blue-900">
                                <div className="flex items-center justify-center gap-2">
                                    <p className="font-medium">Follow Us</p>
                                    {/* Share icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-2 flex justify-center gap-4">
                                    {/* Facebook */}
                                    <a href="#" className="rounded-full p-2 text-blue-700 hover:bg-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>

                                    {/* Twitter */}
                                    <a href="#" className="rounded-full p-2 text-blue-400 hover:bg-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href="#" className="rounded-full p-2 text-blue-600 hover:bg-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a href="#" className="rounded-full p-2 text-pink-600 hover:bg-pink-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        © {new Date().getFullYear()} Inamii Jamii Funeral Home. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
