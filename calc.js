function btn(num) {
    document.getElementById("input").value += num
}

function ans(){
    let x = document.getElementById("input").value
    let y = eval(x)
    document.getElementById("input").value = y
}

function clr(){
    document.getElementById("input").value = ""
}