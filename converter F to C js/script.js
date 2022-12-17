let changeBtn = document.querySelector('#changeBtn');
let resetBtn = document.querySelector('#resetBtn');
let convertBtn = document.querySelector('#convertBtn');
let headerElm = document.querySelector('h1');
let inputElm = document.querySelector('input');
let resultText = document.querySelector('.result')





let flag = true;

changeBtn.addEventListener('click', function(){
    if(flag)
    {
        document.title = 'Converter F° to °C';
        headerElm.textContent = 'Converter F° to °C';
        inputElm.placeholder = 'F°';
        flag = false;
    }
    else
    {

        document.title = 'Converter °C to F°';
        headerElm.textContent = 'Converter °C to F°';
        inputElm.placeholder = '°C';
        flag = true;
    }

});

resetBtn.addEventListener('click' , function(){
    inputElm.value = '';
    resultText.textContent = 'result'
});


convertBtn.addEventListener('click' , function(){
    let input = inputElm.value

    if(input === '' )
    {
        resultText.textContent = 'Please enter some valid input. Input is not optional ⚠';
    }
    else if(isNaN(input))
    {
        // resultText.textContent = "please enter correct number";
        resultText.textContent = 'Please enter some valid input 🚫';
    }
    else if(inputElm.placeholder === 'F°')
    {
        //Fahrenheit to celsius:
        let fahrenheit = ((input - 32) * (5/9)).toFixed(2);
        resultText.textContent = fahrenheit;
    }

    else if(inputElm.placeholder === 'C°')
    {
        //celsius to Fahrenheit:
        let celsius  = ((input * (9 / 5)) + 32).toFixed(2); 
        resultText.textContent = celsius;
    }

    
    
});