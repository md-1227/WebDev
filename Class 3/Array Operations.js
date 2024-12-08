// Array Creation
let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

//Average Function
function calculateAverage(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum/arr.length;
}

console.log(calculateAverage(numbers));

//Push
numbers.push(6);
console.log(numbers);
//Shift
let removed = numbers.shift();
console.log(numbers);
console.log(removed);

//ForEach
numbers.forEach(function(number, index){
    let snumber = number*number;
    console.log(`Index ${index}: ${number}, ${snumber}`);
});