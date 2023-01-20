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
        <li class="gallery__item thumb" data-id="${movie.id}">
                <img onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';" class="gallery__img" loading="lazy" alt='${
                  movie.title

                }' src= '${IMG_URL}${movie.poster_path}'/>
                <div class="gallery__info">
                  <p class="gallery__title">${movie.title}</p>
                  <p class="gallery__genre">${decodeGenres(movie.genre_ids)} | ${movie.release_date.substr(0, 4)}</p>
                </div>
                </li>`;

}
async function fetchGenres() {
  const response = await axios.get(GENRES_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  const { genres } = response.data;
  genreArray = genres;
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

export { fetchGenres, decodeGenres, IMG_URL, gallery, createMoviesList };
