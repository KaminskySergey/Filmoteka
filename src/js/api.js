const API_KEY = '102d4305e0abdbf0fd48836d5abb1978';
const BASE_URL = 'https://api.themoviedb.org/3';
import axios from 'axios';

export default class MoviesApi {
  constructor() {
    this.inputValue = '';
    this.movieId = '';
    this._page = 1;
    this.genreId = '';
  }

  async getPopularMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this._page}`
      );
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getSearchMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}?${API_KEY}&query=${this.inputValue}&page=${this.page}`
      );
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
      //console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  // ============================api genres============================
  async getGenersMovies() {
    try {
      // console.log('das');
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this._page}&with_genres=${this.genreId}`
      );
      //console.log(response);
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

  set with_genres(newGenreId) {
    this.genreId = newGenreId;
  }
  get with_genres() {
    return this.genreId;
  }
}
