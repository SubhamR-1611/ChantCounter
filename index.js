let chant1=document.getElementById("count");
console.log(chant1);
let c=0;
function increment(){
    c++;
    chant1.innerText=c;
}
function decrement(){
    c--;
    chant1.innerText=c;
}
let countel=document.getElementById("t5");
function save(){
    let c1=" "+c+" - ";
    countel.innerText+=c1
}
let resetel=document.getElementById("count");
let resetl1=document.getElementById("t5");
function reset(){
    c=0;
    resetel.innerText=c;
    resetl1.innerText="Saved Counts : ";
}
