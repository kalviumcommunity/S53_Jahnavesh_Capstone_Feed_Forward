import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.API_KEY_FB,
  authDomain: import.meta.AUTH_DOMAIN_FB,
  projectId: import.meta.PROJECT_ID_FB,
  storageBucket: import.meta.STORAGE_BUCKET_FB,
  messagingSenderId: import.meta.MESSAGING_SENDER_ID_FB,
  appId: import.meta.APP_ID_FB,
  measurementId: import.meta.MEASUREMENT_ID_FB
};

const app = initializeApp(firebaseConfig);
