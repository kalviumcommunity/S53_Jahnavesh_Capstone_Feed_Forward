import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXLg4AXYHk_DuoC4FPvX2SbsvrcJqmzXc",
  authDomain: "capstone-project-9d919.firebaseapp.com",
  projectId: "capstone-project-9d919",
  storageBucket: "capstone-project-9d919.appspot.com",
  messagingSenderId: "916105831222",
  appId: "1:916105831222:web:40cefc5f4acd35cce7c997",
  measurementId: "G-X0NFLJGWHB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const storage = getStorage()
export const db = getFirestore()

