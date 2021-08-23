//Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1,4);
console.log(modifiedFood);


//Function #2: Array Slice
const modifyFoods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifyFoods.splice(2,0,"noodles","icecream");
console.log(modifyFoods);

//functio #3:Filter
const numberArray = [12,324,213,4,2,3,45,4234];
const iseven = numberArray.filter((item => item % 2 == 0 ));
console.log(iseven);

//Function #4: Reject
let nonPrimeArr = numberArray.filter(nonPrime = (number) =>
{
    for(let i = 2;i<=Math.sqrt(number);i++)
    {
        if(number%i == 0)
        {
            return number;
        }
    }
})
console.log(nonPrimeArr);
//Function #5: Lambda
let evenArr2 = numberArray.filter((number)=> number%2 === 0)
console.log(evenArr2);

//Function #6: Map
var myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers= myArray.map((item => item*2));
console.log(findSquareOfNumbers);

//Function #7: Reduce
var myArray= [2, 3, 5, 10];
var multiply = myArray.reduce((accumaltor,currentvalue) => accumaltor*currentvalue,1);
console.log(multiply);

