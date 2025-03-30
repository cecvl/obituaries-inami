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

            {/* Sticky footer */}
            <footer className="w-full bg-blue-900 py-8 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col items-center justify-between md:flex-row md:text-left">
                        <div className="mb-4 md:mb-0">
                            <h2 className="mb-2 font-serif text-2xl font-bold">Inami Jamii Funeral Home</h2>
                            <p className="text-blue-200">Nakuru, KENYA</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-blue-200">Phone: (555) 123-4567</p>
                            <p className="text-blue-200">Email: care@inamijamii.com</p>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-blue-300">© {new Date().getFullYear()} Inamii Jamii Funeral Home. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
