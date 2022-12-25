let btnElm = document.querySelector('.button');
let modalElm = document.querySelector('.modal-parent');
let cancelElm = document.querySelector('.X')
let blur = document.querySelector('.container')

function close(){
    modalElm.style.display = 'none'
    blur.style.filter = 'blur(0px)';
}

btnElm.addEventListener('click' , function(){
        modalElm.style.display = 'block';
        blur.style.filter = 'blur(6px)';

});

cancelElm.addEventListener('click', close);

window.addEventListener('keydown' ,function(event){
    if(event.key === 'Escape'){
        close()
        btnElm.blur()
    }
});