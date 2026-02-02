import enquirer from 'enquirer';
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?'
    },
    {
        type: 'password',
        name: 'password',
        message: 'What is your password?'
    }
];

const answers = await enquirer.prompt(questions);

console.log(answers);