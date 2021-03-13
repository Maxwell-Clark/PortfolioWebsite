<template>
  <div>
      <!-- <SidePanel /> -->
      <h2>Contact Me</h2>
      <label id="sub_head">Lets talk! (or just say hi)</label>
      <hr>

    <div class="container">
      <form class="contact_form" action="action_page.php">

        <input type="text" id="fname" name="firstname" required placeholder="Your name..">

        <input type="email" id="lname" name="lastname" required placeholder="Your email..">

        <textarea id="subject" name="subject" required placeholder="Whats Up :)" style="height:200px"></textarea>

        <input type="submit" value="Submit">

      </form>

      <div id="metadata">
        <label >location</label>
        <label >location</label>
        <label >location</label>
        <label >location</label>

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
      senderEmail: null,
      emailSubject: null,
      emailBody: null
    }
  },
  components: {
    
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'USER_ID')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
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