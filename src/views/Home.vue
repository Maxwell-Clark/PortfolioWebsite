<template>
    <div class="home">
      <video src="@/assets/waves.mp4" muted loop autoplay></video>

      <div class="name">
        <h2 id="name">Max Clark</h2>
        <p id="title">Software Engineer</p>
      </div>

      <div class="footer">
        <p>I am really excited about the projects I am working on! Check them out at the projects section of this site or at my github!</p>
      </div>
    
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return{
      attributes: ['Driven', 'Motivated', 'Passionate'],
      attribute: ''
    }
  },
  mounted(){
    this.attribute = this.attributes[this.randomInt]
          console.log('hello', this.randomInt)

  },
  computed: {
    randomInt: function(){
      return Math.floor(Math.random() * Math.floor(this.attributes.length))
    } 
  },
  methods: {
    changeAttribute(){
      const index = this.attributes.indexOf(this.attribute)
                  console.log(this.attributes[this.changeIndex(index)])
      this.attribute = this.attributes[this.changeIndex(index)]
    },
    changeIndex(index){
      if(index == this.attributes.length - 1){
        return 0
      }
      return index + 1
    }
  }
}
</script>
//Video by Tom Fisk from Pexels
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Libre+Barcode+39+Text&family=Source+Code+Pro:wght@200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#name {
  font-size: 4.5em;
  font-family: 'Roboto', sans-serif;
  z-index: 10; 
  max-width: 4em;
  color: white;

}
h2 {
  margin: 0px;
}
#title {
  font-size: 3em;
  font-family: 'Libre Barcode 39 Text', cursive;
  color: white;
  z-index: 10;
  max-width: 5em;
  align-items: center;
  display:flex;
  justify-content: center;
}

.name {
  font-size: 3em;
  font-family: 'Libre Barcode 39 Text', cursive;
  color: white;
  margin: auto;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 25%;
  width: 100%;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 10px;
  font-family: 'Roboto', sans-serif;
}

.home video
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
  opacity: 0.3;
}
.overlay
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #81929E;
  mix-blend-mode: overlay;
}

#intro_paragraph {
  border-width: 2px;
  border-color: white;
  border-style: solid;
  border-radius: 6px;
  background-color: #81929E;
  padding: 2em;

}

.attributes_and_intro {
  display: inline;
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
  border-radius: px;
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
  animation-name: attribute-out;
  animation-duration: 1s;
}

@keyframes attribute-hover {
  from{background-color: #81929E;}
  to{background-color: #D9D9D9;}
}
@keyframes attribute-out {
  to{background-color: #81929E;}
  from{background-color: #D9D9D9;}
}

.attribute:hover {
  animation-name: attribute-hover;
  animation-duration: 1s;
  animation-fill-mode: forwards;
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
z-index: 2;
overflow-x: hidden;
align-self: center;
}
</style>