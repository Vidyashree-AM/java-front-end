let numbers=[];
numbers=[1,2,1,3,2];
if(numbers[0] == numbers[2])
{
    console.log("correct");
}
else{
    console.log("wrong");
}

if(numbers[0]==numbers[2] && numbers[1]==numbers[numbers.length-1])
{
    console.log("All correct");
}
else
{
    console.log("All wrong");
}