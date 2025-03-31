import { Head, useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

interface FormData {
    name: string;
    date_of_birth: string;
    date_of_death: string;
    content: string;
    author: string;
}

const SubmitObituary = () => {
    const { data, setData, post, errors } = useForm<FormData>({
        name: '',
        date_of_birth: '',
        date_of_death: '',
        content: '',
        author: '',
    });

    const [charCount, setCharCount] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        console.log(`Updating field: ${name}, New value: ${value}`); // 🔍 Debugging log

        setData((prevData) => ({
            ...prevData,
            [name]: value, // ✅ Ensures proper state update
        }));

        if (name === 'content') setCharCount(value.length);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting form with data:', data); // 🔍 Debugging log
        post('/submit-obituary');
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Head title="Submit Obituary" />

            <header className="py-6 shadow-md">
                <div className="container mx-auto px-4">
                    <a href="/" className="text-xl font-semibold text-blue-900 transition hover:text-blue-700">
                        ← Back to Home
                    </a>
                </div>
            </header>

            <main className="container mx-auto max-w-2xl flex-grow px-4 py-12">
                <h1 className="mb-8 text-center text-3xl font-bold text-blue-900">Submit an Obituary</h1>

                <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-md">
                    <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''} />

                    {/* ✅ Fixed Name Field */}
                    <div className="mb-6">
                        <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                            Name of Deceased <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.name && <p className="mt-1 text-red-500">{errors.name}</p>}
                    </div>

                    {/* Other Fields */}
                    <div className="mb-6">
                        <label htmlFor="date_of_birth" className="mb-2 block font-medium text-gray-700">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="date_of_birth"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.date_of_birth && <p className="mt-1 text-red-500">{errors.date_of_birth}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="date_of_death" className="mb-2 block font-medium text-gray-700">
                            Date of Death <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="date_of_death"
                            name="date_of_death"
                            value={data.date_of_death}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.date_of_death && <p className="mt-1 text-red-500">{errors.date_of_death}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="content" className="mb-2 block font-medium text-gray-700">
                            Obituary Content <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={data.content}
                            onChange={handleChange}
                            maxLength={200}
                            rows={4}
                            className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <p className="text-sm text-gray-500">{charCount}/200 characters</p>
                        {errors.content && <p className="mt-1 text-red-500">{errors.content}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="author" className="mb-2 block font-medium text-gray-700">
                            Author <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={data.author}
                            onChange={handleChange}
                            maxLength={30}
                            className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.author && <p className="mt-1 text-red-500">{errors.author}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-800 px-4 py-3 font-bold text-white transition duration-200 hover:bg-blue-700"
                    >
                        Submit Obituary
                    </button>
                </form>
            </main>

            <footer className="bg-blue-900 py-6 text-center text-white">
                <p>© {new Date().getFullYear()} Serenity Memorials. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SubmitObituary;
