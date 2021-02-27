<template>
  <div>
    <!-- <SidePanel msg="Welcome to Your Vue.js App"/> -->
    <div class="home">
      <h2>Welcome!</h2>
      <p>This is my website!</p>
      <p>My name is Max Clark,</p>
      <p>I have been working as a software engineering intern for 7 months!</p>
      <p>I am interested in working in the machine learning field</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import SidePanel from '@/components/SidePanel.vue'

export default {
  name: 'Home',
  components: {
    // SidePanel
  }
}
</script>

<style scoped>
.home {
align-self: center;
}
</style>