var res = document.getElementById("res");

function append_char(e) {
    var btn = e.target;
    var char = document.getElementById(btn.id).innerHTML;
    res.innerHTML = res.innerHTML + char;
}

// append character for each operator or operand
var values = ["btn0", "btn1", "btnSum","btnSub", "btnMul", "btnDiv"];
for (let i in values) {
    document.getElementById(values[i]).addEventListener("click", append_char);
}

var clear_btn = document.getElementById("btnClr");
clear_btn.addEventListener("click", function() {
    res.innerHTML = "";
})

var eval_btn = document.getElementById("btnEql");
eval_btn.addEventListener("click", function() {
    var text = res.innerHTML;
    
    // get position of operator
    var i = text.search(/[\+\-\*\/]/)
    var exp = parseInt(text.slice(0, i), 2) + text[i] + parseInt(text.slice(i+1), 2);
    
    // set result of evaluated expression
    res.innerHTML = Math.floor(eval(exp)).toString(2);
})
