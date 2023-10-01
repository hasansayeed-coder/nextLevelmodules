

type PersonType = {
    name  : string , 
    age : number , 
    address : string
}


type newType = 'name' | 'age' | 'address' ;


type newTypeUsingKeyOf = keyof PersonType ;

const a : newType = 'age' ; 
const b : newTypeUsingKeyOf = 'name'

function getProperty<X , Y extends keyof X>(obj : X , key : Y){
    return obj[key] ; 
}

const property = getProperty({name : "Mr. X" , age : 100} , "age")