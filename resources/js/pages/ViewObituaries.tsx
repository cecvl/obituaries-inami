// resources/js/Pages/ViewObituaries.tsx
import { Head } from '@inertiajs/inertia-react';
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
    obituaries: Obituary[];
}

const ViewObituaries: React.FC<Props> = ({ obituaries }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="View Obituaries" />

            <header className="bg-blue-900 py-6 text-white shadow-md">
                <div className="container mx-auto px-4">
                    <a href="/" className="text-xl font-semibold transition hover:text-blue-200">
                        ← Back to Home
                    </a>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">Recent Obituaries</h1>

                {obituaries.length === 0 ? (
                    <div className="py-12 text-center">
                        <p className="text-lg text-gray-600">No obituaries have been submitted yet.</p>
                        <a
                            href="/submit-obituary"
                            className="mt-4 inline-block rounded-lg bg-blue-800 px-6 py-3 text-white transition duration-200 hover:bg-blue-700"
                        >
                            Be the first to submit one
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {obituaries.map((obituary) => (
                            <div key={obituary.id} className="overflow-hidden rounded-lg bg-white shadow-md transition duration-200 hover:shadow-lg">
                                <div className="bg-blue-800 p-4 text-white">
                                    <h2 className="truncate text-xl font-bold">{obituary.name}</h2>
                                    <p className="text-blue-200">
                                        {new Date(obituary.date_of_birth).toLocaleDateString()} -{' '}
                                        {new Date(obituary.date_of_death).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 line-clamp-3 text-gray-700">{obituary.content}</p>
                                    <p className="text-sm text-gray-500">Submitted by: {obituary.author}</p>
                                    <p className="mt-2 text-xs text-gray-400">{new Date(obituary.submission_date).toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ViewObituaries;
