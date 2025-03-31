import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';

interface Obituary {
    id: number;
    name: string;
    date_of_birth: string;
    date_of_death: string;
    content: string;
    author: string;
    submission_date: string;
}

interface Props {
    obituaries: {
        data: Obituary[];
        current_page: number;
        last_page: number;
        links: Array<{ url: string | null; label: string; active: boolean }>;
    };
}

const ViewObituaries: React.FC<Props> = ({ obituaries }) => {
    const handlePageChange = (url: string | null) => {
        if (url) {
            Inertia.visit(url);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-100 to-white">
            <Head title="View Obituaries" />

            <header className="py-6 shadow-md">
                <div className="container mx-auto px-4">
                    <Link href="/" className="text-xl font-semibold text-blue-900 transition hover:text-blue-700">
                        ← Back to Home
                    </Link>
                </div>
            </header>

            <main className="container mx-auto flex-1 px-4 py-12">
                <h1 className="mb-12 text-center font-serif text-4xl font-bold text-blue-900">Recent Obituaries</h1>

                {obituaries.data.length === 0 ? (
                    <div className="py-12 text-center">
                        <p className="text-lg text-gray-700">No obituaries have been submitted yet.</p>
                        <Link
                            href="/submit-obituary"
                            className="mt-6 inline-block transform rounded-lg bg-blue-800 px-8 py-3 text-lg font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                        >
                            Be the first to submit one
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Grid Layout - 4 columns, 2 rows (8 items total) */}
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {obituaries.data.map((obituary) => (
                                <div
                                    key={obituary.id}
                                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-200 hover:scale-[1.02]"
                                >
                                    <div className="bg-blue-800 p-5 text-white">
                                        <h2 className="mb-1 truncate font-serif text-xl font-bold">{obituary.name}</h2>
                                        <p className="text-blue-100">
                                            {new Date(obituary.date_of_birth).toLocaleDateString()} -{' '}
                                            {new Date(obituary.date_of_death).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="p-5">
                                        <p className="mb-4 line-clamp-3 text-gray-700">{obituary.content}</p>
                                        <div className="border-t border-gray-100 pt-3">
                                            <p className="text-sm text-gray-600">Submitted by: {obituary.author}</p>
                                            <p className="mt-1 text-xs text-gray-400">{new Date(obituary.submission_date).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {obituaries.last_page > 1 && (
                            <div className="mt-12 flex items-center justify-center">
                                <nav className="flex items-center space-x-2">
                                    {obituaries.links.map((link, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handlePageChange(link.url)}
                                            disabled={!link.url || link.active}
                                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                                link.active ? 'bg-blue-800 text-white' : 'text-blue-900 hover:bg-blue-100'
                                            } ${!link.url ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                            aria-current={link.active ? 'page' : undefined}
                                        >
                                            {/* Handle "Previous" and "Next" labels */}
                                            {index === 0 ? '«' : index === obituaries.links.length - 1 ? '»' : link.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
};

export default ViewObituaries;
