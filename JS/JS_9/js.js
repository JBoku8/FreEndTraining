$(document).ready(function(){
    var date = new Date();
    var end = date.getFullYear();
    var yearStart = 1980;
    var select  = document.getElementById('select_year');
    var tbody   = document.querySelector('.table_body');
    var months  = document.getElementById('months');
    var monthsArr = ['Jenuary', 'February','March', 'April','May','June',
                    'July','August','September','October','November','December'];
    
    
    for(var i = 0; (yearStart+i) < end; i++){
        var option = document.createElement('option');
            option.value = yearStart+i;
            option.innerHTML = yearStart+i;
            select.appendChild(option);
    }
    
    for(var i = 0; i < 12; i++){
        var option = document.createElement('option');
            option.value = monthsArr[i];
            option.innerHTML = monthsArr[i];
            months.appendChild(option);
    }
    
    var year, month, tr;
    
        $('#select_year').change(function(){
            $(' #select_year option:selected ').each(function(){
                tr = document.createElement('tr');
                tr.setAttribute('class', 'myrow');
                var td = document.createElement('td');
                year = $(this).text();
                td.innerHTML = year;
                tr.appendChild(td);
                tbody.appendChild(tr);
            });
        });
        
        $('#months').change(function() {
            $(' #months option:selected').each(function() {
                if( tr.childElementCount < 2 && tr.childElementCount > 0){
                    var td = document.createElement('td');
                    month = $(this).text();
                    td.innerHTML = month;
                    tr.appendChild(td);
                } else {
                    alert("At First Please Select Year! ");
                }
            });
        });
        
    $(document).on('click', 'tr', function() {
          $(this).hide(300);
    });
});