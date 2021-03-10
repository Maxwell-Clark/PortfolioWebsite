<template>
    <div>
        <h2>Skills</h2>
        <div id="logo">
            <label>{{activeSkill.name}}</label>
        </div>
        <div class="body">
            <div>
                <h3 class="list_headers">My Experiance</h3>
                <ul v-if="activeSkillInfo">
                    <li v-for="ex in activeSkillInfo.experiance" :key="ex">{{ex}}</li>
                </ul>
            </div>
            <div>
                <h3 class="list_headers">Key Accomplishments</h3>
                <ul  v-if="activeSkillInfo">
                    <li v-for="a in activeSkillInfo.accomplishments" :key="a">{{a}}</li>
                </ul>
            </div>
            <div class="scroll_menu">
                <div class="menu">
                    <div class="skills">
                        <label class="skill" @click="changeActiveSkill(skill)" v-for="skill in skills" :key="skill" for="">{{skill}}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { returnSkillInfo } from './../SkillsInfo'

export default {
    data() {
        return {
            skills: ['JavaScript', 
                'HTML5', 'CSS', 'Vue', 'Unit Testing', 
                'Git', 'REST APIs', 'Python', 'Java', 'Golang', 'TensorFlow',
                'Http', 'Turf.js', 'Azure Services', 'Azure Devops',
                'Express.js', 'Mongodb', 'SQL', 'TypeScript', 'Additional Skills'],
            activeSkill: null,
            activeSkillInfo: null
        }
    },
    name: 'Skills',
    mounted() {
        this.activeSkill = this.skills[0]
        this.changeActiveSkill(this.skills[0])
    },
    watch: {
        activeSkill: 'changeActiveSkill'
    },
    methods: {
        changeActiveSkill(newSkill) {
            this.activeSkill = newSkill
            this.activeSkillInfo = returnSkillInfo(newSkill)
        },
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

.skill:hover {
    color: #fff;
    background: #284B63;
    animation-name: skillHover;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes skillHover {
    from{
        border-radius: 6px;
    }    
    to{
        border-radius: 1px;
    }
}

</style>>

