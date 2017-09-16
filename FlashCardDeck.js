// require basic flashcard module
var BasicFlashcard = require('./BasicCard.js');
// require cloze flashcard module
var ClozeFlashcard = require('./ClozeCard.js');
// require inquirer for getting user input at command line
var inquirer = require('inquirer');
// require fs
var fs = require('fs');

inquirer.prompt([{
    name: 'command',
    message: 'What would you like to do?',
    type: 'list',
    choices: [{
        name: 'Basic-flashcard'
    }, {
        name: 'Cloze-flashcard'
    }]
}]).then(function (answer) {
    if (answer.command === 'Basic-flashcard') {
        viewBasic();
    } else if (answer.command === 'Cloze-flashcard') {
        viewCloze();
    }
});

var viewBasic = function () {
    // get user input
    var basicCardOne = new BasicFlashcard ("Who was the first president of the United States?", "George Washington")
    inquirer.prompt([{
        name: 'cardType',
        message: basicCardOne.front,
        type: 'list',
        choices: [{
            name: 'flip card'
        }, {
            name: 'exit'
        }]
        // once user input is received
    }]).then(function (answer) {
        if (answer.cardType === 'flip card'){ 
            inquirer.prompt([{
                name: 'back',
                message: basicCardOne.back,
            }, {
                name: 'exit',
                message: 'You are exiting'
            }]);
        };
    });
}

var viewCloze = function () {
    // get user input
    var clozeCardOne = new ClozeFlashcard (
        "George Washington was the first president of the United States", 
        "George Washington",
        "was the first president of the United States"
    )

    inquirer.prompt([{
        name: 'cardType',
        message: clozeCardOne.clozeDeleted,
        type: 'input',
        input: 'George Washington'
        // once user input is received
    }]).then(function (answer) {
        if (answer.cardType === 'George Washington'){ 
            console.log("Yes! it was " + clozeCardOne.cloze);
           console.log('You are now exiting');
        } else if (answer.cardType !== 'George Washingtion'){
            console.log("Inncorrect, it was " + clozeCardOne.cloze);
            console.log('exiting');
        }
    });
}