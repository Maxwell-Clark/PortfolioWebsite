<template>
    <div class="home">
      <h2 id="name">Max Clark</h2>
      <p id="title">Software Engineer</p>

      <div class="image_and_attributes">
        <div id="attributes">
            <div class="attribute">
              <h5>Driven</h5>
            </div>
            <div class="attribute">
              <h5>Motivated</h5>
            </div>
            <div class="attribute">
              <h5> Passionate</h5>
            </div>
            <div id="intro_paragraph">I am an Software Engineer!</div>
        </div>

            <img class="image" src="../assets/zion_photo.jpg" alt="">
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

#intro_paragraph {
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  border-radius: 6px;
  background-color: #81929E;
  padding: 2em;

}

.image_and_attributes {
  display: flex;
  flex-direction: row;
  margin-top: 10em;
  justify-content: center;
}

.image {
  margin: 10px;
  margin-left: 5em;
  max-height: 500px;
  border-width: 0px;
  border-color: transparent;
  border-style: solid;
  border-radius: 6px;
}

.attribute {
  margin: 10px;
  margin-top: 30px;
  padding: 10px;
  height: 10em;
  width: 10em;
  border-width: 2px;
  border-style: solid;
  border-color: #D9D9D9;
  border-radius: 5px;
  background-color: #81929E;
}

p {
  margin: 5px;
  font-size: 1.5;
}
#attributes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
}
.home {
align-self: center;
}
</style>