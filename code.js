function f1() { 
    console.log('work 34');
    return 2;
}
console.log(2 + f1());


let a = 5;
let b = 5;
function f2() { 
    return a + b;
}
 let c1 = 22+f2();
let c2 = 6 * f2()
console.log(c1, c2);

function f3(x, y) {
    return x * y;
}
console.log(f3(3, 10))

document.querySelector('.f-2').onclick = function () {
    console.log('@@@@@@@@@')
}