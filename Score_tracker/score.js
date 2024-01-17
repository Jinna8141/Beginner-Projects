let first = document.querySelector("#first")
let second = document.querySelector("#second")
let firstbt = document.querySelector("#firstbt")
let secondbt = document.querySelector("#secondbt")
let reset = document.querySelector("#reset")
let select = document.querySelector("#select")


let i = 0;
let j = 0;
let max = parseInt(select.value);

firstbt.addEventListener("click", function (){
    if(i<max && j!= max){
    i++;
    console.log(i);
    first.innerHTML = i;};
    if (i == max ){
        first.style.color = "green"
        second.style.color = "red"
        firstbt.disabled = true;
        secondbt.disabled = true;
    };
})

secondbt.addEventListener("click", function (){
    if(j<max && i!= max){
    j++;
    console.log(j);
    second.innerHTML = j;};
    if (j == max ){
        second.style.color = "green"
        first.style.color = "red"
        firstbt.disabled = true;
        secondbt.disabled = true;
    }
})

reset.addEventListener("click", function (){
    i=0;
    j=0;
    first.innerHTML = i;
    second.innerHTML = j;
    max = parseInt(select.value);
    second.style.color = "black"
        first.style.color = "black"
        firstbt.disabled = false;
        secondbt.disabled = false;
    
})

select.addEventListener("change", function(){
        i=0;
        j=0;
        first.innerHTML = i;
        second.innerHTML = j;
        max = parseInt(select.value);
        second.style.color = "black"
            first.style.color = "black"
        
    })