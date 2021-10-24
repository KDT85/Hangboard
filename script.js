function hang(){
    var interval = 500;
    var hangtime = 7;
    var resttime = 3;

    let ht = setInterval(() => {
                document.getElementById("timer").innerHTML = `Hang! ${hangtime}`;
                hangtime--;
                if (hangtime < 0 ){
        
                    clearInterval(ht);
        }


        
    }, interval);
}