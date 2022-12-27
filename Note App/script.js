let Addbtn = document.querySelector('#Add');
let removeBtn = document.querySelector('#remove');
let elem = document.querySelector('.box');
let inputElm = document.querySelector('#input')
let colorBox2 = document.querySelector('.color-select');
let colorBox = document.querySelectorAll('.color-box');
let newElm = document.createElement('p');

function additem(){
    let newElm = document.createElement('p');
    newElm.textContent = inputElm.value;
    newElm.style.backgroundColor = inputElm.style.backgroundColor

    //remove 
    newElm.addEventListener('click',function(){
        newElm.style.under
    })
    elem.append(newElm);
    inputElm.value = '';
}

//change color
colorBox.forEach(function(item){
    item.addEventListener('click' , function(){
        inputElm.style.backgroundColor = item.style.backgroundColor
    });

});

//add item
Addbtn.addEventListener('click', function(){
 
    if(inputElm.value != ''){
        additem();
    }
    else
    console.log('write something');

  
});

inputElm.addEventListener('keyup' , function(event){
    
    if(inputElm.value != ''){
        if(event.key === 'Enter') {
            additem();
        }
    }else
        console.log('write something');

});

//clear btn 
removeBtn.addEventListener('click', function(){
    inputElm.value = ''
});




