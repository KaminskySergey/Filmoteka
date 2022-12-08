const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';
const BASE_URL = 'https://api.themoviedb.org/3';
import axios from 'axios';

export default class MoviesApi {
  constructor() {
    this.searchQuery = '';
    this.movieId = '';
    this._page = 1;
  }

  async getPopularMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this._page}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this._page += 1;
  }

  resetPage() {
    this._page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  set page(newPage) {
    this._page = newPage;
  }
  get page() {
    return this._page;
  }
}