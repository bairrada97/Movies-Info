<template>
  <div class="search">
    <input type="text" v-model="movieName" @keyup.enter="sendMovies" placeholder="search movie" />
    <button class="search__btn" @click="sendMovies">Search Movie</button>
  </div>
</template> 

<script>
export default {
  name: "search",
  data() {
    return {
      movieName: "",
      movies: {}
    };
  },
  methods: {
    sendMovies() {
      const currentPage = this.$store.state.currentPage;
      this.$store.dispatch("getMovies", {
        movieName: this.movieName,
        currentPage: currentPage
      });
      this.$store.commit("sendCurrentMovie", this.movieName);
    }
  }
};
</script>

<style lang="scss">
.search {
  display: flex;
  align-items: center;
  width: 100%;

  input {
    background: none;
    border: none;
    outline: none;
    width: 160px;
    min-width: 0;
    padding: 0;
    z-index: 1;
    position: relative;
    line-height: 18px;
    margin: 5px 0;
    font-size: 14px;
    color: white;
    transition: all 0.6s ease;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    margin-right: 10px;
  }

  &__btn {
    outline: none;
    text-decoration: none;
    padding: 10px;
    margin: 0;
    width: 100%;
    max-width: 150px;
    border-radius: 5px;
    border: none;
    background-color: #e50914;
    color: #fff;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
}
</style>
