<template>
  <div id="app">
    <div class="wrapper">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <Search></Search>
      </nav>
      <router-view />
    </div>
  </div>
</template> 



<script>
import Search from "@/components/Search.vue";

export default {
  name: "app",
  components: {
    Search
  }
};
</script>

<style lang="scss">
body {
  background: #141414;
  color: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.nav {
  display: flex;
  align-items: center;

  padding: 5% 0;

  * {
    margin-right: 18px;
  }
}

.wrapper {
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;
  padding: 0 5%;
  position: relative;
  display: block;
}
img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
}
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

html {
  touch-action: manipulation;
}

body {
  line-height: 1;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  text-rendering: geometricPrecision;
  font-smooth: always;
  font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
</style>
