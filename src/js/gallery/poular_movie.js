import axios from 'axios';
const gallery = document.querySelector('.gallery__list');
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

let genreArray = [];
fetchGenres();

export default function getMoviesInfo(data) {
  const movies = data;

  movies.forEach(movie => {
    const markup = createMoviesList(movie);
    gallery.insertAdjacentHTML('beforeend', markup);
  });
}

function createMoviesList(movie) {
  return `
 <li class="gallery__item thumb" data-id="">
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
    },
  });
  const { genres } = response.data;
  genreArray = genres;
  console.log(genreArray);
  return;
}
function decodeGenres([...args]) {
  const genres = [];
  args.map(id =>
    genreArray.find(el => {
      if (el.id === id) {
        genres.push(el.name);
      }
    })
  );

  return genres.join(', ');
}

export { fetchGenres, decodeGenres, IMG_URL };
