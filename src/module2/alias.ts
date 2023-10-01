type crushType = {
    name  : string , 
    age  ?: number , 
    profession : string
}


const crush1 : crushType= {
    name  : "Koly" , 
    age : 24 , 
    profession : "Pharmacist"
}


const crush2 : crushType= {
    name  : "Shafina" , 
    profession : "Pharmacist"
}

type crushMarriedType = boolean ; 

const isCrushMarried :  crushMarriedType = false;

// type operationType = (x : number , y : number) => number
// const calculate = (num1 : number , num2 : number , operation : operationType )=> {
//     return operation(num1 , num2) ;
// }

// console.log(calculate(10 , 20 , (x , y) => x + y)) ;

// console.log(calculate(5 , 6 , (x , y) => x * y))

