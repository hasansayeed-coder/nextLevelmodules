const searchName = (value : string | null) => {
    if(value == null){
        console.log('There is nothing to search')
    }

    else{
        console.log('searching')
    }
}

// searchName(null)

const getSpeed = (value : unknown) => {
    if(typeof(value)== "number"){
        console.log((value *1000)/3600) ;
    }

    if(typeof(value) == 'string') {
        let val = value.split(' ')[0] ;
        let speed = parseInt(val) ;
        console.log((speed * 1000)/3600);
    }
}

// getSpeed(10) ; 
// getSpeed('10 km per hour')

function throwError(error : string) : never{

    throw new Error(error) ;

}

throwError('Error occured')