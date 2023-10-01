type User = {
    name  : string , 
    age : number
} // using in case of primitive type

interface IUser{
    name : string , 
    age : number
} // using in case of object

// const userWithTypeAlias  : User= {
//     name : "Hasan Sayeed" ,
//     age : 24
// }

// const userWithInterface : IUser={
//     name  : 'Mahamudul Hasan' , 
//     age : 23,
// }


// to extend an interface

interface IExtendedUser extends IUser{
    role : string ;
}

type ExtendedUser = IUser &{
    role : string
}

const User : IExtendedUser = {
    name : 'Hasan Rahad' , 
    age : 28 ,
    role : 'Surgeon'  
}

type rollNumber = number ; 

//interface is only for objects
// array , function , object are object type in js


type addNumberType = (num1 : number , num2 : number) => number ;

interface IAddNumbers{
    (num1 : number , num2 : number) : number
}

const addNumber : IAddNumbers = (num1 , num2 ) => {
    return num1 + num2 ; 
}

type rollNumbersType = number[] ;

interface IRollNumbers{
    [index : number] : number
}

const rollNumbers : rollNumbersType = [1 , 4 ,5]// [index]

// index signature