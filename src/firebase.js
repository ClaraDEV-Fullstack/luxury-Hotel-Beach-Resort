import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration (without appId)
const firebaseConfig = {
    apiKey: "AIzaSyCaboidgtc-_fTItZc56n6o9INDlEJlEKw", // Web API Key
    authDomain: "hotelbookingapp-5071a.firebaseapp.com", // Auth Domain
    projectId: "hotelbookingapp-5071a", // Project ID
    storageBucket: "hotelbookingapp-5071a.appspot.com", // Storage Bucket
    messagingSenderId: "694893115320", // Project Number
    // appId: "1:694893115320:web:abcdef1234567890abcdef", // Optional (can be omitted for now)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Firebase Authentication
export const auth = getAuth(app);