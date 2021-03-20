<template>
  <div>
    <h2 class="title">Projects</h2>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="slider">
      <div v-for="image in images" class="slide current" :key="image"> 
        <img class="current_image" :src="getImg()" /> 
        <div v-if="currentCaption" class="content">
          <h1>{{currentCaption.title}}</h1>
          <p>
            {{currentCaption.body}}
          </p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button id="prev" @click="prevSlide"><i class="fas fa-arrow-left"></i></button>
      <button id="next" @click="nextSlide"><i class="fas fa-arrow-right"></i></button>
    </div>
  </body>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  data() {
    return{
      captions: [
        {
          title: 'Project One',
          body: 'this is about the first project. describes the technology and what it does'
        },
        {
          title: 'Project Two',
          body: 'this is about the second project. describes the technology and what it does'
        },
        {
          title: 'Project Three',
          body: 'this is about the third project. describes the technology and what it does'
        },
        {
          title: 'Project Four',
          body: 'this is about the fourth project. describes the technology and what it does'
        }
      ],
      images: [
        'logo.png',
        'profile_photo.jpg',
        'tree.jpeg',
        'zion_photo.jpg'
      ],
      currentImage: null,
      currentCaption: null
    }
  },
  mounted() {
    this.currentImage = this.images[0],
    this.currentCaption = this.captions[0]

  },
  computed: {
    currentIndex: function() {
      return this.images.indexOf(this.currentImage)
    },
    prevIndex: function() {      
      if((this.currentIndex - 1) < 0) {
        return this.images.length - 1
      }
      return this.currentIndex - 1
    },
    nextIndex: function() {
      if((this.currentIndex + 1) >= this.images.length) {
        return 0
      } 
      return this.currentIndex + 1
    }
  },
  methods: {
    getImg() {
      if(this.currentImage == null) {
        return
      }
      return require('@/assets/' + this.currentImage )
    },
    prevSlide(){
      this.currentImage = this.images[this.prevIndex]
      this.currentCaption = this.captions[this.currentIndex]

    },
    nextSlide() {
      this.currentImage = this.images[this.nextIndex]
      this.currentCaption = this.captions[this.currentIndex]
    }
  }

}
 
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inconsolata', monospace;
  background: #284B63;
  color: #D9D9D9;
  line-height: 1.6;
}

.slider {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.title {
  font-family: 'Libre Barcode 39 Text', cursive;
  color: #fff;
  font-size: 5em;
  margin: 15px;
}

.current_image {
  position: relative;
  top: 10%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

p {
  color: #284B63 !important;
}

.slide.current {
  opacity: 1;
}

.slide .content {
  position: absolute;
  bottom: 200px;
  left: -600px;
  opacity: 0;
  width: 600px;
  background-color: #D9D9D9;
  color: #284B63;
  padding: 35px;
}

.slide .content h1 {
  margin-bottom: 10px;
}

.slide.current .content {
  opacity: 1;
  transform: translateX(600px);
  transition: all 0.7s ease-in-out 0.3s;
}

.buttons button#next {
  position: absolute;
  top: 40%;
  right: 15px;
}

.buttons button#prev {
  position: absolute;
  top: 40%;
  left: 15px;
}

.buttons button {
  border: 2px solid #D9D9D9;
  background-color: transparent;
  color: #D9D9D9;
  cursor: pointer;
  padding: 13px 15px;
  border-radius: 50%;
  outline: none;
}

.buttons button:hover {
  background-color: #3C6E71;
  color: #D9D9D9;
}

@media (max-width: 500px) {
  .slide .content {
    bottom: -300px;
    left: 0;
    width: 100%;
  }

  .slide.current .content {
    transform: translateY(-300px);
  }
}



/* Backgorund Images */
 
.slide:first-child {
  background: '@/assets/logo.png' no-repeat
    center top/cover;
}
.slide:nth-child(2) {
  background: '@/assets/logo.png' no-repeat
    center top/cover;
}
.slide:nth-child(3) {
  background: '@/assets/logo.png' no-repeat
    center top/cover;
}
.slide:nth-child(4) {
  background: '@/assets/logo.png' no-repeat
    center top/cover;
}
.slide:nth-child(5) {
  background: '@/assets/logo.png' no-repeat
    center top/cover;
} 
.slide:nth-child(6)  {
  background: '@/assets/logo.png' no-repeat
    center center/cover;
}


</style>