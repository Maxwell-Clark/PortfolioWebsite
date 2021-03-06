<template>
  <div id="app">
    <nav class="nav">
      <div class="main-nav">
      <a href="https://github.com/Maxwell-Clark" target="blank" class="logo">github.com/Maxwell-Clark</a>
      <Burger></Burger>
      </div>
    </nav>

    <body>
      <router-view/>        
    </body>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link class="link" to="/">Home</router-link> 
        </li>
        <li>
          <router-link class="link" to="/skills">Skills</router-link> 
        </li>
        <li>
          <router-link class="link" to="/gallery">Gallery</router-link> 
        </li>
        <li>
          <router-link class="link" to="/projects">Projects</router-link> 
        </li>
        <li>
          <router-link class="link" to="/contact">Contact</router-link> 
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Libre+Barcode+39+Text&family=Source+Code+Pro:wght@200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html {
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family:Arial, Helvetica, sans-serif;
  background: #284B63;
  color: white;
  text-align: center;
}

body.modal-open {
  overflow: hidden;
  height: 100vh;
}

#title {
  text-align: center;
}

.top_banner {
  max-width: 12em;
  max-height: 10em;
}

.link:hover {
  color: #3C6E71;
}

.logo {
  align-self: center;
  text-decoration: none;
  color: #3C6E71;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 0.5rem 0.8rem;
  width: 100%;
}
.nav {
  display: flex;
}


ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #284B63;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>

