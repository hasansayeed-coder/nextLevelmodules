const numbersS = [1 , 2, 3] ; 
const arrayOfStrings = numbersS.map(number => number.toString()) ;

// console.log(arrayOfStrings) ;

type Volume = {
    height : number ; 
    width : number ,    
    depth : number
}

const obj = {
    name  : 'Sayeed'
}

const charac : Volume = {
    height : 4 , 
    width : 5 ,
    depth : 2 ,
}

type AreaNumberString = {
    height : string ,
    width : string
}

const rectangleArea : Volume = {
    height : 10 , 
    width : 12 ,
    depth : 1
}

rectangleArea.width = 20

type Area = {
    [key in keyof Volume] : string
}