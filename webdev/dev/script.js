function f1(){
    let div = document.querySelector('#one');
   //div.innerHTML = div.innerHTML + ' Hello',
    div.innerHTML += ' Hello';
}

f1();

function f2(){
    let div = document.querySelector('#two');
   //div.innerHTML = div.innerHTML + ' Hello',
    div.innerHTML += ' Hello';
}
f2();


//------------------------------

let c = document.querySelector('#three');
function f3(){
c.innerHTML += ' Hello';

}
f3();

c = document.querySelector('#four');

f3();