// import './css/styles.css';
// import axios from 'axios';
// import { Notify } from 'notiflix';
// import { toggleModal } from './modal';
// import { result } from 'lodash';

// const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
// const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
// const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
// const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]

// const formEl = document.querySelector('.search')
// const inputEl = document.querySelector('.search__input')
// const galleryEl = document.querySelector('.gallery');
// const submitBtn = document.querySelector('[type="submit"]');
// const modalEl = document.querySelector('.js-modal-content')

//===================================================================

const signUpModal = document.querySelector("[data-signUp-modal]")
const openSignUpModalBtn = document.querySelector("[data-signUp-modal-open]")
const closeSignUpModal = document.querySelector("[data-signUp-modal-close]")

openSignUpModalBtn.addEventListener('click', openSignUp)
closeSignUpModal.addEventListener('click', closeSignUp)

function openSignUp() {
  signUpModal.classList.remove('visually-hidden')
  closeSignIn()
}

function closeSignUp() {
    signUpModal.classList.add('visually-hidden');
    signUpWarning.textContent = "";
}

const signInModal = document.querySelector("[data-signIn-modal]")
const openSignInModalBtn = document.querySelector("[data-signIn-modal-open]")
const closeSignInModal = document.querySelector("[data-signIn-modal-close]")

openSignInModalBtn.addEventListener('click', openSignIn)
closeSignInModal.addEventListener('click', closeSignIn)

function openSignIn() {
  signInModal.classList.remove('visually-hidden')
  closeSignUp()
}

function closeSignIn() {
    signInModal.classList.add('visually-hidden')
    signInWarning.textContent = "";
}

const navLoggedOut = document.querySelector('.nav-list-logged-out')
const navLoggedIn = document.querySelector('.nav-list-logged-in')
// =================================================

// FIREBASE:

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBcfxQYKzPS-PPfylqlwMHtDaShDcUDiEg",
//   authDomain: "testmoviebase.firebaseapp.com",
//   projectId: "testmoviebase",
//   storageBucket: "testmoviebase.appspot.com",
//   messagingSenderId: "1008932581270",
//   appId: "1:1008932581270:web:6d27972f39650ac22cf7b7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// ===============================================

// FIRESTORE:


// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
// console.log(db);
// // import { collection, addDoc } from "firebase/firestore";
// console.log(collection);
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


// ================================================

//MODAL REFS:

// const closeModalBtn = document.querySelector("[data-modal-close]");
// const modal = document.querySelector("[data-modal]");

//============================================

// submitBtn.addEventListener('click', onSubmit);
// galleryEl.addEventListener('click', onGalleryClick);

// let genreArray = [];

// fetchGenres();



// async function onGalleryClick(event) {
//     if (event.target !== galleryEl) {
//         const movieID = event.target.closest('li').id;
//         // console.log(movieEl);
        
//         await showModalResult(movieID)
//         openModal();
//     }
// }

// async function onSubmit(event) {
//     event.preventDefault();
//     await showPageResult();
//     formEl.reset();
 
// }

// async function fetchMovies() {

//     const response = await axios.get(BASE_URL, {
//         params: {
//             api_key: API_KEY,
//             query: inputEl.value,
//             // query: 'Alice',
//             page: 1,
//         }
//     }
//     )
//     const data = response.data;
//     console.log(data)
//     return data;
// }

// async function fetchDetails(id) {
//     const response = await axios.get(`${DETAILS_URL}${id}`, {
//         params: {
//             api_key: API_KEY,
//         }
//     }
//     )
//     const details = response.data;
//     console.log();
//     return details;
// }

const x = "hello";

// fetchDetails(104);

// function renderModalMarkup(details) {
//     console.log(details)
//     const { poster_path, vote_average, vote_count, popularity, title, original_title, overview } = details; 
    
//     const markup = `
//         <div class="modal__thumb">
//             <img src="${IMG_URL}${poster_path}" alt="" class="modal__picture">
//         </div>
//         <div class="modal__info">
//             <h3 class="modal__title">${title}</h3>
//             <ul class="modal__stats">
//                 <ul class="modal__stats-name">
//                     <li class="modal__stats-item">Vote / Votes</li>
//                     <li class="modal__stats-item">Popularity</li>
//                     <li class="modal__stats-item">Original Title</li>
//                     <li class="modal__stats-item">Genre</li>
//                 </ul>
//                 <ul class="modal__stats-value">
//                     <li class="modal__stats-item"><span class="modal-rating">${vote_average}</span> / ${vote_count}</li>
//                     <li class="modal__stats-item">${popularity}</li>
//                     <li class="modal__stats-item">${original_title}</li>
//                     <li class="modal__stats-item">GENRES!!!</li>
//                 </ul>
//             </ul>
      
