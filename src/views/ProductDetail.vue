<template>
  <div class="productDetail">
    <h2 class="productDetail__title">{{singleMovie.Title}}</h2>
    <img class="productDetail__poster" :src="singleMovie.Poster" />
    <p class="productDetail__production">production: {{singleMovie.Production}}</p>
    <span class="productDetail__release">{{singleMovie.Released}}</span>
    <span class="productDetail__genre">{{singleMovie.Genre}}</span>
    <p class="productDetail__plot">{{singleMovie.Plot}}</p>
    <p class="productDetail__actors">{{singleMovie.Actors}}</p>
    <a class="productDetail__website" :href="singleMovie.Website">Go to website</a>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from "@/components/ProjectGrid.vue";

export default {
  name: "productDetail",
  components: {
    ProjectGrid
  },
  data() {
    return {
      movie: ""
    };
  },
  mounted() {
    const movieId = this.$route.params.id;
    this.$store.dispatch("getSingleMovie", movieId);
  },
  computed: {
    singleMovie() {
      return this.$store.state.singleMovie;
    }
  }
};
</script>
  <style lang="scss">
$min-mobile-width: 0px;
$max-tablet-width: 768px;
@mixin tablet {
  @media (min-width: #{$min-mobile-width}) and (max-width: #{$max-tablet-width}) {
    @content;
  }
}
.productDetail {
  display: grid;
  max-width: 1100px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-template-areas:
    "title title title title"
    "release genre . poster"
    "plot plot . poster"
    "actors actors .  poster"
    "production production .  poster"
    ". . . poster"
    "website . . .";
  margin-top: 48px;
  text-align: left;
  font-weight: bold;
  font-size: 14px;

  @include tablet {
    grid-row-gap: 30px;
    grid-template-areas:
      "title title title title"
      " release genre . ."
      "poster poster poster poster"
      " plot plot plot plot"
      "actors actors actors actors"
      "production production production production"
      "website . . .";
  }

  &__title {
    grid-area: title;
    font-size: 48px;
    color: #e50914;
  }

  &__poster {
    grid-area: poster;
  }

  &__production {
    grid-area: production;
    color: #999;
    font-weight: normal;
  }
  &__release {
    grid-area: release;
  }
  &__plot {
    grid-area: plot;
    font-size: 14px;
  }
  &__actors {
    grid-area: actors;
    color: #999;
    font-weight: normal;
  }

  &__genre {
    grid-area: genre;
  }

  &__website {
    outline: none;
    text-decoration: none;
    padding: 5%;
    margin: 0;
    display: inline-block;
    border-radius: 5px;
    border: none;
    background-color: #e50914;
    color: #fff;
    font-weight: bold;
    text-align: center;
    grid-area: website;
  }
}
</style>