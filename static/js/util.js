// uitl.js
function a(){
    console.log('执行了函数a')
}
function b(){
    console.log('执行了函数a')
}
var c = '蔡海';
console.log(this)
export default {
    a,b
}
export {a,b,c}