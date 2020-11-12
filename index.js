// Required packages
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// questions to ask user //
const questions = [
    {
        type: "input",
        name: "badge",
        message: "input badge code"
    },
    {
        type: "input",
        name: "title",
        message: "what id the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description."
    },
    {
        type: "input",
        name: "toc",
        message: "Write a table of contents separated by commas"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "describe usage."
    },
    {
        type: "checkbox",
        name: "Choose a license.",
        message: "License",
        choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "ISC License",
            "Public Domain (Unlicensed)"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the rules for contributing?"
    },
    {
        type: "input",
        name: "tests",
        message: "Run tests here."
    },
    {
        type: "input",
        name: "questions1",
        message: "Enter the url of your profile picture"
    },
    // Format ![alt text] (url)
    {
        type: "input",
        name: "questions2",
        message: "Enter email"
    },
    {
        type: "input",
        name: "questions3",
        message: "Enter Github profile"
    },

]
// function to wrtie file//
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) =>{
        if (err){
            throw(err);
        }
        console.log("Readme was created");
    });
}
// function to initialize program //
function init(){
    inquirer.prompt(questions).then(answers =>{
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("Readme.md", response);
    })
    .catch(error =>{
        if(error){
            console.log(error);
        }
    })
}
init();