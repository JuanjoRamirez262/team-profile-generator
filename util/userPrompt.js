const inquirer = require('inquirer')

const addNew = () => {
    return inquirer.prompt([
        {
            name: 'addNew',
            message: "Add new team member?",
            type: 'confirm',
        }
    ])
}

const pickRole = () => {
    return inquirer.prompt([
        {
            name: 'pickRole',
            message: "Which role you want to add?",
            type: 'list',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
}

const managerQuestions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: "Manager name?",
            type: 'text',
        },{
            name: 'id',
            message: "Manager id?",
            type: 'text',
        },{
            name: 'email',
            message: "Manager email?",
            type: 'text',
        },{
            name: 'office',
            message: "Manager office number?",
            type: 'text',
        }
    ])
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: "Engineer name?",
            type: 'text',
        },{
            name: 'id',
            message: "Engineer id?",
            type: 'text',
        },{
            name: 'email',
            message: "Engineer email?",
            type: 'text',
        },{
            name: 'github',
            message: "Engineer github?",
            type: 'text',
        }
    ])
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: "Intern name?",
            type: 'text',
        },{
            name: 'id',
            message: "Intern id?",
            type: 'text',
        },{
            name: 'email',
            message: "Intern email?",
            type: 'text',
        },{
            name: 'school',
            message: "Intern school?",
            type: 'text',
        }
    ])
}

module.exports = {
    addNew,
    pickRole,
    managerQuestions,
    engineerQuestions,
    internQuestions
}