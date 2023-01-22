import axios from 'axios';
import { createMoviesList } from '../gallery/poular_movie';
import { gallery } from '../gallery/poular_movie';
import createPagination from '../pagination/pagination_genres';
// оглошую змінні
let genreId = 18;
// оголошую констани
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const MY_KEY = 'api_key=102d4305e0abdbf0fd48836d5abb1978';
// оголошую об'єкт подій
// const refs = {
//   filterList: document.querySelector('.genre-select'),
// };
// функція для запису масиву в локал строредж
function addGenresToLocal(dataGenres) {
  localStorage.setItem('genres', JSON.stringify(dataGenres));
}
function getGenresToLocal() {
  const getGeners = localStorage.getItem('genres');
  const parsedGeners = JSON.parse(getGeners);
  // console.log(parsedGeners);
  return parsedGeners;
}
// фунція для знаходженню та запису масиву жанрів з айдішками
async function fetchGenresToLocal() {
  let urlObject = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?${MY_KEY}&language=en-US`
  );
  const data = urlObject.data;
  const dataGenres = data.genres;

  addGenresToLocal(dataGenres);
}

fetchGenresToLocal();

// фетч для знаходження фільмів по жанрам
async function selectFilm(genreId) {
  let urlObject = await axios.get(
    `${BASE_URL}?${MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  );
  const data = urlObject.data;
  const dataStatus = urlObject.status;
  const dataResults = data.results;

  if (dataStatus === 200 && dataResults.length > 0) {
    clearOldMarkup();
    // console.log(data);
    createPagination(data.total_results, genreId);
    return data;
  } else {
    return 0;
  }
}
// Функція для знаходження id жанру через перебирання масиву
function findIdGenres(nameGenres) {
  let selectedGenres = getGenresToLocal().find(
    gener => gener.name === nameGenres
  );
  //console.log(selectedGenres);
  return selectedGenres.id;
}
// функція події для рендеру розмітки
async function selectGenerButton(nameGenres) {
  gallery.innerHTML = '';
  genreId = findIdGenres(nameGenres);

  const movies = await selectFilm(genreId);
  // console.log(movies)
  //gallery.innerHTML = '';
  movies.results.forEach(movie => {
    // console.log(movie);
    const markup = createMoviesList(movie);

    gallery.insertAdjacentHTML('beforeend', markup);
  });
}

// refs.filterList.addEventListener("click", selectGenerButton);

const select = document.querySelector('.genre-select');

function createGenersList(genre) {
  return `
  <option class="genre-select__item" value="${genre}">${genre}</option>
   `;
}

function getGenersInfo() {
  const genres = getGenresToLocal();
  // console.log(movies)
  //const markup = '';
  genres.forEach(genre => {
    // console.log(movie);
    const markup = createGenersList(genre.name);
    select.insertAdjacentHTML('beforeend', markup);
  });
}

getGenersInfo();

function clearOldMarkup() {
  gallery.innerHTML = '';
}

$(select).each(function () {
  const _this = $(this),
    selectOption = _this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text(),
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
    class: 'new-select__list',
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');

  for (let i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);

  selectHead.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);

      selectItem.on('click', function () {
        let chooseItem = $(this).data('value');
        selectGenerButton(chooseItem);
        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());

        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });
    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
});
