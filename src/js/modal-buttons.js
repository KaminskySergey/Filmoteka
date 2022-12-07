const LOCALSTORAGE_WATCHED = "watched";
const LOCALSTORAGE_QUEUE = "queue";

let watchedMovies = [];
let queueOfMovies = [];

// watchedMovies.push(localStorage.getItem(LOCALSTORAGE_WATCHED));
// queueOfMovies.push(localStorage.getItem(LOCALSTORAGE_QUEUE));


const addToWatchedBtn = document.querySelector(`[data-action="watched"]`);
const addToQueueBtn = document.querySelector(`[data-action="queue"]`);

addToWatchedBtn.addEventListener("click", addToWatched);
addToQueueBtn.addEventListener("click", addToQueue);

const localStorageIsNotEmpty = localStorage.getItem(LOCALSTORAGE_WATCHED);
if (localStorageIsNotEmpty){
    addToWatchedBtn.textContent = "remove from Watched";
}

function addToWatched () {
    if (addToWatchedBtn.textContent === "add to Watched") {
        watchedMovies.push("movie-object-in-JSON");
        localStorage.setItem(LOCALSTORAGE_WATCHED, watchedMovies);
        addToWatchedBtn.textContent = "remove from Watched";
        return;
    };
 
    removeFromWatched("movie-object-in-JSON");
    addToWatchedBtn.textContent = "add to Watched";

}

function removeFromWatched (movie) {
    const indexOfRemovedMovie = watchedMovies.indexOf(movie);
    watchedMovies.splice(indexOfRemovedMovie, 1);
    if (watchedMovies.length === 0) {
        localStorage.removeItem(LOCALSTORAGE_WATCHED);
        return;
    };
    localStorage.setItem(LOCALSTORAGE_WATCHED, watchedMovies);
}

function addToQueue () {

}