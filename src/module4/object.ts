class Animal{
    // public name : string  ;
    // public species : string ; 
    // public sound : string ; 

    constructor(public name  : string , public species : string ,  public sound : string){
        this.name = name ; 
        this.sound = sound ; 
        this.species = species ;
    }

    // this property does not work on anoynimous function

    public makeSound(){
        console.log(`The ${this.name} says ${this.sound} which is from ${this.species}` ) ; 
    }

}

const dog =  new Animal("Boo" , 'pitbull' , 'ghew ghew') ; 

// dog.makeSound() ;

const cat = new Animal("Chopper" , "Persian" , "Meaw Meaw") ; 

console.log(cat.name);  
cat.makeSound() ;