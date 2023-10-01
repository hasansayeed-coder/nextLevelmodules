function add(num1 : number , num2  : number) : number{
    return num1 + num2 ; 
}

const addArrow = (num1 : number , num2 : number) :number => {
    return num1 + num2 ; 
}

const arr= [ 1, 4,5] ; 

const newArray = arr.map((ele  : number)=> ele * ele) ;

const person : {
    name  : string , 
    balance : number , 
    addBalance(money : number) : string
} = {
    name  : "hasan" , 
    balance : 10 , 

    addBalance(money : number) : string{
        return `Now my total money is ${this.balance+money}`;
    }
}

// default parameter

function sub(num1 : number , num2 : number = 10) : number{
    return num1 - num2 ; 
}
sub(10 ) ;

// spread operator

const friends = ['econ' , 'habib' , 'rahim']

const newFriends = ['nowshad' , 'sakib']

friends.push(...newFriends) ;

// console.log(friends)

//rest operator

// function greetFriends(friend1 : string , friend2 : string , friend3 : string) : void{
//        console.log(`
//        Hi ${friend1} 
//        Hi ${friend2}
//        Hi ${friend3}`)
// }

function greetFriends(...friends : string[]) : void{
    friends.forEach(friend => console.log(friend))
}

// greetFriends("hasan" , "sayeed", "talukder")

// array and object destructuring

const [bestfriend] = friends;

console.log(bestfriend)

const myBestFriend = {
    name  : "Econ" , 
    age : 24 , 
    charac : "bolod"
}

const {charac : specialCharacter} = myBestFriend ; 
console.log(specialCharacter) ; 