//             <h4 class="modal__about-title">About</h4>
//             <p class="modal__description">${overview}</p>
//             <div class="modal__buttons">
//                 <button type="button" class="modal__button">ADD TO WATCHED</button>
//                 <button type="button" class="modal__button">ADD TO QUEUE</button>
//             </div>
//         </div>
        
//         `;
//     console.log(markup)
//     return markup;
// }

// function renderPageMarkup(data) {

//     const { results } = data;
//     const markup = results.map(({ poster_path, genre_ids, id, release_date, title }) => 
               
//         `<li class="gallery__item" id="${id}">
//             <div class="gallery__thumb">
//                 <img src="${IMG_URL}${poster_path}" alt="" class="gallery__picture">
//             </div>
//             <h2 class="gallery__title">${title}</h2>
//             <p class="gallery__info">${decodeGenres(genre_ids)} | ${release_date.substr(0, 4)}</p>
//         </li>`).join("");
    
//     return markup;
// }

// async function showModalResult(movieID) {
//     try {
//         const details = await fetchDetails(movieID);
//         const resultEl = renderModalMarkup(details);
        
//         modalEl.insertAdjacentHTML('beforeend', resultEl);


//         // closeModalBtn.addEventListener("click", closeModal);

//     } catch (error) {
//         Notify.failure('Oops, something went wrong! We are working hard to fix it!');
//     }
// }

// async function showPageResult() {
//     try {
//         const data = await fetchMovies();
//         const resultEl = await renderPageMarkup(data);
        
//         galleryEl.innerHTML = resultEl;


//         closeModalBtn.addEventListener("click", closeModal);

//     } catch (error) {
//         Notify.failure('Oops, something went wrong! We are working hard to fix it!');
//     }
// }

// async function fetchGenres() {

//     const response = await axios.get(GENRES_URL, {
//             params: {
//                 api_key: API_KEY,
//             }
//         }
//     )
//     const { genres } = response.data;
//     genreArray = genres;
//     return;
// }

// function decodeGenres([...args]) {
//     const genres = [];
//     args.map((id) => genreArray.find((el) => {
//         if (el.id === id) {
//             genres.push(el.name);
//         }
//     }))

//     return genres.join(", ");
// }

// function openModal() {
//     modal.classList.remove("is-hidden")
// }

// function closeModal() {
//     modal.classList.add("is-hidden")
//     modalEl.innerHTML = '';
// }






// async function createSessionID(token) {
// const response = await axios.get(`
// https://api.themoviedb.org/3/authentication/session/new`, {
//     params: {
//             api_key: API_KEY,
//         // request_token: `${token}`,
//             body : JSON.stringify(
//                 { "request_token": "f230ba5b6c583994024e856e24bbdb903005a09f" }
//   )
//         }
//     }
//     )
//     const sessionID = response.data;
//     console.log(sessionID)
//     return sessionID;
// }

// let token = '';

// async function getToken() {
//     const response = await axios.get(`https://api.themoviedb.org/3/authentication/token/new`, {
//         params: {
//             api_key: API_KEY,
//         }
//     }
//     )
//     token = await response.data.request_token;
//     console.log(response.data.request_token)
//     console.log(token);
//     // return token;
// }


// async function ID() {
//     await getToken();
    
//     await createSessionID(token)
//     console.log(sessionID)
// }


// ID();

// function toggleModal() {
//     modal.classList.toggle("is-hidden");
//   }




// function toggleModal() {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// };




const firebaseConfig = {
  apiKey: "AIzaSyBcfxQYKzPS-PPfylqlwMHtDaShDcUDiEg",
  authDomain: "testmoviebase.firebaseapp.com",
  projectId: "testmoviebase",
  storageBucket: "testmoviebase.appspot.com",
  messagingSenderId: "1008932581270",
  appId: "1:1008932581270:web:6d27972f39650ac22cf7b7"
};



import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";      

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const signUpBtn = document.querySelector('#signUp');
const signInBtn = document.querySelector('#signIn');
const signOutBtn = document.querySelector('#signOut');

