
type Information = {
    name  : string , 
    age : number , 
    salary : number
}

type Mandatory = {
    name  : string , 
    // age : number , 
    salary : number
}

const myInformation : Information = {
    name : "Hasan" ,
    age : 1000 , 
    salary : 10000 

}

const addMeInMyCrush = <T extends Mandatory>(myInfo : T) => {
    const crush10001 ="Shafina Koly" ; 
    return {...myInfo , crush10001}

}

const conclusion = addMeInMyCrush({name : "Hasan" , age : 1000 , salary : 10000})