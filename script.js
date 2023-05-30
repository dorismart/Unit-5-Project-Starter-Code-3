let button=document.querySelector (".result-button");
let message=document.querySelector (".result");

button.onclick=function(){
  let answer1=document.querySelector(".answer1").value;
  let answer2=document.querySelector(".answer2").value;

  if (answer1<= 3 && answer2==="love"){
    message.innerHTML="Hufflepuff";
  }else if (answer1>3 && answer2 === "love"){
    message .innerHTML="Ravenclaw";
  
  }
  
}
 