let display = "";
let btn = document.querySelectorAll('.button');
console.log(btn);
Array.from(btn).forEach(button =>{
  button.addEventListener('click',function(e){
    if(e.target.innerHTML == '='){
      display = eval(display);
   document.querySelector('#display').value = display;
    }
    else if(e.target.innerHTML == 'C'){
      display = "";
      document.querySelector('#display').value = display;
    }
   else{ 
    console.log(e)
   display = display + e.target.innerHTML;
   document.querySelector('#display').value = display;
   }
  })
});
