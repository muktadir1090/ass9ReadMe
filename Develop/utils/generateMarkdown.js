// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)  {
    if (!license) {
      return ''; // If no license, return an empty string
    }
  
    const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
      'Mozilla Public License 2.0': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    };
  
    return badges[license] || ''; // Return the badge or an empty string if no matching license
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { {
    if (!license) {
      return ''; // Return an empty string if no license is provided
    }
  
    // Mapping of licenses to their respective links
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'ISC': 'https://opensource.org/licenses/ISC',
      'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    };
  
    // Return the link for the given license, or an empty string if not found
    return licenseLinks[license] || '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)  {
    if (!license) {
      return ''; // Return an empty string if no license is provided
    }
  
    // Return the License section with a link to the chosen license
    return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
