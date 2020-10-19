function makeRandomArray(){
    return [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
    ]
}
function makeRandomGeneralArray(count){
    return new Array(count).forEach(function(element){
        return Math.random();
    });
}
console.log(makeRandomGeneralArray(4))