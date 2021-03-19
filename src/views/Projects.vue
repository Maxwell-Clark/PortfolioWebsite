<template>
  <div>
      <!-- <SidePanel /> -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Full Screen Slider</title>
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
      <div class="slide current"> 
        <!-- need to v-for off the slide current div and use the index of the images -->
        <!-- <div class="content">
          <h1>Slide One</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Two</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Three</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Four</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Five</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Six</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div> -->
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
      // slides: this.$el.querySelectorAll('.slide'),
      images: [
        'logo.png',
        'profile_photo.jpg',
        'tree.jpeg',
        'zion_photo.jpg'
      ],
      currentImage: null
      
    }
  },
  components: {
    // Splide,
    // SplideSlide,
  },
  mounted() {
    this.currentImage = this.images[0]

  },
  watch: {
            // Auto slide
        // if (this.auto) {
        //   // Run next slide at interval time
        //   this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
        // }
  },
  computed: {
    currentImageIndex: function() {
      return this.images.indexOf(this.currentImage)
    },
    prevImageIndex: function() {      
      if((this.currentImageIndex - 1) < 0) {
        return this.images.length - 1
      }
      return this.currentImageIndex - 1
    },
    nextImageIndex: function() {
      if((this.currentImageIndex + 1) >= this.images.length) {
        return 0
      } 
      return this.currentImageIndex + 1
    }
  },
  methods: {
    getImg() {
      // var images = require.context('../assets/', false, /\.png$/)
      // return images('./' + pet + ".png")
    },
    prevSlide(){
      // Get current class
      const current = this.$el.querySelector('.current');
      this.currentImage = this.images[this.prevImageIndex]
      // Remove current class
      current.classList.remove('current');
      // Check for prev slide
      if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
      } else {
        // Add current to last
        this.slides[this.slides.length - 1].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    },
    nextSlide() {
      this.currentImage = this.images[this.nextImageIndex]
      

      console.log(this.currentImageIndex)
      // Get current class
      const current = document.querySelector('.current');
      // Remove current class
      current.classList.remove('current');
      // Check for next slide
      if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
      } else {
        // Add current to start
        this.slides[0].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    },
    next(){
      console.log(this.currentImageIndex)

      this.nextSlide();
      if (this.auto) {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
      }
    },
    prev(){
      console.log(this.currentImageIndex)

      this.prevSlide();
      if (this.auto) {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
      }
    }
  }

}
 
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background: #333;
  color: #fff;
  line-height: 1.6;
}

.slider {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
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

.slide.current {
  opacity: 1;
}

.slide .content {
  position: absolute;
  bottom: 70px;
  left: -600px;
  opacity: 0;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
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
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  padding: 13px 15px;
  border-radius: 50%;
  outline: none;
}

.buttons button:hover {
  background-color: #fff;
  color: #333;
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
  background: url('https://source.unsplash.com/RyRpq9SUwAU/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(2) {
  background: url('https://source.unsplash.com/BeOW_PJjA0w/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(3) {
  background: url('https://source.unsplash.com/TMOeGZw9NY4/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(4) {
  background: url('https://source.unsplash.com/yXpA_eCbtzI/1600x900') no-repeat
    center top/cover;
}
.slide:nth-child(5) {
  background: url('https://source.unsplash.com/ULmaQh9Gvbg/1600x900') no-repeat
    center top/cover;
} 
.slide:nth-child(6)  {
  background: url('https://source.unsplash.com/ggZuL3BTSJU/1600x900') no-repeat
    center center/cover;
}


</style>