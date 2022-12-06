// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What license will your project be using?",
    name: "license",
    choices: ["MIT", "APACHE", "GNU GPLv3", "ISC", "Other"],
  },
  {
    type: "input",
    message: "How is your project installed?",
    name: "installation",
    default: "Command 'npm i' should be run initially to install dependencies.",
  },
  {
    type: "input",
    message: "How is your project used?",
    name: "usage",
    default:
      "After installation, run 'npm index.js' in the terminal and the user will answer a series of questions using inquirer to generate a professional readme.",
  },
  {
    type: "input"
    message: "Are there any collaborators or assets that require attribution?",
    name: "credits",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
