
function hang(hangtime, resttime){
    
    var interval = 500;

    var hangtime = 7;
    var resttime = 3;
    
    while(hangtime > 0){
        console.log(`Hang - ${hangtime}`);
        hangtime --;
        
        if (hangtime == 0){
            while(resttime > 0){
                console.log(`Rest - ${resttime}`);
                resttime --;
                go()
            }
        }
    }
}

function go(){
    var sets = 4; 
    while(sets > 0){
        hang();
        sets--;
        if (sets < 0){
            console.log("Finish");
            //return;
        }
    }
    return;
}