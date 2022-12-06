// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
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
    choices: ["MIT", "APACHE", "GPLv3", "ISC", "Other"],
  },
  {
    type: "input",
    message: "How is your project used?",
    name: "usage",
  },
  {
    type: "input",
    message: "Are there any collaborators or assets that require attribution?",
    name: "credits",
  },
];

// function to write README file
const writeToFile = (fileName, data) => {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize app
const init = () => {
  inquirer.prompt(questions).then((inquirerData) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...inquirerData }));
  });
};

// Function call to initialize app
init();
