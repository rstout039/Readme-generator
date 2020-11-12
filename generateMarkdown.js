// function to generate markdown for README
function generateMarkdown(response) {
    return `# ${response.title}
    # Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)

    ##Description
    # ${response.description}
    ##Installation
    # ${response.installation}
    ##Usage
    # ${response.usage}
    ##License
    # ${response.license}
    ##Contributing
    # ${response.contributing}
    ##Tests
    # ${response.tests}
    ##Questions
    # ${response.questions1}
    # ${response.questions2}
    # ${response.questions3}
  `;
  }
  
module.exports = generateMarkdown;