<template>
  <article class="project">
    <router-link :to="{ name: 'productDetail', params: {id: movie.imdbID},  }">
      <img :src="movie.Poster" alt />
      <h2>{{movie.Title}}</h2>
    </router-link>
  </article>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Project",
  props: ["movie"]
};
</script>
<style lang="scss">
.project {
  text-align: center;
  transition: all 0.4s ease;
  border-radius: 5px;

  &:hover {
    border: 1px solid #fff;
    transform: scale(1.1);
  }

  h2 {
    font-size: 20px;
    margin: 5% 0;
  }
}
</style>
