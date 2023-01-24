// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAiD-I3AIjbsjdam1A64AhKJPrsqni2Emg',
  authDomain: "movies-app-9bf97.firebaseapp.com",
  projectId: "movies-app-9bf97",
  storageBucket: "movies-app-9bf97.appspot.com",
  messagingSenderId: "356244698846",
  appId: "1:356244698846:web:5959a7206f966c7ddb744f" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
