import axios from 'axios';
export const API_KEY = '989c90c59500ad26e3fa4e26d53d2bd3';
export const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

export let GENRES = [];

export default class ApiService {
  constructor() {
    this.totalPages;
    this.totalResults;

    this.url = '';
    this.searchQuery = '';
    this.page = 1;

    this.searchMovies = `${BASE_URL}/search/movie`;
    this.trendMovies = `${BASE_URL}/trending/movie/day`;
    this.genres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    this._lang = '';
  }

  async fetchGenre() {
    this.url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${this._lang}`;
    const response = await fetch(this.url);
    const data = await response.json();

    GENRES = data.genres;
  }

  async fetch(searchQuery) {
    if (searchQuery && searchQuery !== '') {
      this.url = `${this.searchMovies}?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}&language=${this._lang}`;
    } else {
      this.url = `${this.trendMovies}?api_key=${API_KEY}&page=${this.page}&language=${this._lang}`;
    }

    try {
      const response = await fetch(this.url);
      const data = await response.json();

      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;

      this.page = data.page;

      this.url = '';

      const getYear = date => {
        const dateObj = new Date(date);
        return dateObj.getFullYear();
      };

      data.results = data.results.map(movie => {
        return {
          ...movie,
          release_date: getYear(movie.release_date),
          genres: movie.genre_ids
            .slice(0, 2)
            .map(id => {
              const movieGenre = GENRES.find(genre => genre.id === id);
              return movieGenre?.name || '';
            })
            .join(', '),
        };
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieById(movieId) {
    this.url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos&language=${this._lang}`; // Получаем объект movie

    try {
      const response = await fetch(this.url);
      const movie = await response.json();

      this.url = '';
      movie.trailerKey = movie.videos.results[0].key;

      //todo

      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get results() {
    return this.totalResults;
  }

  get pageNum() {
    return this.page;
  }

  set pageNum(newPage) {
    this.page = newPage;
  }

  get pageCount() {
    return this.totalPages;
  }

  get lang() {
    return this._lang;
  }

  set lang(newLang) {
    this._lang = newLang;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }
}

export const apiService = new ApiService();
