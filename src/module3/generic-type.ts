type GenericArray<T> = Array<T>

const idNumbers : GenericArray<number> = [44 , 12 , 4] ; 

const departmentalID : GenericArray<string> = ['44' , '12' , '4'] ;

type NameRollType = {
    name  : string , 
    Roll : number
}

const userNameAndRollNumbers : GenericArray<NameRollType>  = [
    {name  : 'Fardin Alam Alif' , Roll : 2025001} , 
    {name  : 'Fazilater Jahan' , Roll : 2025002}
]

type GenericTuple<X , Y> = [X , Y]; 

const relation : GenericTuple<string , string> = ['Hasan Sayeed' , 'Shafina Koly'] ;

type GenericSalary<X , Y> =[X , Y] ;

const details : GenericSalary<string , number>= [
        'Hasan Sayeed' , 150000
]

type GenericSalaryandMarried<X , Y> = [X , Y]

// type nameObjectType = {
//     name  : string  ,
//     salary : number ,
//     profession : string
// }

interface nameObjectInterface{
    name : string , 
    salary : number , 
    profession :string
}



const relationWithsalary : GenericSalaryandMarried<nameObjectInterface , string> = [
    {
        name : "Hasan Sayeed" , 
        salary : 150000 , 
        profession : "Works at google warshaw"
    } , 
    
    "Shafina Koly"
]

// generic Interface

interface Crush<T , U>{
    name : string , 
    husband : T , 
    Wife : U
}

// const crush100 : Crush<true> = {
//     name : "Shafina Koly" , 
//     husband  : true
// }

// type husbandDetails = {

//     name : string , salary : number , address : string

// }

interface IHusbandDetails{
    name : string , salary : number , address : string
}

interface IWifeDetailswithHusband{
    name : string , age : number , address: string
}

interface IWifeDetails{
    name : string
}

const crush101 : Crush<IHusbandDetails , IWifeDetailswithHusband> = {
    name : "Shafina Koly" , 
    husband  : {
        name : "Hasan Sayeed" , 
        salary : 150000 , 
        address : "Chittagong"
    },  
    Wife : {
        name : "Shafina Koly", 
        age : 24 , 
        address : "Canada"
    }
}

