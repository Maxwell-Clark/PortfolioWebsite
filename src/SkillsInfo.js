const SkillsInfo = [
    {
        name: 'JavaScript',
        experiance: [   
                    'I currently use JavaScript everyday both in the front and back ends.', 
                    'I am using the MEVN stack in my current role at Revolution.',
                    'I started working with JavaScript in 2016 when I started Exploring web development.'
                    ],
        accomplishments: [
                        'Created an algorythim that increases usability in Pipe Planner', 
                        'Used Vue, Express, Mongodb, and Nodejs to implement features accross the entire stack.',
                        'Pushed code that will be used by thousands of users.'
                    ]
    },
    {
        name: 'HTML5',
        experiance: [
                    'I started working with HTML in 2016 when I started Exploring web development.',
                    'I have been working with HTML everyday in my job as a software engineer',
                    'I Worked closely with product owners on a daily basis to take and turn it into something tangible', 
                    'I used HTML5 features to create a product that was drastically better than the previous version.'
                    ],
        accomplishments: [
                        'I reworked the front page a Web app I worked on at Revolution to which exteremly inhanced useabilty.', 
                        'I helped to implement the overall design of a product that amazed users.'
                        ],
    },    
    {
        name: 'CSS',
        experiance: [
                    'Originally learned on CodeCademy and FreeCodeCamp.org in 2016.', 
                    'I have worked with Cascading Style Sheets on a daily basis since July 2020.', 
                    'I have used CSS to Create Visually stunning Websites in a Professional Setting.'],
        accomplishments: [
                        'Used CSS to create a responsive web app that can be used functionally across any device.',
                    ],
    },
    {
        name: 'Vue',
        experiance: ['started learning html in 2016', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
    },
    {
        name: 'Node',
        experiance: ['NPM', 'backend'],
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
        name: 'Communication',
        experiance: ['worked with product owners', 'have used modern frameworks'],
        accomplishments: ['super dope', 'worked in it for over 8 months perfessionally']
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

