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
  {
    type: 'input',
    message: 'Enter installation instructions',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter test instructions',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Choose a license for your project',
    name: 'license',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub username (or link)',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Enter your email address',
    name: 'email',
  },
  {
    type: 'input',
    message: 'How should users contact you (GitHub, email, etc.)?',
    name: 'contact_method',
  },
];

// Function to generate license badge URL
function getLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(/\s+/g, '%20')}-blue.svg)`;
}

// Function to generate the README content
function generateReadMe(answers) {
  const licenseBadge = getLicenseBadge(answers.license);
  return `
# Project Title: ${answers.title}

${licenseBadge}

## Table Of Content:
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)
- [Thanks](#thanks)

### Description:
${answers.description}

### Installation Instructions:
${answers.installation}

### Usage:
${answers.usage}

### Contribution Guidelines:
${answers.contributing}

### Test Instructions:
${answers.tests}

### License:
This project is licensed under the ${answers.license} license.

### Questions:
If you have any questions, you can reach me at:

- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})

Preferred method of contact: ${answers.contact_method}

### Thanks:
Thank you for checking out this project! Your support and feedback are greatly appreciated.
`;
}

// Function to write README file
async function writeToFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log('Successfully created README.MD!');
  } catch (err) {
    console.log(err);
  }
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMePageContent = generateReadMe(answers);
    writeToFile('README.md', readMePageContent);
  });
}

// Function call to initialize app
init();