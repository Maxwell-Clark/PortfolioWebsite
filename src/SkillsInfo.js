const SkillsInfo = [
    const JavaScriptInfo = {
        name: 'Javascript',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    const HTML5Info = {
        name: 'HTML5',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    }
]

export function returnSkillInfo(activeSkill) {
    for(let i = 0; i < SkillsInfo.length; i++) {
        if(activeSkill = SkillsInfo[i].name){
            return SkillsInfo[i]
        }
    }
}

