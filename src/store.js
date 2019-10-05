import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    singleMovie: {},
    myPortfolio: "https:joaobairrada.com",
    hasMovie: null,
    currentPage: 1,
    currentMovie: ""
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    },
    setSingleMovie(state, payload) {
      state.singleMovie = payload;
    },
    hasMovie(state, payload) {
      state.hasMovie = payload;
    },
    increasePage(state, payload) {
      state.currentPage = payload;
    },
    sendCurrentMovie(state, payload) {
      state.currentMovie = payload;
    }
  },
  getters: {
    productDetail: state => id =>
      state.movies.find(movie => movie.imdbID === id)
  },
  actions: {
    getMovies(state, { movieName, currentPage }) {
      fetch(
        `http://www.omdbapi.com/?s=${movieName}&page=${currentPage}&apikey=440f5ed0`
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (response.Search) {
            state.commit("setMovies", response.Search);
            state.commit("hasMovie", true);
          } else {
            state.commit("hasMovie", false);
          }
        });
    },
    getSingleMovie(state, movieId) {
      fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=440f5ed0`)
        .then(response => {
          return response.json();
        })
        .then(response => {
          state.commit("setSingleMovie", response);
        });
    }
  }
});
