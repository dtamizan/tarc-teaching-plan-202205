$(function(){

    highlightWeek();
    hoverHighlight(60*1000);


    function hoverHighlight(maxDuration){

        //var bgX = $(".week-highlight").css("backgroundPositionX");
        //var bgXDelta = "";
        //bgXDelta = "+=50px";

        var bgXDelta = "-"+(50*50)+"px";
       
        $(".week-highlight").animate({"backgroundPositionX":bgXDelta},maxDuration,"linear",function(){
            //setInterval(hoverHighlight(direction),980);
            //$(".week-highlight").css("backgroundPositionX",'0px');
        });
    }

    function highlightWeek(){
        var w1 = new Date(2022,6,3);
        var w2 = new Date(w1); w2.setDate(w2.getDate() + 7);
        var w3 = new Date(w2); w3.setDate(w3.getDate() + 7);
        var w4 = new Date(w3); w4.setDate(w4.getDate() + 7);
        var w5 = new Date(w4); w5.setDate(w5.getDate() + 7);
        var w6 = new Date(w5); w6.setDate(w6.getDate() + 7);
        var w7 = new Date(w6); w7.setDate(w7.getDate() + 7);
        var w8 = new Date(w7); w8.setDate(w8.getDate() + 7);
        var w9 = new Date(w8); w9.setDate(w9.getDate() + 7);
        var w10 = new Date(w9); w10.setDate(w10.getDate() + 7);
        var w11 = new Date(w10); w11.setDate(w11.getDate() + 7);
        var w12 = new Date(w11); w12.setDate(w12.getDate() + 7);
        var w13 = new Date(w12); w13.setDate(w13.getDate() + 7);
        var w14 = new Date(w13); w14.setDate(w14.getDate() + 7);
    
        var today = new Date();
    
        var weekArray = ["0",
        w1, w2, w3, w4, w5, w6, w7,
        w8, w9, w10, w11, w12, w13, w14
        ];
    
        for(var i=0; i<weekArray.length; i++){
            var weekStart = weekArray[i];
            if (today <= weekStart){
    
                var currentWeek = (i-1);
                $(".week-highlight").css("grid-column", currentWeek + 2);
                console.log("FOUND! week " + (i-1));
                return;
            }
        }

        
    }
    
    

});