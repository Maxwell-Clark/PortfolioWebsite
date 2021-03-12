<template>
  <div>
      <!-- <SidePanel /> -->
      <h2>This is for my Contact Page</h2>
      <form>
        <h3>Your Email</h3>
        <input type="email" v-model="senderEmail" placeholder="Can't wait to hear from you!">
        <h3>Your Name</h3>
        <input type="text" v-model="senderName">
        <h3>Subject</h3>
        <input type="text" v-model="emailSubject" placeholder="What's Up?">
        <h3>Email Body</h3>
        <input type="email" v-model="senderEmail" placeholder=":)">
        <button>Submit</button>
      </form>
  </div>
</template>

<script>
// import SidePanel from '@/components/SidePanel.vue'
//research how to set up an contact page

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
    // sendEmail() { 
    //   Email.send({ 
    //     Host: "smtp.gmail.com", 
    //     Username: "sender@email_address.com", 
    //     Password: "Enter your password", 
    //     To: 'maxwell6636@email_address.com', 
    //     From: `${this.senderEmail}`, 
    //     Subject: `${this.emailSubject}`, 
    //     Body: `${this.emailBody}`, 
    //   }) 
    //     .then(function (message) { 
    //       alert("mail sent successfully") 
    //     }); 
    // } 
  }
}
</script>

<style>

</style>