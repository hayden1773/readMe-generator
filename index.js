const inquirer = require('inquirer')

inquirer
    .prompt ([
        {
            type:"input",
            name: "projectTitle",
            message: "Input the name of your project",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a discription of what your project is"
        },
        {
            type: "input",
            name: "projectFor",
            message: "What was the motivation to build this project"
        },
        {
            type: "input",
            name: "problemSolved",
            message: "Provide a discription of what problem this project solves"
        },
        {
            type: "input",
            name: "takeAway",
            message: "What knowledge was gained building and completing this project"
        },
        {
            type: "input",
            name: "installation",
            message: "What is required to install your project?"
        },
        {
            type: "input",
            name: "steps",
            message: "Provide a step by step guide to install your Project"
        },
        {
            type: "input",
            name: "usage",
            message: "Add instructions on how to properly use your project"
        },
        {
            type: "input",
            name: "screenshot",
            message: "Type in ![alt text]() then connect your image inside the empty parentheses"
        },
        {
            type: "input",
            name: "credits",
            message: "Provide a list of collaborators including yourself",
        },
        {
            type: "input",
            name: "thirdPartyAssets",
            message: "Compile a list of detailed third party assets you used for your project",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Add a license to your readme to let other know what they can and cannot do with your project ",
            choices: ['APM','AUR','BOWER','COCOAPODS','CONDA','CPAN','CRAN','CRATES','CTAN','DUB','ECLIPSE','GITHUB','HEX','NPM','ORE','PACKAGIST','PYPI','REUSE','WEBLATE'],
        },
        {
            type: "input",
            name: "gitUser",
            message: "What is your Github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "features",
            message: "If your project has a lot of features,list them here, otherwise leave blank. ",
        },
        {
            type: "input",
            name: "tests",
            message: "Did you do any tests?If so please describe, otherwise leave blank",
        },
        
        `# ${projectTitle}




        ## table of contents
        1. [Description](#Description)
        2. [Installation](#Installation)
        3. [Usage](#Usage)
        4. [Credits](#Credits)
        5. [License](#License)
        6. [Questions](#Questions)
        
        
        
        ## Description
            ${description}
            ${projectFor}
            ${problemSolved}
            ${takeAway}
        
        
        ## Installation
            ${installation}
            ${steps}
        
        
        ## Usage
            ${usage}
            ${screenshot}
        
        ## Credits
            ${credits}
            ${thirdPartyAssets}
        
        
        ## License(s)
            [![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/MIT)
        
        
        ## Questions
            You can access my github repository from here https://github.com/${gitUser}
        
            You may also forward an email for more information or questions to ${email}
        
        ## Features
            ${features}
        
        
        ## Tests 
            ${tests}`





    ]).then(function(answers){
        console.log(answers)
    })