let g = document.querySelector(".form-control");


function display(num){
    g.value=g.value+num;
}

function colculate(){
    g.value=eval(g.value);
}

function del(){
    g.value=g.value.slice(0, -1);
}

function clear(){
    g.value= " ";
}
