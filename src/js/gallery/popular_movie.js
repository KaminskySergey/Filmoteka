import axios from 'axios';
import renderMarkupModal from '../modal-movies/modal-movies';

const gallery = document.querySelector('.gallery__list');
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let genreArray = [];
fetchGenres();

async function getMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const res = await response.json();
  return res;
}

async function getMoviesInfo() {

    const movies = await getMovies();
    // console.log(movies)
    // const markup = "";
    movies.results.forEach((movie) => {
        // console.log(movie);
        const markup = createMoviesList(movie);
        gallery.insertAdjacentHTML('beforeend', markup);
    })

};



getMoviesInfo();

function createMoviesList(movie) {
  return `
 <li class="gallery__item thumb" data-id="${movie.id}">
 <img width="280px" height="402px" src= '${IMG_URL}${movie.poster_path}' />
 <p>'${movie.title}'</p>
 <p>'${decodeGenres(movie.genre_ids)}'</p>|<p>'${movie.release_date}'</p>
  </li> 
   `;
}
async function fetchGenres() {

    const response = await axios.get(GENRES_URL, {
        params: {
            api_key: API_KEY,
        }
    }
    )
    const { genres } = response.data;
    genreArray = genres;
    console.log(genreArray);
    return;
}

function decodeGenres([...args]) {
    const genres = [];
    args.map((id) => genreArray.find((el) => {
        if (el.id === id) {
            genres.push(el.name);
        }
    }))

    console.log(args);
    console.log(genres);
    return genres.join(", ");
}

export { fetchGenres, decodeGenres, IMG_URL, createMoviesList, gallery};
