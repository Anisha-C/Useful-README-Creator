// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  ## Description

  * ${data.description}



  ## Github application and page links

  Github app:[${data.repository}](https://github.com/${data.github}/${data.repository})

  Github page:[${data.repository}](https://${data.github}.github.io/${data.repository}/)



  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#features)
  * [Questions](#questions)



  ## Installation
  * ${data.installation}

  ## Usage
  * ${data.usage}

  ## Tests
  * ${data.tests}

  ## Credits
  * ${data.credits}

  ## License
  * ${data.license}

  ## Badges
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.github}/${data.repository}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.github}/${data.repo}?style=flat&logo=appveyor)

  ## Features
  ${data.contributing}

  ## Questions

  Feel free to contact me using the infomation below, Thanks!:

  * Email: [${data.email}](mailto:${data.email})
  * GitHub: [${data.github}](https://github.com/${data.github})

  [Top](#description)
`
}


module.exports = generateMarkdown;
