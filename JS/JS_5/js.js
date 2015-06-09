window.onload = function(){
    var result = [];
    var table = document.querySelector('.table');
    var btn = document.querySelector('.btn-success');
    var btn_clean = document.querySelector('.btn-danger');
    
    btn.addEventListener('click',function(){
        var userText = document.querySelector('#usertext').value;
        var text     = userText.split(" ");
        for(var i = 0; text[i]; i++){
            result.push(text[i].charAt(0).toUpperCase());
        }
        for(var k = 0; result[k]; k++){
            table.innerHTML += "<tr><td><h5>"+ result[k].toString() + "</h5></td></tr><hr>";
        }
    },false);
    
    btn_clean.addEventListener('click',function() {
        result = [];
        document.querySelector('#usertext').value = "";
        table.innerHTML = "";
    },false);
};