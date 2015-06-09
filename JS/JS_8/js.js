window.onload = function(){
    var btn = document.querySelector('.btn-info');
    var text = document.querySelector('textarea').value;
btn.addEventListener('click', function(){
    var sentence = text.split('.').length - 1;
    var words = text.split(" ").length;
    var numbers= text.replace(/[^0-9]/g, '').length;
    var lines = text.match(/\n/g).length;
    var letters = text.match(/[A-Za-z]/g).length;
    console.log(
    'Sentence:', sentence, 
    "Words:",words,
    "numbers:",numbers,
    "lines:",lines,
    "Letters:", letters);
    
},false);
    
};