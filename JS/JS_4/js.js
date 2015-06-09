//var res = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var letter = {};
var lower = "";
window.onload = function(){
    
    
    var btn = document.querySelector('.btn-default');
    var btn_c = document.querySelector('.btn-info');
    var table = document.querySelector('.table');
    var str;
    
    btn.addEventListener('click', function(){
        table.innerHTML = "";
        str = document.querySelector('#str');
        str = str.value;
        lower = str.replace(/[^A-Za-z]/g, "").toLowerCase().split("");
        
        lower.forEach(function(e){
            if(letter[e]) {
                letter[e] +=1;
            } else {
                letter[e] = 1;
            }
        });
        
        for( var prop in letter ) {
            if(letter.hasOwnProperty(prop)){
                table.innerHTML += "<tr><td>" + prop + "</td>" + "<td>" + letter[prop]+ "</td></tr>";
            }
        }
        //console.log(count, smallLetter);
    },false);
    
    
    
    btn_c.addEventListener('click',function() {
        document.querySelector('#str').value = "";
        letter = {};
        //count = "";
        lower = "";
        table.innerHTML = "";
    } ,false);
};

/*function detect(input) {
    for(var i = 0; i < res.length; i++){
        if(input === res[i]){
            count++;
            letter = res[i];
        } else {
            count = 1;
        }
    }
    return count;
} */

