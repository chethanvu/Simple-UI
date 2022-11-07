const validnumber= function(number){
    
    if(parseInt(number) < 0){
        document.querySelector("#message").innerHTML="Enter positive number"
        
    } else if(parseInt(number)){
        
        let numberOne = parseInt(number) + 2;
        let numberTwo = parseInt(numberOne) + 2;
        let numberThree = parseInt(numberTwo) + 2;
        
        document.querySelector("#message").innerHTML=`${numberOne}, ${numberTwo}, ${numberThree}`
    } else {
        document.querySelector("#message").innerHTML=""
    }
   
}