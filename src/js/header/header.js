import axios from "axios";
import { fetchGenres } from "../gallery/poular_movie";
import { decodeGenres } from "../gallery/poular_movie";
import { IMG_URL } from "../gallery/poular_movie";

const ref = {
    searchForm: document.querySelector('.form-search'),
    searchInput: document.querySelector('.form-search__input'),
    searchButton: document.querySelector('.form-search__submit'),
}

let page = 1;
let inputValue = "";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const MY_KEY = "api_key=102d4305e0abdbf0fd48836d5abb1978"

fetchGenres()

if (!!ref.searchForm) {
    
    ref.searchForm.addEventListener("submit", makeSubmit)
}

function makeSubmit(e) {
    e.preventDefault(); 
    
    inputValue = e.target[0].value.trim()

    if (inputValue === "") { 
        
        return
    } else {
        
        makeMarkup(page)
    }
    // console.log(inputValue)
    
}

async function fetchAxios(page) {
    let urlObject = await axios.get(`${BASE_URL}?${MY_KEY}&query=${inputValue}&page=${page}`);
    const data = urlObject.data;
    const dataStatus = urlObject.status;
    const dataResults = data.results;

    if (dataStatus === 200 && dataResults.length >= 0) {
        // console.log(data);
        return data;
    } else {
        // console.log(data);
        return 0
    }
}

async function makeMarkup(page) {
    const data = await fetchAxios(page);
    const total = await createMarkupList(data);
    
}

function createMarkupList(data) {
    if (data !== 0) {
        const markup = data.results.map((movie)=>{
            // console.log(movie)
            return `
            <li class="" data-id="">
                <img width="280px" height="402px" src= '${IMG_URL}${movie.poster_path}' />
                <p>'${movie.title}'</p>
                <p>'${decodeGenres(movie.genre_ids)}'</p>|<p>'${movie.release_date}'</p>
            </li> 
              `
        }).join('');
        console.log(markup)
        return markup
    }
    else {
        console.log('bad')
    }
}
