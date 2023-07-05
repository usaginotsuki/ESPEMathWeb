import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdiYEpjASgd3vlzY_YZrbyePJeX8U6VvY",
  authDomain: "matbook-93511.firebaseapp.com",
  projectId: "matbook-93511",
  storageBucket: "matbook-93511.appspot.com",
  messagingSenderId: "385796186485",
  appId: "1:385796186485:web:8e6f5854325b46749db33c",
  measurementId: "G-ZCKBWBF9HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
