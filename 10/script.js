function divisibleByThree(arr){
    return arr.filter(function(number){
        return number % 3 === 0;
    });
}
//generell funktion:
function divisibleBy(arr, divider){
    return arr.filter(function(number){
        return number % divider === 0;
    });
}