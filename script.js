
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


                    
                }
            }
        }
    }
    
    function go(){
        var sets = 2; 
        for(var i = 0; i < sets; i++){
            hang();
            //sets--;
            if (sets == i){
                console.log("Finish");
                //return;
            }
        }
        return;
    }
