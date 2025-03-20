import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export function PrivateRoute({ children }) {
    const user = auth.currentUser;

    if (!user) {
        // Redirect to the login page if the user is not authenticated
        return <Navigate to="/login" />;
    }

    // Render the protected component if the user is authenticated
    return children;
}


