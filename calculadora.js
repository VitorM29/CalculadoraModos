let form = document.querySelector(".form");
let calc = "";
let result = "";
const lim = 10;
let htmlResult = document.querySelector(".htmlResult");
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    let submitter = event.submitter.name
    
    
    if(submitter == "="){
        result = eval(calc);
        if (String(result).length > lim) {
            result = String(result).slice(0, lim);
        }
        htmlResult.innerHTML = `${result}`
    } else if(submitter == "C"){
        calc = " ";
        htmlResult.innerHTML = `${calc}`
    } else if (submitter == "del"){
        calc = calc.slice(0, -1);
        htmlResult.innerHTML = `${calc}`
    } else if (submitter == "%") {
        calc = calc + "/100*";
        htmlResult.innerHTML = calc;
    } else if (calc.length > lim) {
        alert("EXCEDEU O LIMITE DE CARACTERES")
    } else {
        calc = calc + submitter;
        htmlResult.innerHTML = `${calc}`
    } 
})

//backgrounds
let calcont = document.querySelector(".calcCont")
let resul = document.querySelector(".htmlResult")

//botões
let op = document.querySelectorAll(".op")
let clear = document.querySelector(".clear")
let del = document.querySelector(".del")
let igual = document.querySelector(".igual")
let num = document.querySelectorAll(".num")

let modoClaro = ["#d9d9d9ff", "#838383ff", "#8e9688ff", "#54794aff"]
let btnmodoClaro = document.querySelector(".modoClaro")

btnmodoClaro.addEventListener("click", ()=>{

    for(let i = 0; i < num.length; i++){
        num[i].style.background = modoClaro[1]
    }

    for(let j = 0; j < op.length; j++){
        op[j].style.background = modoClaro[2]
    }
    
    resul.style.background = "#767676ff"
    clear.style.background = modoClaro[3]
    del.style.background = modoClaro[3]
    igual.style.background = modoClaro[3]
    calcont.style.background = modoClaro[0]
})


let modoEscuro = ["#000000ff", "#808080", "#494949", " #568a09"]
let btnmodoEscuro = document.querySelector(".modoEscuro")

btnmodoEscuro.addEventListener("click", ()=>{
    for(let i = 0; i < num.length; i++){
        num[i].style.background = modoEscuro[2]
    }

    for(let j = 0; j < op.length; j++){
        op[j].style.background = modoEscuro[1]
    }
    
    resul.style.background = modoEscuro[1]
    clear.style.background = modoEscuro[3]
    del.style.background = modoEscuro[3]
    igual.style.background = modoEscuro[3]
    calcont.style.background = modoEscuro[0]
})