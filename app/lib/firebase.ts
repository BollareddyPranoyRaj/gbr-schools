import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR6PUC4GAC2Y_toSO9lZpp63edyAyOvIE",
  authDomain: "gbr-schools.firebaseapp.com",
  projectId: "gbr-schools",
  storageBucket: "gbr-schools.firebasestorage.app",
  messagingSenderId: "274042756802",
  appId: "1:274042756802:web:27489b0b6b812b58e4a55b"
};

// Prevent duplicate initialization during hot reloading in Next.js development
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
