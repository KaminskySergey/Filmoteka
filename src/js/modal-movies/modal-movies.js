import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

const getRef = selector => document.querySelector(selector);
const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';

let movieID = '';
let movieInfo = '';

getRef('.gallery__list').addEventListener('click', renderMarkupModal);

function toggleModal() {
  getRef('.backdrop').classList.toggle('is-hidden');
}

function createMurkupModal({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  const genresEl = genres.map(el => {
    return el.name;
  });
  return ` 
<div class="modal-container">
    <img
      class="modal__img"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="Cover of the film ${original_title}"
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
          <button type="button" class="modal__btn watched">
            add to Watched
          </button>
        </li>
        <li class="modal__btn-item">
          <button type="button" class="modal__btn queue">add to queue</button>
        </li>
      </ul>
          <button class="btn-play">Play</button>
    </div>
  </div>

  `;
}

async function renderMarkupModal(e) {
  toggleModal();

  movieID = await e.target.parentElement.dataset.id;

  const getAxios = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
  );
  movieInfo = getAxios.data;
  const markup = createMurkupModal(getAxios.data);
  getRef('.modal').insertAdjacentHTML('beforeend', markup);

  await getRef('.btn-play').addEventListener('click', getTrailer);
}

async function getTrailer() {
  let idYoutub = '';
  const getAxios = axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`
  );
  await getAxios.then(resp => {
    idYoutub = resp.data.results[0].key;
    console.log(idYoutub);
  });

  const instance = basicLightbox.create(`
    <iframe class="trailerPlayer" src="https://www.youtube.com/embed/${idYoutub}" width="500" height="300" frameborder="0"></iframe>
`);

  instance.show();
}
