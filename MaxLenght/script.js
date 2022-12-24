let counter = document.querySelector('.counter');
let inputElm = document.querySelector('input');
let maxlenght = inputElm.getAttribute('maxlength');

inputElm.addEventListener('keyup', function(){     
       counter.innerHTML = maxlenght - inputElm.value.length;
});

