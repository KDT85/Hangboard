//function to count down the work time and then the rest time
    function work(worktime, resttime){
    
        //these variables will eventually be user adjustable 
        var interval = 500;
    
        var worktime = 7;
        var resttime = 3;
        
        //while there is still worktime left 
        while(worktime > 0){
                //display work time 
                console.log(`Work - ${worktime}`);
                //and decrement it
                worktime --;
                
                // when work time runs out
                if (worktime == 0){

                    //start the rest loop
                    while(resttime > 0){
                        //display remaining resttime
                        console.log(`Rest - ${resttime}`);
                        //and decrement it
                        resttime --;
                    }
                }

        }
    }
    
    //function that starts it all
    function go(){
        //and keeps track of sets, sets variable will also be user adjustable
        var sets = 4; 
        for(var i = 0; i < sets; i++){
            work();
        }
            //and displays finish when all the timers are complete
            console.log("Finish");
            return;

    }