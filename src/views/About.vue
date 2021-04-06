<template>
  <div>
      <!-- <SidePanel /> -->
      <h2 class="title">About Me</h2>
      <div class="image">
        <p>Hello! <br> My name is Max Clark. I solve problems in interesting and creative ways. I have been in the software engineering industry for close to one year now, working as a Software Engineer at Revolution. 
        Software has always excited me, I have marveled at the opportunities I have had to help other people through the medium of silicon. I am currently studying software development and computer science at western governers university. 
          I love to be outdoors! Hiking, Biking, and Camping is where you will find me when I am not working on my next latest and greatest project. I was born in Utah but I have lived all over the country. 
          I currently live in Little Rock Arkansas with my wife Kira and my cat MoMo.
        </p>
        <img src="@/assets/profile_photo.jpg" alt="">
        <!-- <div id="square"></div> -->
      </div>
  </div>
</template>

<script>

export default {
  name: 'Gallery',
  components: {
    // SidePanel
  }
}
</script>

<style>
.title {
  font-family: 'Libre Barcode 39 Text', cursive;
  color: #fff;
  font-size: 5em;
}

.image {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
}

#square {
  width: 350px;
  height: 350px;
  color: #284B63;
  border-color: #fff;
  border-width: 3px;
  border-style: solid;
}


p {
  max-width: 30em;
  max-height: 30em;
  font-family: 'Inconsolata', monospace;
  font-size: 2em;
  color: #284B63;
}
img {
  max-height: 40em;
  max-width: 40em;
  border-color: #fff;
  border-width: 3px;
  border-style: solid;
  border-radius: 4px;
}

</style>