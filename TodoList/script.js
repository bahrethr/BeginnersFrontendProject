let input = document.querySelector('.input'); //input Element
let listElm = document.querySelector('.list'); // ul Element
let warning = document.querySelector('.warnning')

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter' && input.value === ''){
        input.style.cssText = 'background-color: red';
        warning.textContent = 'This Field Can not be null'; 
        
    }
    else if(event.key === 'Enter')
    {
        input.style.cssText = 'background-color: rgba(0, 0, 0, 0.3)';
        //ADD newItem
        // li = a = i
        //ul = li
        let liTag = document.createElement('li');
        let aTag = document.createElement('a');
        let iTag = document.createElement('i');

        liTag.innerHTML = input.value;
        iTag.className ='fa-regular fa-trash-can';
      
        aTag.append(iTag)
      
        liTag.append(aTag)
        listElm.append(liTag)
        input.value = '';

        //DELETE item
          aTag.addEventListener('click' ,function(event){

            event.target.parentElement.parentElement.remove()

        });
        
    }
});







