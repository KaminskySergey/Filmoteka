import axios from 'axios';
import { fetchGenres } from '../gallery/poular_movie';
import { decodeGenres } from '../gallery/poular_movie';
import { IMG_URL } from '../gallery/poular_movie';
import { gallery } from '../gallery/poular_movie';
import createPagination from '../pagination/paginatin_search';
// import { Notify } from 'notiflix';

const ref = {
  searchForm: document.querySelector('.form-search'),
  searchInput: document.querySelector('.form-search__input'),
  searchButton: document.querySelector('.form-search__submit'),
  searchWarning: document.querySelector('.form-search__warning'),
};

let page = 1;
let inputValue = '';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const MY_KEY = 'api_key=102d4305e0abdbf0fd48836d5abb1978';

fetchGenres();

if (!!ref.searchForm) {
  ref.searchForm.addEventListener('submit', makeSubmit);
}

function makeSubmit(e) {
  e.preventDefault();

  inputValue = e.target[0].value.trim();

  if (inputValue === '') {
    ref.searchWarning.textContent = 'Please input text ;)';

    e.target[0].value = '';
    // Notify.failure("Please input text ;)")
    return;
  }

  makeMarkup(page);

  e.target[0].value = '';
}

async function fetchAxios(page) {
  let urlObject = await axios.get(
    `${BASE_URL}?${MY_KEY}&query=${inputValue}&page=${page}`
  );
  const data = urlObject.data;
  const dataStatus = urlObject.status;
  const dataResults = data.total_results;

  if (dataStatus === 200 && dataResults > 0) {
    clearOldMarkup();
    createPagination(dataResults, inputValue);
    return data;
  }

  return 0;
}

async function makeMarkup(page) {
  const data = await fetchAxios(page);
  const total = await createMarkupList(data);
  const render = await renderMarkup(total);
}

export default function createMarkupList(data) {
  console.log(data);
  if (data !== 0) {
    ref.searchWarning.textContent = '';
    const markup = data.results
      .map(movie => {
        // console.log(movie);
        return `
        <li class="gallery__item thumb" data-id="${movie.id}">
                <img onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';" class="gallery__img" loading="lazy" alt='${
                  movie.title

                }' src= '${IMG_URL}${movie.poster_path}'/>
                <div class="gallery__info">
                  <p class="gallery__title">${movie.title}</p>
                  <p class="gallery__genre">${decodeGenres(movie.genre_ids)} | ${movie.release_date}</p>
                </div>
                </li>`;
      })
      .join('');
    // console.log(markup);
    renderMarkup(markup);
    return markup;
  } else {
    ref.searchWarning.textContent = 'Ooops, film not found';
    // Notify.failure('Oops, film not found')
  }
}

function clearOldMarkup() {
  gallery.innerHTML = '';
}

function renderMarkup(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}
