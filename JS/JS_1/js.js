window.onclick = function(){
    var two = "Two";
    var one = "One";
    var text   = document.getElementById("changeable");
    
    text.innerHTML = (text.innerHTML === one) ? two : one;
};