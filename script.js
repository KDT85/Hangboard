function hang(){
    var interval = 500;
    var hangtime = 7;
    var resttime = 3;

    let ht = setInterval(() => {
                document.getElementById("timer").innerHTML = `Hang! ${hangtime}`;
                hangtime--;
                if (hangtime < 0 ){
        
                    clearInterval(ht);
                    let rt = setInterval(() => {
                        document.getElementById("timer").innerHTML = `Rest! ${resttime}`;
                        resttime--;
                        if (resttime < 0){
                            clearInterval(rt)
                        }
                        
                    }, interval);
        }


        
    }, interval);
}