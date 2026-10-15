//generic function with  return value

function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(100));
console.log(identity<string>("hello"));


// generic with array
 function printItems<T>(items: T[]): void {
    items.forEach(item => {
        console.log(item);
    });
}

printItems<number>([1,23,45,60]);
printItems<string>(["hello", "world", "typescript"]);



function disArray<T>(items:T[]):void{
    return (items.forEach(item=>{
        console.log(item);
    }))
}
disArray<number>([1,2,3,4]);


function displayFruits<T>(fruit:T[]):void{
    return(fruit.forEach(fruit=>{
        console.log(fruit);

    }))
}
displayFruits<string>(["apple","banana","mango"]);


