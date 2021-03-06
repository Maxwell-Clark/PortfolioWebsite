<template>
    <div>
        <h2>Skills</h2>
        <div id="logo">
            <img src="" alt="">
        </div>
        <div class="body">
            <div>
                <h3 class="list_headers">My Experiance</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <h3 class="list_headers">Key Accomplishments</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="scroll_menu">
                <div class="menu">
                    <div class="skills">
                        <label class="skill" @click="showSkillInfo" v-for="skill in skills" :key="skill" for="">{{skill}}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            skills: ['JavaScript ', 
                'HTML5', 'CSS', 'Vue', 'Unit Testing', 
                'Git', 'REST APIs', 'Python', 'Java', 'Golang', 'TensorFlow',
                'Http', 'Turf.js', 'Azure Services', 'Azure Devops',
                'Express.js', 'Mongodb', 'SQL', 'TypeScript', 'Additional Skills'],
            activeSkill: null
        }
    },
    name: 'Skills',
    mounted() {
        this.activeSkill = this.skills[0]
    },
    methods: {
        showSkillInfo(newSkill) {
            this.activeSkill = newSkill
        }
    }

}

</script>

<style scoped>

h2 {
    font-family: 'Libre Barcode 39 Text', cursive;
    font-size: 5em;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
}

.list_headers {
    margin: 0px;
    font-family: 'Inconsolata', monospace;
    font-size: 2em;
}


#logo {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 50%;
    margin: auto;
    background-color: white;
}

.body {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
}

.scroll_menu {
    height: 43.5em;
    width: 16em;
    border-radius: 6px;
    float: right;
    background-color: white;
}

.menu {
    margin: 1em;
    height: 41em;
    border-width: 4px;
    border-color: #284B63;
    border-radius: 6px;
    border-style: solid;
}

.skills {
    padding: 5px;
    color: black;
    display: flex;
    flex-direction: column;
}

.skill {
    padding: 6px;
    color: #284B63;
    background: #D9D9D9;
    font-family: 'Inconsolata', monospace;
    margin: 2px;
    border-radius: 6px;
}

</style>>

