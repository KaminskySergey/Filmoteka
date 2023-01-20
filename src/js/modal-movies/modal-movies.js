import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

import { updateDocW, updateDocQ } from '../../js/firebase';
// import errorImg from '../images/modal-plug';
// // import  updateDocInQueue  from '../firebase';

const getRef = selector => document.querySelector(selector);
const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';

export let movieID = '';
let movieInfo = '';
let instance;

export let moviePoster;
export let movieTitle;
export let movieGenres;
export let movieReleaseDate;

getRef('.gallery__list').addEventListener('click', renderMarkupModal);

function toggleModal() {
  getRef('.backdrop').classList.toggle('is-hidden');
}
//===============створення та рендер модалки==================
function createMurkupModal({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  release_date,
  id,
}) {
  moviePoster = poster_path;
  movieTitle = original_title;
  movieGenres = genres;
  movieReleaseDate = release_date;
  movieID = id;
  const genresEl = genres.map(el => {
    return el.name;
  });
  return ` 
<div class="modal-container">
    <img
      class="modal__img"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="Cover of the film ${original_title}"
      onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
    />
    <div class="modal-container-columns">
      <p class="modal__name">${original_title}</p>
      <div class="modal-conteiner-ul">
        <ul class="modal__list-theme">
          <li class="modal__item">
            <p class="modal__item-text">Vote / Votes</p>
          </li>
          <li class="modal__item">
            <p class="modal__item-text">Popularity</p>
          </li>
          <li class="modal__item">
            <p class="modal__item-text">Original Title</p>
          </li>
          <li class="modal__item">
            <p class="modal__item-text">Genre</p>
          </li>
        </ul>
        <ul class="modal__list-value">
          <li class="modal__item">
            <p class="modal__item-value slash">
              <span class="modal__hightlight selected">${vote_average}</span
              >/<span class="modal__hightlight not-selected"
                >${vote_count}</span
              >
            </p>
          </li>
          <li class="modal__item">
            <p class="modal__item-value">${popularity}</p>
          </li>
          <li class="modal__item">
            <p class="modal__item-value">${original_title}</p>
          </li>
          <li class="modal__item">
            <p class="modal__item-value">${genresEl}</p>
          </li>
        </ul>
      </div>
      <p class="modal__about">About</p>
      <p class="modal__description">${overview}</p>
      <ul class="modal__btn-list">
        <li class="modal__btn-item">


          <button type="button" class="modal__btn watched" data-action="watched" id="add-to-watched">

            add to Watched
          </button>

        </li>
        <li class="modal__btn-item">
          <button type="button" class="modal__btn queue" data-action="queue" id="add-to-queue">add to queue</button>
        </li>
      </ul>
          <button class="btn-play">Play</button>
    </div>
  </div>

  `;
}

async function renderMarkupModal(e) {
  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'P') return;
  toggleModal();

  getRef('.backdrop').addEventListener('click', onClickClose);
  window.addEventListener('keydown', onEscClose);
  getRef('.modal__btn-close').addEventListener('click', closeModal);

  movieID = await e.target.parentElement.dataset.id;

  const getAxios = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
  );
  // .catch(error => `<img class="modal__img" src="../images/modal-plug" />`);

  movieInfo = getAxios.data;

  const markup = createMurkupModal(getAxios.data);
  getRef('.modal').insertAdjacentHTML('beforeend', markup);

  const addToWatchedBtn = document.querySelector('#add-to-watched');
  const addToQueueBtn = document.querySelector('#add-to-queue');

  // console.log(addToWatchedBtn);
  // console.log(addToQueueBtn);
  addToWatchedBtn.addEventListener('click', updateDocW);
  addToQueueBtn.addEventListener('click', updateDocQ);

  // const handleToggleToWatchedBtn = (e) => {
  //   return updateDocW(e)
  // }

  // const handleToggleToQueueBtn = (e) => {
  //   return updateDocQ(e)
  // }

  await getRef('.btn-play').addEventListener('click', getTrailer);
}
//===============трейлер============================
async function getTrailer() {
  let idYoutub = '';
  const getAxios = axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`
  );
  await getAxios
    .then(resp => {
      idYoutub = resp.data.results[0].key;
      instance = basicLightbox.create(
        `
    <iframe class="trailerPlayer" src="https://www.youtube.com/embed/${idYoutub}" width="1200" height="700" frameborder="0"></iframe>
   `
      );

      instance.show();
    })
    .catch(error => {
      getRef('.btn-play').setAttribute('disabled', 'disabled');
      getRef('.btn-play').textContent = 'trailer is missing';
    });
}
//==============очищення та закриття модалки================
function clearMarcupModal() {
  getRef('.modal-container').remove();
}

function closeModal() {
  clearMarcupModal();
  toggleModal();
  window.removeEventListener('keydown', onEscClose);
  getRef('.backdrop').removeEventListener('click', onClickClose);
}

function onEscClose(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function onClickClose(e) {
  const targetValue = e.target.classList.value;
  const classBackdrop = 'backdrop';
  if (targetValue === classBackdrop) {
    closeModal();
  }
}

export { movieInfo };
