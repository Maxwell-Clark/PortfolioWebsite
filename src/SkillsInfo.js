const SkillsInfo = [
    {
        name: 'JavaScript',
        experiance: ['worked for 8 months as intern', 'excited to work'],
        accomplishments: ['Reworked the front page to allow for exteremly inhances useabilty over the previous pipe planner page.'],
        logo: 'assets/JavaScriptLogo'
    },
    {
        name: 'HTML5',
        experiance: ['started learning html in 2016', 'insert exp here lol'],
        accomplishments: ['Reworked the front page to allow for exteremly inhances useabilty over the previous pipe planner page.', 'worked in it for over 8 months perfessionally'],
        logo: 'assets/HTMLLogo'
    },    
    {
        name: 'CSS',
        experiance: ['started learning css in 2016', 'super dope', 'excited to work'],
        accomplishments: ['Developed a responsive web app that can be used accross any platform or device.', 'really awesome'],
        logo: 'assets/cssLogo'
    },
    {
        name: 'Vue',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },
    {
        name: 'Unit Testing',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Git',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },    {
        name: 'REST APIs',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Python',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },
    {
        name: 'Java',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Golang',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },    {
        name: 'TensorFlow',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Http',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },
    {
        name: 'Turf.js',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Azure Services',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },    {
        name: 'Azure Devops',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Express.js',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },
    {
        name: 'Mongodb',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'SQL',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },    {
        name: 'TypeScript',
        experiance: ['worked for 8 months as intern', 'super dope', 'excited to work'],
        accomplishments: ['super dope guy', 'really awesome']
    },
    {
        name: 'Additional Skills',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    }
]
                /*'JavaScript', 'HTML5', 'CSS', 'Vue', 'Unit Testing', 
                'Git', 'REST APIs', 'Python', 'Java', 'Golang', 'TensorFlow',
                'Http', 'Turf.js', 'Azure Services', 'Azure Devops',
                'Express.js', 'Mongodb', 'SQL', 'TypeScript', 'Additional Skills' */

export function returnSkillInfo(activeSkill) {
    let newSkillInfo = null
    for(let i = 0; i < SkillsInfo.length; i++) {
        if(activeSkill == SkillsInfo[i].name){
            newSkillInfo = SkillsInfo[i]
        }
    }
    return newSkillInfo
}

