$(document).ready(function(){
    var numberArray = [];
    var div = $('.mydiv');
    var shuffleBtn = '.btn-primary';
    var ascendingBtn = $('.btn-success');
    var descendingBtn = $('.btn-info');
    var removedElement = 0;
    
    for ( var i = 1; i < 151; i++){
        numberArray.push(i);
    }
    
// Creating
    _.each(numberArray, function(elem, index, list){
        var span = document.createElement('span');
        span.innerHTML = elem;
        div.append(span);
    });
    $('span').addClass('badge');

// Shuffling
    
    $(document).on('click', shuffleBtn, (function(){
        $('span').remove();
       numberArray = _.shuffle(numberArray);
        _.each(numberArray, function(elem, index, list){
        var span = document.createElement('span');
        span.innerHTML = elem;
        div.append(span);
        });
        $('span').addClass('badge');
    }));

// Sorting By Ascendig Order    
    ascendingBtn.click(function() {
        numberArray.sort(ascendingOrder);
         $('span').remove();
        _.each(numberArray, function(elem, index, list){
            var span = document.createElement('span');
            span.innerHTML = elem;
            div.append(span);
        });
        //console.log(numberArray);
        $('span').addClass('badge');
    });
    
// Sorting By Descendig Order        
    descendingBtn.click(function() {
        numberArray.sort(descendingOrder);
         $('span').remove();
        _.each(numberArray, function(elem, index, list){
            var span = document.createElement('span');
            span.innerHTML = elem;
            div.append(span);
        });
        //console.log(numberArray);
        $('span').addClass('badge');
    });

// Removing This Span Element

    $(document).on('click','span', function() {
        $(this).fadeOut(500, function(){
            $(this).remove();
            removedElement = parseInt($(this).text(), 10);
            numberArray = _.without(numberArray, removedElement);
            //console.log(removedElement);
        });
    });

function ascendingOrder(a, b){
    return a-b;
}

function descendingOrder(a, b){
    return b-a;
}

});