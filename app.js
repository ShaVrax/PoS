const loginBtn = document.querySelector('#loginBtn');
const signupBtn = document.querySelector('#signupBtn');
const signupForm = document.getElementById('signup');

document.querySelector('#forgotPassword').addEventListener('click', ()=>{
  location.replace('/forgotpassword/forgotpassword.html');
})

signupBtn.addEventListener('click', ()=>{
    signupForm.style.left = '0px';
})

loginBtn.addEventListener('click', ()=>{
    signupForm.style.left = '1200px';
})

let clearText = () =>{
    let password = document.querySelector('.password');
    let username = document.querySelector('.username');
    password.value = '';
    username.value = '';
}

// auth
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCObxjPYHb8tE7c5aw42B2Dw3dBGbOKQ0M",
    authDomain: "pos-project-893cb.firebaseapp.com",
    projectId: "pos-project-893cb",
    storageBucket: "pos-project-893cb.appspot.com",
    messagingSenderId: "409155072529",
    appId: "1:409155072529:web:31ded94cc28f33d3cff7b0",
    measurementId: "G-PY0L5WNNRY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  document.querySelector('.signup-btn').addEventListener('click', () => {
    let signupEmail = document.querySelector('#signupEmail').value;
    let signupPassword = document.querySelector('#signupPassword').value;

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert('New Admin Registered!');
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        alert(error);
    })
  })

  document.querySelector('.login-btn').addEventListener('click', () => {
    let loginEmail = document.querySelector('#loginEmail').value;
    let loginPassword = document.querySelector('#loginPassword').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert('Log In Successfully');
        window.open("dashboard/dashboard.html");
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        alert(error);
    })
  })
