import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import MoviesApi from '../api';
import getMoviesInfo from '../gallery/poular_movie';
// import getMoviesInfo from '../fiter-button-header/filter-button-header';

const movies = new MoviesApi();
const gallery = document.querySelector('.gallery__list');

export default function createPagination(total_results, genreId) {
  const container = document.getElementById('tui-pagination-container');
  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.off('afterMove', function (eventData) {
    gallery.innerHTML = '';
    movies.page = eventData.page;
    movies.getPopularMovies().then(response => {
      getMoviesInfo(response.data.results);
    });
  });

  pagination.on('afterMove', function (eventData) {
    //  console.log(genreId);
    gallery.innerHTML = '';
    movies.page = eventData.page;
    movies.with_genres = genreId;
    movies.getGenersMovies().then(response => {
      // console.log(response.data);
      getMoviesInfo(response.data.results);
    });
  });
}
