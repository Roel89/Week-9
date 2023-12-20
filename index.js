let array1 = [1, 2, 3, 4, 5]

function sum(a,b) {
    return a + b
}
    function sumArray(arr){
        return arr.reduce((prev, curr => + curr, 0))
    
}