<template>
    <div class="home">
      <h2 id="name">Max Clark</h2>
      <p id="title">Software Engineer</p>



      <div class="image_and_attributes">
        <div class="attributes_and_intro">
          <div id="attributes">
            <div v-on:mouseover.self="changeAttribute" class="attribute">
              <h5>{{attribute}}</h5>
            </div>
          </div>
          <div id="intro_paragraph">I am an Software Engineer currently pursuing bachelors degrees
            in Computer Science and Software Development
          </div>
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
align-self: center;
}
</style>