import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import env from 'react-dotenv';

const firebaseConfig = {
    apiKey: env.api_key,
    authDomain: "todo-9858c.firebaseapp.com",
    projectId: "todo-9858c",
    storageBucket: "todo-9858c.appspot.com",
    messagingSenderId: env.msgID,
    appId: "1:25122682020:web:72a73bee5148200afc6231"
  };
  
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export {db}