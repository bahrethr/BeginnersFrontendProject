'use strict';


function displayMessage(message){
    document.querySelector('.message').textContent = message;
}


let number = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click' , function(){

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){

        // document.querySelector('.message').textContent = 'no number';
        displayMessage('no number');

    }else if(guess === number){

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        document.querySelector('.number').textContent = number;
        displayMessage('correct');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        
    }
    else if( guess !== number){
        if(score < 1)
            displayMessage('Game Over');
            document.querySelector('.score').textContent = 0;
        
            displayMessage(guess > number ?'Too High!': 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
    }

});

document.querySelector('.again').addEventListener('click',function(){

    score = 20;
    let number = Math.trunc(Math.random() * 20 ) + 1;
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 20;
    displayMessage('Start Guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';



});




