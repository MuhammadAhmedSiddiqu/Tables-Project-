// let ahmed = +prompt("enter num");

// for(ahmed=0; i<10; i++){
//     console.log(ahmed)

    // }
  let div=document.getElementById("tabl");
  let inp=document.getElementById("int");
function table(){
  for(i=0;i<=10;i++){
    div.innerHTML+=`<div>${inp.value} x ${i} = ${inp.value*i} </div>`
  }
}
