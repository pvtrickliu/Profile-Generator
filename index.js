const inquirer = require("inquirer");
const axios = require("axios");

const questions = [
    {
        type:"input",
        name:"username",
        message:"What is your GitHub username?"
    }
    ,
    {
        type:"list",
        name:"color",
        message:"What is your favorite color?",
        choices: ["green", "blue", "pink", "red"]
    }
    
  
];

function writeToFile(fileName, data) {
 
}

function init() {
    console.log("Hello");
    inquirer.prompt(questions).then(data => {
        console.log(data)
        const {username, color} = data
        axios.get(`https://api.github.com/users/${username}`)
        .then(profile => {
            // console.log(profile)
            const {avatar_url, location, html_url, public_repos, followers, following, starred_url} = profile.data
            console.log(public_repos)
            console.log(starred_url);
        })

        // console.log(public_repos)
    });
}

// The generated resume includes a bio image from the user's GitHub profile.

// * The generated resume includes the user's location and a link to their GitHub profile.

// * The generated resume includes the number of: public repositories, followers, GitHub stars and following count.
init();