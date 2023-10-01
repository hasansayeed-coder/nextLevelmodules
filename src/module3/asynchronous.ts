import fetch from 'node-fetch';


type dataType = {
    name : string ;
}

// mocking => kono url ba database theke amra data antesi na... mara nijera data ready krtesi.Etake data mocking bole
const makePromise = () : Promise<string> => {
    return new Promise<string>((resolve , reject) => {

        const data : string = 'data is fetched' ; 

        if(data) {
            resolve(data) ; 
        }

        else {
            reject('Failed to fetch data') ;
        }
    })
}

const makePromiseBoolean = () : Promise<boolean> => {
    return new Promise<boolean>((resolve , reject) => {

        const data : boolean = true ; 

        if(data) {
            resolve(data) ; 
        }

        else {
            reject('Failed to fetch data') ;
        }
    })
}

const getPromiseData = async() : Promise<string> => {
    const data = await makePromise();
    return data ;
}


const getPromiseDataBoolean = async() : Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data ;
}

// Promise<string> Promise<number> Promise<boolean>


const makePromiseObject = () : Promise<dataType>=> {

    return new Promise<dataType>((resolve , reject) => {
        const data: dataType = {
            name : "Hasan" 
        }

        if(data)resolve(data) ; 
        else{
            reject(data) ; 
        }
    })

}

const getPromiseDataObject = async () : Promise<dataType> => {
    const data = await makePromiseObject() ; 
    return data ;
}


// Json placeholder

interface IToDo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const getToDo = async () : Promise<IToDo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ; 

    if(!response.ok){
        throw new Error("Failed to fetch data")
    }
    
    const data = await response.json() as IToDo ; 
    return data ;
} ; 

const getToDoData = async () : Promise<void> => {
    const data = await getToDo() ; 
    console.log(data) ;
}

getToDoData() ;