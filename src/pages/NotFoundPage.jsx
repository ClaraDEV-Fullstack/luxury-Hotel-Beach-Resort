import React from 'react';

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-gray-800">404 - Oops! Page Not Found</h1>
            <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
        </div>
    );
}