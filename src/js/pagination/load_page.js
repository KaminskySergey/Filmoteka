import getMoviesInfo from '../gallery/poular_movie';
import MoviesApi from '../api';
import createPagination from '../pagination/pagination';

const movies = new MoviesApi();
const gallery = document.querySelector('.gallery__list');

export default function loadPage() {
  gallery.innerHTML = '';

  movies.resetPage();
  movies.getPopularMovies().then(response => {
    createPagination(response.data.total_results);
    getMoviesInfo(response.data.results);
  });
}

loadPage();
