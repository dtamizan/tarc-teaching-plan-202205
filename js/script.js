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

    function getDateString(dateVar){
        //let tmpDate = Date.parse(dateVar);
        let tmpDate = new Date(dateVar);
        //const date = new Date(dateVar);
        const d = tmpDate.getDate();
        const mNum = tmpDate.getMonth();
        const monthName = [
            "Jan","Feb","Mar","Apr",
            "May","June","July","Aug",
            "Sept","Oct", "Nov","Dec"
            ];
        const m = monthName[mNum];

        return (d + " " + m);
        //return (d + " " + m);
        //return tmpDate;
        //console.log(d + " " + m);
    }

    function highlightWeek(){
        const w1 = new Date(2022,6,3);
        const w2 = new Date(w1); w2.setDate(w2.getDate() + 7);
        const w3 = new Date(w2); w3.setDate(w3.getDate() + 7);
        const w4 = new Date(w3); w4.setDate(w4.getDate() + 7);
        const w5 = new Date(w4); w5.setDate(w5.getDate() + 7);
        const w6 = new Date(w5); w6.setDate(w6.getDate() + 7);
        const w7 = new Date(w6); w7.setDate(w7.getDate() + 7);
        const w8 = new Date(w7); w8.setDate(w8.getDate() + 7);
        const w9 = new Date(w8); w9.setDate(w9.getDate() + 7);
        const w10 = new Date(w9); w10.setDate(w10.getDate() + 7);
        const w11 = new Date(w10); w11.setDate(w11.getDate() + 7);
        const w12 = new Date(w11); w12.setDate(w12.getDate() + 7);
        const w13 = new Date(w12); w13.setDate(w13.getDate() + 7);
        const w14 = new Date(w13); w14.setDate(w14.getDate() + 7);
        const w15 = new Date(w14); w15.setDate(w14.getDate() + 7);

        let today = new Date();

        const weekArray = ["0",
        w1, w2, w3, w4, w5, w6, w7,
        w8, w9, w10, w11, w12, w13, w14, w15
        ];
    
    
        for(let i=0; i<weekArray.length; i++){
            let weekStart = weekArray[i];
            // console.log(i + " - " + weekStart);
            console.log(i + " ... " + getDateString(today.toString()) + " <= " + getDateString(weekStart.toString()) + " ||| " + (today<=weekStart));
            if (today <= weekStart){
                let currentWeek = (i-1);
                $(".week-highlight").css("grid-column", currentWeek + 2);
                console.log("FOUND! week " + (i-1));
                return;
            }

            // if (i == 14){
            //     if (today >= weekStart){
            //         $(".week-highlight").css("grid-column", (i+2));        
            //     }
            // }

            
            // if ((i == 14) && today >= weekStart){
            //     //more than 14w, hide weekHighlight
            //     $(".week-highlight").css("grid-column", i);
            //     //$(".week-highlight").css("display", "none");
            //     return;
            // }
        }

        
    }
    
    

});