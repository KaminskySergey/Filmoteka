const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';
const BASE_URL = 'https://api.themoviedb.org/3';
import axios from 'axios';

export default class MoviesApi {
  constructor() {
    this.inputValue = '';
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

  async getSearchMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${this._page}&query=${this.inputValue}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  // ============================api genres============================
  async getGenersMovies() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}&language=en-US`
      );
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
    return this.inputValue;
  }

  set query(newQuery) {
    this.inputValue = newQuery;
  }

  set page(newPage) {
    this._page = newPage;
  }
  get page() {
    return this._page;
  }
}
