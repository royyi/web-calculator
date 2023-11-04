// Roy Yi Meiqing Wang
// Web calculator application
// 11/4/23

var res = document.getElementById("res");

// append character for each operator or operand, using event delegation
const parent = document.getElementById("btns");

parent.addEventListener("click", event => {
    if(event.target.classList.contains("operand") ||
       event.target.classList.contains("operator")) {
        res.innerHTML += event.target.innerHTML;
    }
});

// event listeners for clear and equal buttons
var clear_btn = document.getElementById("clr_btn");
clear_btn.addEventListener("click", function() {
    res.innerHTML = "";
})

var eval_btn = document.getElementById("eql_btn");
eval_btn.addEventListener("click", function() {
    res.innerHTML = Math.floor(eval(res.innerHTML));
})


// old way: add event listener for each element of class
// var values = ["btn0", "btn1", "btnSum","btnSub", "btnMul", "btnDiv"];
// for (let i in values) {
//     document.getElementById(values[i]).addEventListener("click", append_char);
// }
