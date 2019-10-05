<template>
  <div class="about">
    <h2>About this Website</h2>
    <p>
      This is a Website where users can search for a movie and get all the information, such as name, year, synopsis, actors, etc...
      It is a website developed in Vue.js.
      To learn more about my projects go to
      <a
        :href="myPortfolio"
      >https:joaobairrada.com</a>:
    </p>
  </div>
</template> 
<script>
export default {
  name: "about",
  data() {
    return {
      myPortfolio: this.$store.state.myPortfolio
    };
  }
};
</script>
<style lang="scss">
.about {
  h2 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 700px;

    a {
      color: #e50914;
    }
  }
}
</style>
