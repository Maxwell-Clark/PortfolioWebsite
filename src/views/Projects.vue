<template>
  <div>
      <!-- <SidePanel /> -->
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
        <div class="content">
          <h1>{{currentCaption.title}}</h1>
          <p>
            {{currentCaption.body}}
          </p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button id="prev" @click="prev"><i class="fas fa-arrow-left"></i></button>
      <button id="next" @click="next"><i class="fas fa-arrow-right"></i></button>
    </div>
  </body>
  </div>
</template>

<script>
// import SidePanel from '@/components/SidePanel.vue'
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
//just need to set up the slide show with an template for links

export default {
  name: 'Projects',
  data() {
    return{
      auto: false,
      intervalTime: 5000,
      slideInterval: null,
      captions: [
        {
          title: 'Project One',
          body: 'this is about the first project. describes the technology and what it does'
        },
        {
          title: 'Project Two',
          body: 'this is about the first project. describes the technology and what it does'
        },
        {
          title: 'Project Three',
          body: 'this is about the first project. describes the technology and what it does'
        },
        {
          title: 'Project Four',
          body: 'this is about the first project. describes the technology and what it does'
        }
      ],
      // slides: this.$el.querySelectorAll('.slide'),
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
  components: {
    // Splide,
    // SplideSlide,
  },
  mounted() {
    this.currentImage = this.images[0],
    this.currentCaption = this.captions[0]

  },
  watch: {
            // Auto slide
        // if (this.auto) {
        //   // Run next slide at interval time
        //   this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
        // }
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
      // var images = require.context('../assets/', false, /\.png$/)
      return require('@/assets/' + this.currentImage )
    },
    prevSlide(){
      // Get current class
      // const current = this.$el.querySelector('.current');
      console.log(this.currentIndex)
      this.currentImage = this.images[this.prevIndex]
      this.currentCaption = this.captions[this.currentIndex]
      // Remove current class
      // current.classList.remove('current');
      // // Check for prev slide
      // if (current.previousElementSibling) {
      //   // Add current to prev sibling
      //   current.previousElementSibling.classList.add('current');
      // } else {
      //   // Add current to last
      //   this.slides[this.slides.length - 1].classList.add('current');
      // }
      // setTimeout(() => current.classList.remove('current'));
    },
    nextSlide() {
      this.currentImage = this.images[this.nextIndex]
      this.currentCaption = this.captions[this.currentIndex]
      

      // Get current class
      // const current = document.querySelector('.current');
      // // Remove current class
      // current.classList.remove('current');
      // // Check for next slide
      // if (current.nextElementSibling) {
      //   // Add current to next sibling
      //   current.nextElementSibling.classList.add('current');
      // } else {
      //   // Add current to start
      //   this.slides[0].classList.add('current');
      // }
      // setTimeout(() => current.classList.remove('current'));
    },
    next(){
      this.nextSlide();
      if (this.auto) {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
      }
    },
    prev(){
      this.prevSlide();
      if (this.auto) {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
      }
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

.current_image {
  justify-self: center;
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
  color: #D9D9D9;
}

.slide.current {
  opacity: 1;
}

.slide .content {
  position: absolute;
  bottom: 70px;
  left: -600px;
  opacity: 0;
  width: 600px;
  background-color: #284B63;
  color: #D9D9D9;
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