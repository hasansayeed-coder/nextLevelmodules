

function kgToGram(param : number | string | undefined) : (string | number | undefined ){

    if(typeof(param) == "string"){
        const value = parseFloat(param) * 1000;
        return `The Converted result is ${value} gram` ;
    }

    if(typeof(param) == "number"){
        return (param * 1000) ;
    }
}

const result = kgToGram("20") as string ; 

// console.log(result) ; 

const result1 = kgToGram(30) ;
// console.log(result1) ;

type CustomErrorType = {
    message : string
}

try{

}

catch(err ){
    console.log((err as CustomErrorType).message)
}


// <number>
