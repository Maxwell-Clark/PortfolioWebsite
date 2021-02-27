<template>
  <div>
    <div @click="showSideBar" class="side_panel" v-show="shown == true">
    <img src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"/>
    <h2 @click="routeHome"> Home </h2>
    <h2 @click="routeGallery">Gallery</h2>
    <h2 @click="routeProjects">Projects</h2>
    <h2 @click="routeSkills">Skills</h2>
    <h2 @click="routeContact">Contact</h2>
    </div>

    <div @click="showSideBar" class="side_panel_hidden" v-show="shown == false" >
      <img src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data(){
    return{
      shown: true
    }
  },
  methods: {
    showSideBar() {
      this.shown = !this.shown
    },
    routeHome() {
      this.$router.push('/')
    },
    routeAbout() {
      this.$router.push('/about')
    },
    routeSkills() {
      this.$router.push('/skills')
    },    
    routeProjects() {
      this.$router.push('/projects')
    },
    routeGallery() {
      this.$router.push('/gallery')
    },
    routeContact() {
      this.$router.push('/contact')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 20px;
  padding: 20px 0px 20px 0px;
}
h2:hover {
  color: white;
}
.side_panel{
  position: fixed;
  color: #E8BF91;
  background-color: #606C38;
  float: left;
  min-height: 100%;
  z-index: 1;
  padding-top: 2em;
  min-width: fit-content;
  /* border-radius: 6px; */
}
.side_panel_hidden {
  background-color: #606C38;
  float: left;
  position: fixed;
  min-height: 100%;
  z-index: 1;
  min-width: 4em;
  padding-top: 2em;
}
</style>
