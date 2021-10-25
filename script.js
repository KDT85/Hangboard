
    var setno = 3;
    var interval = 200;
    var hangtime = 3;
    var resttime = 3;
    function operate(){
        setInterval(() => {
           if(setno > 0){
               hang()
               if(hangtime < 0){
                    rest()
                    if(resttime < 0){
                        sets()
                        console.log(setno)
                    }
               }
           } 
        }, interval);
    }



function hang(){
    document.getElementById("timer").innerHTML = `Hang! ${hangtime}`;
    hangtime--;
}

function rest(){
    document.getElementById("timer").innerHTML = `Rest! ${resttime}`;
    resttime--;
}    

function sets(){
    setno--;

}
        
        


