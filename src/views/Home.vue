<template>
  <div class="home">
    <div v-if="!hasMovie && hasMovie != null">
      <h2>Nao foi Encontrado nenhum filme</h2>
    </div>
    <ProjectGrid v-else></ProjectGrid>
    <button v-if="hasMovie" class="seeMore" @click="seeMore">Proxima página</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from "@/components/ProjectGrid.vue";

export default {
  name: "home",
  components: {
    ProjectGrid
  },
  methods: {
    seeMore() {
      let currentPage = this.$store.state.currentPage + 1,
        currentMovie = this.$store.state.currentMovie;
      this.$store.commit("increasePage", currentPage);
      this.$store.dispatch("getMovies", {
        movieName: currentMovie,
        currentPage: currentPage
      });
    }
  },
  computed: {
    hasMovie() {
      return this.$store.state.hasMovie;
    }
  }
};
</script>
<style lang="scss">
.seeMore {
  outline: none;
  display: block;
  text-decoration: none;
  margin-top: 20px;
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
  margin: 0 auto;
}
</style>
  