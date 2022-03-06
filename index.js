const operate = document.getElementById("operate");
const numbers = document.getElementById("numbers");
const display = document.getElementById("display");

let nums1 = "";
let nums2 = "";
let isOperateClicked=false;
let isNumberClicked = false;
let action;

let numberListener = function (event){
    if(!event.target.type){
        return;
    }
    isNumberClicked = true;
   if(event.target.innerText=== "="){
       const res = operation(+nums1, +nums2,action)
       changDisplay(res)
   }
   else if(event.target.innerText === "C"){
       reset();
   }
   else {
       changDisplay(event.target.innerText,true);
   }

   if (isOperateClicked === true){
       nums2 +=event.target.innerText;

   }
   else {
       nums1 += event.target.innerText;
   }
}

let operateListener = function (event){
    if(!event.target.type){
        return;
    }
    changDisplay(event.target.innerText,true)
    isOperateClicked = true;
    if(nums1 !=="" && nums2 !=="") {
        const res = operation(+nums1, +nums2,action)
        changDisplay(res+event.target.innerText)
        nums1 = res;
        nums2 = "";
    }
    action=event.target.innerText;

}

let reset = function (){
    changDisplay("0");
}
let changDisplay = function (value,add){
    if(nums1 === "" || !add){
        display.value=value;
    }
    else {
        display.value += value;
    }
}

numbers.addEventListener("click",numberListener);
operate.addEventListener("click", operateListener);

let operation = function (a,b,symbol){
    let result;
    if(symbol==="+"){
        result = a+b;
    }
    if(symbol==="-"){
        result = a-b;
    }
    if(symbol==="*"){
        result = a*b;
    }
    if(symbol==="/"){
        result = a/b;
    }
    return result;
}
