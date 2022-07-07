// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the title.');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "repository",
    message: "What is the name of your GitHub repository?",
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address. (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('You need to enter a vaild email');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'installation',
    message: 'Please note installation instructions if needed for the installation section.',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the purpose of your project, what is the usage. (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('You need to enter purpose of project!');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'features',
    message: 'List any features your project may have. (Required)',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What licenses are used? (Required)',
    choices: ["No Licenses", "Apache", "GNU", "MIT", "ISC"],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the names of anyone who worked on the project. (Required)',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync("dist/" + fileName, data)
}

// TODO: Create a function to initialize app
function init() {


}


// Function call to initialize app
init();
