function appendNumber(num){
    document.getElementById("result").value += num
}

function appendOpearator(op){
    document.getElementById("result").value += op
}

function calculateResult(){
    let expression = document.getElementById("result").value
    document.getElementById("result").value = eval(expression)
}

function clearInput(){
    document.getElementById("result").value = " "
}