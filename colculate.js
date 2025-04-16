let input = document.querySelector(".form-control");


function display(num){
   input.value = input.value + num;
   
   
}

function colculate(){
    input.value = eval(input.value);
}

function del(){
    input.value = input.value.slice(0, -1);
}