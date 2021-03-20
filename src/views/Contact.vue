<template>
  <div>
      <h2>Contact Me</h2>
      <label id="sub_head">Lets talk! (or just say hi)</label>
      <hr>
    <div class="container">
      <form class="contact_form" @submit.prevent="sendEmail">

        <input type="text" name="user_name" v-model="senderName" required placeholder="Your name..">

        <input type="email" name="user_email" v-model="senderEmail" required placeholder="Your email..">

        <textarea id="subject" name="message" required v-model="emailBody" placeholder="Whats Up :)" style="height:200px"></textarea>

        <input type="submit" value="Send">

      </form>

      <div id="metadata">
        <label ><font-awesome-icon icon="map-marker-alt" /> Little Rock, AR</label>
        <label ><font-awesome-icon icon="phone-alt" /> (801) 471-6412</label>
        <label ><font-awesome-icon icon="envelope" /> maxwell6636@gmail.com</label>
      </div>

    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return{
      senderName: null,
      senderEmail: null,
      emailBody: null
    }
  },
  components: {
    
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_nnbnq86', 'template_dnnxxrr', e.target, 'user_mDRW3ioxPxu4Y62CUx5Fz')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },
    console(){
      console.log(this.senderEmail, this.emailBody)
    }
  }

}
</script>

<style scoped>
 #sub_head {
    color: white;
    align-self: center;
    margin: 10px;
    font-size: 1.5em;
  }
  #metadata {
    margin: 10px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    width: 20em;
    flex-direction: column;
  }
  .contact_form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
    height: 50%;
    width: 40em;
    background-color: white;
  }
  h2 {
    font-family: 'Libre Barcode 39 Text', cursive;
    font-size: 5em;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  label {
    color: #284B63;
    margin: 10px;
    font-family: 'Inconsolata', monospace;
  }
  input {
    max-width: 30em;
    margin: 10px;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: #284B63;
    font-family: 'Inconsolata', monospace;
  }
  textarea {
    max-width: 30em;
    margin: 10px;
    color: #fff;
    background-color: #284B63;
    font-family: 'Inconsolata', monospace;
  }
  ::placeholder {
    color: white;
    font-family: 'Inconsolata', monospace;
    opacity: 0.85;
  }

/* w3 css */

input, select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #284B63;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #3C6E71;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}

</style>>