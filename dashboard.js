// auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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


document.querySelector('.signOut').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('Sign Out Successfully');
        alert('Sign Out Successfully');
        location.replace('/index.html')
    })
    .catch((error) => {
        console.log('Error Occured');
    })
})


document.querySelector('#dashboard').addEventListener('click', ()=>{
    location.replace('/dashboard/dashboard.html');
})
document.querySelector('#userManagement').addEventListener('click', ()=>{
    window.open('usermanagement.html');
  window.close();
})
document.querySelector('#manageProduct').addEventListener('click', ()=>{
    location.replace('/manageproducts/manageproducts.html');
})
document.querySelector('#manageCategories').addEventListener('click', ()=>{
    location.replace('/managecategories/managecategories.html');
})
document.querySelector('#supplier').addEventListener('click', ()=>{
    location.replace('/suppliers/suppliers.html');
})
document.querySelector('#pointOfSales').addEventListener('click', ()=>{
    location.replace('/pointsofsales/pointsofsales.html');
})
document.querySelector('#purchaseOrder').addEventListener('click', ()=>{
    location.replace('/reorder/reorder.html');
})
document.querySelector('#salesHistory').addEventListener('click', ()=>{
    location.replace('/saleshistory/saleshistory.html');
})
document.querySelector('#salesReport').addEventListener('click', ()=>{
    location.replace('/salesreport/salesreport.html');
})
