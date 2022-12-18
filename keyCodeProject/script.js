let mainElm = document.body;
let mainText = document.querySelector('h1');
let resultElm = document.querySelector('.result');
let boxsElm = document.querySelector('.container');
let keyTextElm = document.querySelector('#key');
let locTextElm = document.querySelector('#location');
let whichTextElm = document.querySelector('#which');
let codeTextElm = document.querySelector('#code');
let asscitextElm = document.querySelector('#assci');





mainElm.addEventListener('keydown', function(event){


    event.preventDefault()
    mainText.remove()
    resultElm.style.display = 'flex';
    boxsElm.style.display = 'flex';

    asscitextElm.textContent = event.keyCode;
    keyTextElm.textContent = event.key
    locTextElm.textContent = event.location
    whichTextElm.textContent = event.keyCode;
    codeTextElm.textContent = event.code;




});