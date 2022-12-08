import axios from "axios";

// оглошую змінні
let genreId = 18;
// оголошую констани
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const MY_KEY = "api_key=102d4305e0abdbf0fd48836d5abb1978";
// оголошую об'єкт подій
const refs = {
    filterList: document.querySelector('.filter-list'),
}
// функція для запису масиву в локал строредж
function addGenresToLocal(dataGenres) {
    localStorage.setItem("genres", JSON.stringify(dataGenres));
}
// фунція для знаходженню та запису масиву жанрів з айдішками
async function fetchGenresToLocal() {
    let urlObject = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?${MY_KEY}&language=en-US`);
    const data = urlObject.data;
    const dataGenres = data.genres;

    addGenresToLocal(dataGenres);
}


fetchGenresToLocal(); 


// фетч для знаходження фільмів по жанрам
async function selectFilm(genreId) {
    let urlObject = await axios.get(`${BASE_URL}?${MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`);
    const data = urlObject.data;
    const dataStatus = urlObject.status;
    const dataResults = data.results;


    if (dataStatus === 200 && dataResults.length > 0) {
        console.log(data);
        return data;
    } else {
        return 0
    }
}
// Функція для знаходження id жанру через перебирання масиву
function findIdGenres(nameGenres) {
     const getGeners = localStorage.getItem("genres");
    const parsedGeners = JSON.parse(getGeners);
    let selectedGenres = parsedGeners.find(gener => gener.name === nameGenres);
    return selectedGenres.id;
}
// функція події для рендеру розмітки
function selectGenerButton(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
   
    const nameGenres = event.target.textContent;
    
    genreId =
    findIdGenres(nameGenres);
    selectFilm(genreId);
    
}


refs.filterList.addEventListener("click", selectGenerButton);