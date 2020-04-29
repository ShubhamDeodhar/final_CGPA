function calculate()
    {
        
        var credit=document.getElementsByClassName("Credit");
        var grade=document.getElementsByClassName("Grade");
        var sum1=0;
        var sum2=0;
        var selected=document.getElementsByClassName('item');
        var num=selected.length;

        console.log("number of item inputs: ")
        console.log(num);


        for(var i=0;i<num;i++){
            if(credit[i].value==0 || credit[i].value==""){
                continue;
                
            }
            var c=parseInt(credit[i].value);

            sum1=sum1+c;
            switch(grade[i].value){
    
                case "O": 
                var m=10;
                 break;
                case "A+" : 
                 var m=9
                 break;
    
                 case "A": 
                 var m=8;
                 break;
                 case "B+":
                 var m=7.5;
                 break;
                 case "B": 
                 var m=7;
                 break;
                 case "C+": 
                 var m=6.5;
                 break;
                 case "C": 
                  var m=6;
                  break;
                 case "D+": 
                 var m=5.5; 
                 break;
                 case "D": 
                 var m=5;
                 break;
                 case "F": 
                    var f=1;
                    var m=0;
                 break;
                 default:
                    var m=10;
            }
            
            sum2=sum2+(m*(c));
        }
        if(f==1){
            var head=document.getElementById("mc");
            head.style.backgroundColor= "#2c3e50";
            var body=document.getElementById("mb");
            body.style.backgroundColor="#95a5a6";
            var res=document.getElementById("CGPA");
            res.innerHTML="You failed";
            return;
        }
        var result=sum2/sum1;
        console.log(result);
        var res=document.getElementById("CGPA");
        
        res.innerHTML=result;
        if(result>=8.5){
            var head=document.getElementById("mc");
            head.style.backgroundColor= "#00b894";
            var body=document.getElementById("mb");
            body.style.backgroundColor="#55efc4";
        }
        if(result<8.5 && result>=7){
            var head=document.getElementById("mc");
            head.style.backgroundColor= "#f39c12";
            var body=document.getElementById("mb");
            body.style.backgroundColor="#f1c40f";
        }
        if(result<7 && result>=5){
            var head=document.getElementById("mc");
            head.style.backgroundColor= "#ff3838";
            var body=document.getElementById("mb");
            body.style.backgroundColor="#ff5e57";
        }
        
    }