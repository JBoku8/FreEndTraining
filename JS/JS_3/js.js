var person = {};

window.onload = function(){
    var empty = "";
    var name    = document.querySelector('#name');
    var surname = document.querySelector('#surname');
    var age     = document.querySelector('#age');
    
    var btn_save = document.querySelector('.btn-success');
    var btn_show = document.querySelector('.btn-info');
    
    btn_save.addEventListener('click', function(){
        if(!((name.value === empty) || (surname.value === empty) || (age.value === empty))) {
            $('.onerror').removeClass('has-error');
            person.name = name.value;
            person.surname  = surname.value;
            person.age = age.value;
        } else {
            $('.onerror').addClass('has-error');
        }
    },false);
    
    btn_show.addEventListener('click', function() {
        document.getElementById('name_show').innerHTML = person.name +"<hr>";
        document.getElementById('surname_show').innerHTML = person.surname +"<hr>";
        document.getElementById('age_show').innerHTML = person.age +"<hr>";
    },false);
};