


const countVlaue=document.querySelector("#counter");

const increment =  () => {
    // getting the value from UI
    // parse int se hmne string ko number me convert  kr lia 
     let value = parseInt(countVlaue.innerText);

     // update the cvalue
     value=value+1;

    //  set the value onto UI
     countVlaue.innerText=value;
}


const decrement = () =>{
        // getting the value from UI
    // parse int se hmne string ko number me convert  kr lia 
    let value = parseInt(countVlaue.innerText);

    // update the cvalue
    value=value-1;
    
   //  set the value onto UI
    countVlaue.innerText=value;
}