import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCBExtnLfK2TC-CSMKpMjZw2GTu4QOzVN0",
    authDomain: "tlcshop-239c3.firebaseapp.com",
    databaseURL: "https://tlcshop-239c3-default-rtdb.firebaseio.com",
    projectId: "tlcshop-239c3",
    storageBucket: "tlcshop-239c3.appspot.com",
    messagingSenderId: "693203371154",
    appId: "1:693203371154:web:631e8dbeee54f952e3124b",
    measurementId: "G-JS6VHDHVCV"
};

initializeApp(firebaseConfig)
export const database = getDatabase()