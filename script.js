const startButton = document.getElementById('submit');
const jokes = document.getElementById('joke-container');
const answerButton = document.getElementById('answers');
const answers = document.getElementById('answer-container');

let jokeList = [
    'My boss said “dress for the job you want, not for the job you have.”',
    'What do you call a French man wearing sandals?',
    'What did the skillet eat for its birthday?',
    'Where do rainbows go when they have been bad?',
    'Dogs cannot operate MRI machines.',
    'I went to a silent auction.',
    'How is my wallet like an onion?',
    'What do you call a dog who meditates?',
    'What kind of fish do penguins catch at night?',
    'I once submitted 10 puns to a joke competition. I really thought with that many, one was sure to be a winner.'
];

let endList = [
    ' So I went in as Batman.',
    'Philipe Fallop.',
    'Pan-cakes',
    'To prism, so they have time to reflect on what they have done.',
    'But catscan.',
    'I won a dog whistle and two mimes.',
    'Every time I open it, I cry.',
    'Aware wolf.',
    'Star fish.',
    'Sadly, no pun in ten did.'
];

let jokeIndex = 0;
jokes.textContent = jokeList[jokeIndex];
let answerIndex = 0;
answer.textContent = endList[answerIndex];


let jokeFunction = () =>{
    startButton.addEventListener('click', () =>{
        jokes.textContent = = jokeList[jokeIndex];
    });
}

let answerFunction = () =>{
    answerButton.addEventListener('click', () =>{
        answers.textContent = jokeList[jokeIndex];
    });
}

jokeFunction ();

console.log(jokeFunction);