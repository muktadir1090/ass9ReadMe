// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Write the name of your Project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write the description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter Table of Content',
    name: 'table_content',
  },
];

// Function to generate the README content
function generateReadMe(answers) {
  return `
# Project Title: ${answers.title}

## Table Of Content:
${answers.table_content}

### Description:
${answers.description}
`;
}
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try {
      await fs.writeFile(fileName, data);
      console.log('Successfully created README.MD!');
    } catch (err) {
      console.log(err);
    }
  }



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readMePageContent = generateReadMe(answers);
      writeToFile('README.md', readMePageContent);
    });
  }

// Function call to initialize app
init();
