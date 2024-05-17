import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAZ-TIW9YRlSk3UfRzJ9_KfKKrT7M6Kmw",
  authDomain: "bimbo-panes-react.firebaseapp.com",
  projectId: "bimbo-panes-react",
  storageBucket: "bimbo-panes-react.appspot.com",
  messagingSenderId: "321513562013",
  appId: "1:321513562013:web:d554398d11207b8ba09974",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
