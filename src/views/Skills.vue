<template>
    <div>
        <!-- <SidePanel /> -->
        <h2>Skills</h2>
        <!-- <p>I am fluent in html, javascript, and css</p>
        <p>I have used Mongodb and Sql Data bases</p>
        <p>I have used Expressjs</p>
        <p>vuejs, google maps api, turfjs, rest apis, azure services, azure devops</p>
        <p>git, typescript</p> -->

        <div class="scroll_menu">
            <div class="menu">
                <div class="skills">
                    <label class="skill" v-for="skill in skills" :key="skill" for="">{{skill}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

// <script>
// import SidePanel from '@/components/SidePanel.vue'

export default {
data() {
    return {
        skills: ['JavaScript ', 
            'HTML5', 'CSS', 'Vue', 'Unit Testing', 
            'Git', 'Python', 'Java', 'Golang', 'TensorFlow',
            'Http', 'Turf.js', 'Azure Services', 'Azure Devops',
            'Express.js', 'Mongodb', 'SQL', 'TypeScript', 'Additional Skills']
    }
},
name: 'Skills',
components: {
    // SidePanel
    }
}

</script>

<style scoped>

h2 {
    font-family: 'Libre Barcode 39 Text', cursive;
}

.scroll_menu {
    height: 45em;
    width: 16em;
    border-radius: 6px;
    float: right;
    margin-right: 15%;
    background-color: white;
}

.menu {
    margin: 1em;
    height: 42em;
    border-width: 4px;
    border-color: #284B63;
    border-radius: 6px;
    border-style: solid;
    /* overflow: scroll; */
}

.skills {
    padding: 5px;
    color: black;
    display: flex;
    flex-direction: column;
}

.skill {
    padding: 5px;
    color: black;
    font-family: 'Roboto', sans-serif;
}

</style>>

