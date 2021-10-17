const generateHtml = require('./util/generateHtml')
const fs = require('fs')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const userPrompt = require('./util/userPrompt')

const team = []

const init = async () => {
    const addNew = await userPrompt.addNew();
    if (addNew.addNew) {
        const newWhat = await userPrompt.pickRole();
        switch (newWhat.pickRole) {
            case 'Manager':
                const newManagerInfo = await userPrompt.managerQuestions()
                team.push(new Manager(newManagerInfo.name, newManagerInfo.id, newManagerInfo.email, newManagerInfo.office))
                break;
            case 'Engineer':
                const newEngineerInfo = await userPrompt.engineerQuestions()
                team.push(new Engineer(newEngineerInfo.name, newEngineerInfo.id, newEngineerInfo.email, newEngineerInfo.github))
                break;
            case 'Intern':
                const newInternInfo = await userPrompt.internQuestions()
                team.push(new Intern(newInternInfo.name, newInternInfo.id, newInternInfo.email, newInternInfo.school))
                break;
        }
        await init()
    } else {
        fs.writeFileSync('index.html', generateHtml(team))
    }
}

init()