const nickName = document.querySelector('#displayName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const userName = document.querySelector('.curr');
const signInEmail = document.querySelector('#sign-in-email');
const signInPassword = document.querySelector('#sign-in-password');

const signUpWarning = document.querySelector('.sign-up-warning');
const signInWarning = document.querySelector('.sign-in-warning');

let currentUser;





signUpBtn.addEventListener('click', signUp);
signInBtn.addEventListener('click', signIn);
signOutBtn.addEventListener('click', signUserOut);


// ===================== FIRESTORE: ============================

        // let insBtn = document.getElementById("InsBtn");
        // let selBtn = document.getElementById("SelBtn");
        // let updBtn = document.getElementById("UpdBtn");
        // let delBtn = document.getElementById("DelBtn");

        
        async function AddDocument_Watched() {
          const refWatched = doc(db, "Watched", currentUser.email)
          const docRef = await setDoc(refWatched, {})
            
            .then(() => {
              console.log('Successful operation!')
            })
            .catch((error) => {
              alert("Unsuccessful operation, error:" + error);
            })
        }


        async function AddDocument_Queue() {
          const refWatched = doc(db, "Queue", currentUser.email)
          const docRef = await setDoc(refWatched, {})
            
            .then(() => {
              console.log('Successful operation!')
            })
            .catch((error) => {
              alert("Unsuccessful operation, error:" + error);
            })
}
        

        async function GetADocument() {
          var ref = doc(db, "Watched", currentUser.email);
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {
           
            let obj = docSnap.data();
            console.log(obj)
            
          }
          else {
            alert("No such document") // "Sorry, your collection is empty. Try to add something there first!"
            // ЗДЕСЬ МОЖНО ОТРЕНДЕРИТЬ ЗАГЛУШКУ В ГАЛЕРЕЮ WATCHED, ЕСЛИ ОНА ПУСТАЯ
          }
        }

        async function UpdateDocInBase() {
          
          const ref = doc(db, "Watched", currentUser.email)
          const docRef = await updateDoc(ref, { movie555: { id: 555, title: "Annabell", poster: "https://sfdsdfsdf.jpg" } })
        }

        // insBtn.addEventListener("click", AddDocument_CustomID);
        // selBtn.addEventListener("click", GetADocument);
        // updBtn.addEventListener("click", UpdateDocInBase);

// ===================== FIRESTORE ^^ ============================

// =====================  AUTH:  ==========================



function signUp() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userName)
      AddDocument_Watched();
      AddDocument_Queue();
    updateProfile(auth.currentUser, {
        displayName: nickName.value
    })
      userName.textContent = `Welcome, ${nickName.value}!`;
    // ...
  })
    
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      
    console.log(errorCode);
    console.log(errorMessage);
    
    if (error.code === "auth/weak-password") {
        signUpWarning.textContent = "Password should be at least 6 characters!";
    } else if (error.code === "auth/email-already-in-use") {
        signUpWarning.textContent = "This email is already in use! Choose another one or Log In with this email!";
    } else if (error.code === "auth/invalid-email") {
        signUpWarning.textContent = "Please, use correct and existing email!";
    }

  });
}

function signIn() {
  signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    const user = userCredential.user;
    // ...
    console.log(userCredential.user.email)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    if (error.code === "auth/too-many-requests") {
        signInWarning.textContent = "Access to this account has been temporarily disabled due to many failed login attempts!";
    } else if (error.code === "auth/wrong-password") {
        signInWarning.textContent = "Your password is invalid!";
    } else if (error.code === "auth/user-not-found") {
        signInWarning.textContent = "No user with such email!";
    } else if (error.code === "auth/invalid-email") {
        signInWarning.textContent = "You should write Your email in the email field!";
    }
  });
}

function signUserOut() {
  signOut(auth).then(() => {
  // Sign-out successful.
    
}).catch((error) => {
  // An error happened.
});

}


auth.onAuthStateChanged((user)=>{
    if(user){
        // alert("Active user " + email);
      currentUser = user;
      console.log(currentUser)
      userName.textContent = `Welcome, ${currentUser.displayName}!`;
     
      
        closeSignUp()
        closeSignIn();
        navLoggedIn.classList.remove('visually-hidden');
        navLoggedOut.classList.add('visually-hidden');

    }else{
        // alert("No Active user Found")
      currentUser = user;
      console.log(currentUser)
        userName.textContent = "";
     
        
        navLoggedOut.classList.remove('visually-hidden');
        navLoggedIn.classList.add('visually-hidden');
    }
  })


// ===================== AUTH ^^ ==========================

