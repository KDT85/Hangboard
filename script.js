function hang(){
    document.getElementById("timer").innerHTML = "Hang!";
    setTimeout(function(){document.getElementById("timer").innerHTML = "Rest!"; }, 3000);

}