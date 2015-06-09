window.onload = function(){
    var tb = document.querySelector('.tab1');
    var tb2 = document.querySelector('.tab2');
    var tb3 = document.querySelector('.tab3');
    var tb4 = document.querySelector('.tab4');
    var date = new Date();
    //console.log(date);
    //console.log('Date.now()', Date.now(), 'Date.UTC()', Date.UTC());
    var start = 1970;
    var end = date.getFullYear() - 1970;
    
    for( var i = 0; i <= end; i++ ){
        date.setFullYear(start + i, 11, 31);
        
        switch (date.getDay()) {
            case 0:
                tb.innerHTML += "<tr><td><h4 class='text-danger text-center'>Year : " + date.getFullYear() + 
                                " Su " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            case 1:
                tb2.innerHTML += "<tr><td><h4 class='text-success text-center'>Year : " + date.getFullYear() + 
                                " Mo " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            case 2:
                tb3.innerHTML += "<tr><td><h4 class='text-success text-center'>Year : " + date.getFullYear() + 
                                " Tu " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            case 3:
                tb4.innerHTML += "<tr><td><h4 class='text-success text-center'>Year : " + date.getFullYear() + 
                                " We " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            case 4:
                tb.innerHTML += "<tr><td><h4 class='text-success text-center'>Year : " + date.getFullYear() + 
                                " Th " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            case 5:
                tb2.innerHTML += "<tr><td><h4 class='text-success text-center'>Year : " + date.getFullYear() + 
                                " Fr " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            case 6:
                tb3.innerHTML += "<tr><td><h4 class='text-danger text-center'>Year : " + date.getFullYear() + 
                                " Sa " + "December: " + date.getDate() + "</h4></td></tr>";
                break;
            default:
                console.log("date couldn't founded");
        }
    }
};