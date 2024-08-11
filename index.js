import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzP3KMRSD-lyOoL3HZsacNZsclG2dwrhk",
  authDomain: "login-js-b6fe3.firebaseapp.com",
  projectId: "login-js-b6fe3",
  storageBucket: "login-js-b6fe3.appspot.com",
  messagingSenderId: "923388580094",
  appId: "1:923388580094:web:a50134bb072d6af33555af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// Button Calling

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //  input fields calling

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account..");
    //   window.location.href = "homw.html";
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("errorMessage");
      
      // ..
    });
});
