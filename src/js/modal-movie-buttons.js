
const movieInfo = {}; 
const LOCALSTORAGE_WATCHED = "watched";
const LOCALSTORAGE_QUEUE = "queue";

let watchedMovies = [];
let queueOfMovies = [];

const movieInJSON = JSON.stringify(movieInfo);

// watchedMovies.push(localStorage.getItem(LOCALSTORAGE_WATCHED));
// queueOfMovies.push(localStorage.getItem(LOCALSTORAGE_QUEUE));


const addToWatchedBtn = document.querySelector(`[data-action="watched"]`);
const addToQueueBtn = document.querySelector(`[data-action="queue"]`);

addToWatchedBtn.addEventListener("click", addToWatched);
addToQueueBtn.addEventListener("click", addToQueue);

const watchedListIsNotEmpty = localStorage.getItem(LOCALSTORAGE_WATCHED);
if (watchedListIsNotEmpty){
    addToWatchedBtn.textContent = "remove from Watched";
};

const queueIsNotEmpty = localStorage.getItem(LOCALSTORAGE_QUEUE);
if (queueIsNotEmpty){
    addToQueueBtn.textContent = "remove from queue";
};

function addToWatched() {
    
    if (addToWatchedBtn.textContent === "add to Watched") {
        watchedMovies.push(movieInJSON);
        localStorage.setItem(LOCALSTORAGE_WATCHED, watchedMovies);
        addToWatchedBtn.textContent = "remove from Watched";
        return;
    };
 
    removeFromWatched(movieInJSON);
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
    if (addToQueueBtn.textContent === "add to queue") {
        queueOfMovies.push(movieInJSON);
        localStorage.setItem(LOCALSTORAGE_QUEUE, queueOfMovies);
        addToQueueBtn.textContent = "remove from queue";
        return;
    };
 
    removeFromQueue(movieInJSON);
    addToQueueBtn.textContent = "add to queue";
};

function removeFromQueue (movie) {
    const indexOfRemovedMovie = queueOfMovies.indexOf(movie);
    queueOfMovies.splice(indexOfRemovedMovie, 1);
    if (queueOfMovies.length === 0) {
        localStorage.removeItem(LOCALSTORAGE_QUEUE);
        return;
    };
    localStorage.setItem(LOCALSTORAGE_QUEUE, queueOfMovies);
}

