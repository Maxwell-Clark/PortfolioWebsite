<template>
    <div class="home">
      <h2 id="name">Max Clark</h2>
      <p id="title">Software Engineer</p>

      <div id="attributes">
          <p>
            Driven
          </p>
          <p>
            Motivated
          </p>
          <p>
            Passionate
          </p>
      </div>
      <div class="footer">
        <p>I am really excited about the projects I am working on! Check them out at the projects section of this site or at my github!</p>
      </div>

      <!-- <p></p>
      <p>I am interested in working in the machine learning field</p> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import SidePanel from '@/components/SidePanel.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
#name {
  font-size: 5em;
  color: white;
}
#title {
  font-size: 2.5em;
  color: white;
}
.footer {
    position: absolute;
  width: 100%;
  bottom: 10px;
}

p {
  margin: 5px;
  font-size: 1.5;
}
#attributes {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.home {
align-self: center;
}
</style>