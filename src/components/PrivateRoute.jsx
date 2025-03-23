import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export function PrivateRoute({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading spinner or message
    }

    if (!user) {
        // Redirect to the login page if the user is not authenticated
        return <Navigate to="/login" />;
    }

    // Render the protected component if the user is authenticated
    return children;
}