// alert('ciao');
const listElement = document.querySelector('.container');
console.log(listElement);
for (let x = 1; x <= 100; x++ ) {
    let result;
    let classColor;
    if (x % 15 === 0){
        console.log("FizzBuzz")
        result = "FizzBuzz";
        classColor = "bg-danger";
    } else if (x % 5 === 0) {
        console.log("Buzz");
        result = "Buzz";
        classColor = "bg-warning";
    } else if (x % 3 === 0) {
        console.log("Fizz");
        result = "Fizz";
        classColor = "bg-success";
    } else {
    console.log(x);
    result = x;
    classColor = "bg-primary";
    }
    listElement.innerHTML += `<div class="ms_box ${classColor}">${result}</div>`
}