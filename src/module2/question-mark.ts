//ternary operator

const age : number = 17 ; 

// if(age >=  18)console.log('YES') ; 

// else {
//     console.log("NO") ;
// }

const msg : string = age >= 18 ? "YES" : "NO" ;

// console.log(msg);


// Nullish Coalesnace Operator works only for null and undefined
// Null and Undefined

const isAuthenticatedUser = "" ; 
const userName = isAuthenticatedUser ?? "Guest" ;
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest" ;
// console.log( {userName}, '' , {userName2}) ;

type Manush = {
    name  : string, 
    age : number, 
address : {
        city :  string, 
        road :  string,
        home ?:  string,
    }
}

const manush : Manush = {
    name : 'sayeed' ,
    age : 23 ,
    address : {
        city : 'Chittagong' ,
        road : 'Kamalpara' , 
        
    }
}

const home = manush?.address?.home ?? "No home" ;


console.log(home) ;  // default value to no home