// import { Notify } from 'notiflix'


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

        async function getDocumentWatched() {
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

        async function getDocumentQueue() {
          var ref = doc(db, "Queue", currentUser.email);
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

      //  export async function updateDocInWatched() {
          
      //     const ref = doc(db, "Watched", currentUser.email)
      //     const docRef = await updateDoc(ref, { [movieID]: { id: movieID, title: movieTitle, poster: moviePoster, genres: movieGenres, date: movieReleaseDate } })
      //       console.log(movieGenres);
      //   }

      //   export  async function updateDocInQueue() {
          
      //     const ref = doc(db, "Queue", currentUser.email)
      //     const docRef = await updateDoc(ref, { [movieID]: { id: movieID, title: movieTitle, poster: moviePoster, genres: movieGenres, date: movieReleaseDate } })
      //       console.log(movieGenres);
      //   }

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

// ===================== LIBRARY ==========================

const headerWatchedBtn = document.querySelector('.my_library-btn_watched');
const headerQueueBtn = document.querySelector('.my_library-btn_queue');

headerWatchedBtn.addEventListener('click', showWatchedResult);
headerQueueBtn.addEventListener('click', showQueueResult);

async function showWatchedResult() {
    try {
        const data = await getDocumentWatched();
        const resultEl = await renderLibraryMarkup(data);
        
        galleryEl.innerHTML = resultEl;
        
    } catch (error) {
        Notify.failure('Oops, something went wrong! We are working hard to fix it!');
        console.log(error)
    }
}

async function showQueueResult() {
    try {
        const data = await getDocumentQueue();
        const resultEl = await renderLibraryMarkup(data);
        
        galleryEl.innerHTML = resultEl;
        
    } catch (error) {
        Notify.failure('Oops, something went wrong! We are working hard to fix it!');
        console.log(error)
    }
}

async function getDocumentWatched() {
          var ref = doc(db, "Watched", currentUser.email);
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {
           
            let data = docSnap.data();
            // console.log(data)
            return data;
          }
          else {
            alert("No such document") // "Sorry, your collection is empty. Try to add something there first!"
            // ЗДЕСЬ МОЖНО ОТРЕНДЕРИТЬ ЗАГЛУШКУ В ГАЛЕРЕЮ WATCHED, ЕСЛИ ОНА ПУСТАЯ
          }
}

async function getDocumentQueue() {
          var ref = doc(db, "Queue", currentUser.email);
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {
           
            let data = docSnap.data();
            // console.log(data)
            return data;
          }
          else {
            alert("No such document") // "Sorry, your collection is empty. Try to add something there first!"
            // ЗДЕСЬ МОЖНО ОТРЕНДЕРИТЬ ЗАГЛУШКУ В ГАЛЕРЕЮ WATCHED, ЕСЛИ ОНА ПУСТАЯ
          }
}
        
function renderLibraryMarkup(data) {

const markup = [];   
for (let key in data){
    const id = data[key].id;
    const release_date = data[key].date;
    const genreArr = [];    
    const genreObj = data[key].genres;
    console.log(genreArr)
    genreObj.map((genre) => genreArr.push(genre.name))
    
    const poster_path = data[key].poster;
    const title = data[key].title;
    const genre_ids = genreArr.join(", ");

  const markupEl =
    
    `<li class="gallery__item thumb" data-id="${id}">
                <img class="gallery__img" loading="lazy" alt='${movie.title}' src= '${IMG_URL}${poster_path}' />
                <p class="gallery__title">'${title}'</p>
                <p class="gallery__genre">${genre_ids} | ${release_date.substr(0, 4)}</p>

            </li>
   `
    
    markup.push(markupEl);
    console.log(release_date)
}
    
    return markup;
}

// ======================== LIBRARY ^^ ================================

