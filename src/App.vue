<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">my.github.com</div>
      <!-- <img class="top_banner" src="../src/assets/tree.jpeg" alt="background"> -->
      <Burger></Burger>
    </nav>

    <body>
      <!-- <div id="title"> 
        <h2>Max Clark Development</h2>
      </div> -->
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
  },
};
</script>
<style>
@import url(http://fonts.googleapis.com/css?family=Josefin+Slab);

/* body{
    font-family:'Josefin Slab', sans-serif;
} */
html {
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  /* font-family: "Lato"; */
  font-family:Arial, Helvetica, sans-serif;
  background: #284B63;
  color: white;
  /* background: linear-gradient(90deg, rgba(96,108,56,1) 0%, rgba(221,161,94,1) 58%, rgba(254,250,224,1) 100%); */
  text-align: center;
}

body.modal-open {
  overflow: hidden;
  height: 100vh;
}

#title {
  text-align: center;
  /* font-family:'Josefin Slab', sans-serif; */
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
  color: #3C6E71;
  font-weight: bold;
  font-family: "Lato";
}

.main-nav {
  background-color: #D9D9D9;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 0.5rem 0.8rem;
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

