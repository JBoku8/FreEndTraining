function change(){
    var day = document.getElementById('day').value;
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var city = document.getElementById('city').value;
    var about = document.getElementById('about').value;
    
    var img = document.getElementById('img').src = "http://cdn.someoddpilot.com/wp-content/uploads/2014/03/SOP_FrontEndDev.gif";
    
    document.getElementById('daybirth').innerHTML = "<h4>Your Birthday is </h4>" + "<b>"+ day + "</b> <hr>";
    document.getElementById('yearbirth').innerHTML ="<h4>Your BirthYear is </h4>" + "<b>"+ year +"</b> <hr>";
    document.getElementById('monthbirth').innerHTML ="<h4>Your BirthMonth is </h4>" + "<b>" +month +"</b> <hr>";
    document.getElementById('citylive').innerHTML = "<h4> You Live in </h4>" + "<b>" +city +"</b> <hr>";
    document.getElementById('aboutstore').innerHTML = "<h4>Your About Me </h4>" + "<p><b>"+about +"</b></p> <hr>";
  
}
