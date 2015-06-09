window.onload = function(){
    var randomNumbers;
    var selector = ".number";
    var btn = document.querySelector('.btn');
    var element;
    var colorSelector ='#color';
    btn.addEventListener('click',function(){
        
            randomNumbers = Math.floor((Math.random() *20)+1);
            
            element = document.querySelector(colorSelector+randomNumbers);
            
            if (element.className === 'grn'){
                element.setAttribute('class','rd');
                
            } else if(element.className === 'rd'){
                element.setAttribute('class','bl');
                
            } else {
                element.setAttribute('class', 'grn');
            }
            
            selector = ".number";
    },false);
};