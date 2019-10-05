<template>
  <div class="projectGrid">
    <Project v-for="movie in getMovies" :key="movie.imdbID" :movie="movie"></Project>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";

export default {
  name: "ProjectGrid",
  props: ["movie"],
  components: {
    Project
  },
  computed: {
    getMovies() {
      return this.$store.state.movies;
    }
  }
};
</script>
<style lang="scss">
.projectGrid {
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-bottom: 20px;
}
</style>
