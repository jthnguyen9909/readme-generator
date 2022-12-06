// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "Other") {
    return `\n![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== "Other") {
    return `\n* [License](#license)\n`;
  }
  return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== "Other") {
    return `\n
## License

This project is licensed under the ${license} license.`;
  }
  return "";
};

const renderCreditsSection = (credits) => {
  if (credits !== "") {
    return `
## Credits

${credits}
`;
  }
  return "";
};
const renderCreditsLink = (credits) => {
  if (credits !== "") {
    return `\n* [Credits](#credits)\n`;
  }
  return "";
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Usage](#usage)
${renderLicenseLink(data.license)}${renderCreditsLink(data.credits)}
* [Questions](#questions)

## Usage

${data.usage}${renderLicenseSection(data.license)}
${renderCreditsSection(data.credits)}
## Questions

If you have any questions about this repository, open an issue or contact me at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }).
`;
};

module.exports = generateMarkdown;
