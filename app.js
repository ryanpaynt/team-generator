// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");

var employeeArr = [];

var ifEmpty = (input) => {
    const check = input === "" ? 'Please enter a value!' : false
    return check;
}


const init = () => {
    console.log('This is the Employee Generator. Answer each prompt using the keyboard, submit an answer with ENTER and CMD+C/MAC/ or CTRL+C/Windows/ to exit. Enjoy!');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the Manager's name?",
                name: "manName",
                //validate: ""
            },
            {
                type: 'input',
                message: "What is the Manager's ID number?",
                name: "manID",
                //validate: ""
            },
            {
                type: 'input',
                message: "What is the Manager's email address?",
                name: "manEmail",
                //validate: ""
            },
            {
                type: 'input',
                message: "What is the Manager's unique office number?",
                name: 'manOffNum',
                //validate: ''
            },
        ])
        .then( (response) => {
            const managerObj = new Manager(response.manName, response.manID, response.manEmail, response.manOffNum);
            employeeArr.push(managerObj);
            nextPrompt();
        });
}

const internPrompt = () =>{
    console
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: "intName",
            //validate: ""
        },
        {
            type: 'input',
            message: "What is the Intern's ID number?",
            name: "intID",
            //validate: ""
        },
        {
            type: 'input',
            message: "What is the Intern's email address?",
            name: "intEmail",
            //validate: ""
        },
        {
            type: 'input',
            message: "What is the Intern's school name?",
            name: 'intSchool',
            //validate: ''
        },
    ])
    .then( (response) => {
        const internObj = new Intern(response.intName, response.intID, response.intEmail, response.intSchool);
        employeeArr.push(internObj);
        nextPrompt();
    });
}

const engineerPrompt = () =>{
    console
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: "enName",
            //validate: ""
        },
        {
            type: 'input',
            message: "What is the Engineer's ID number?",
            name: "enID",
            //validate: ""
        },
        {
            type: 'input',
            message: "What is the Engineer's email address?",
            name: "enEmail",
            //validate: ""
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub username?",
            name: 'enGH',
            //validate: ''
        },
    ])
    .then( (response) => {
        const engineerObj = new Engineer(response.enName, response.enID, response.enEmail, response.enGH);
        employeeArr.push(engineerObj);
        nextPrompt();
    });
}

const nextPrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            message: "Would you like another employee?",
            name: 'employeeList',
            choices: [
                "Engineer", "Intern", "Exit"
            ]
        })
        .then((response) => {
            switch (response.employeeList){
                case "Intern":
                    internPrompt();
                    break;
                case "Engineer":
                    engineerPrompt();
                    break;
                default :
                    renderEmpList(employeeArr);
                    break;
            }
        })
}

const renderEmpList = (employeeArr) => {
    const rendHTML = render(employeeArr);
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdir(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, rendHTML, (err) => {
        if(err){
            return console.log(err);
        }
        console.log("Employees have been generated to your HTML file. please check index.html in the output folder.");
    });
}

inits();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```