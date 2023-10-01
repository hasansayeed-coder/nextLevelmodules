type noobDeveloper = {
    name : string 
}

type juniorDeveloper = noobDeveloper &  {
    
    expertise : string , 
    experience : number
}

type nextLevelDeveloper = noobDeveloper | juniorDeveloper &{
    leadershipExperience : number,
    level : string,
}

const newDeveloper : noobDeveloper | juniorDeveloper = {
    name : 'Hasan Sayeed' , 
    expertise : 'JS' ,
    experience : 6
}

const developer : nextLevelDeveloper= {
    name : 'Hasan Sayeed' , 
    expertise : 'JS , TS' , 
    experience : 2 ,
    leadershipExperience : 4 ,
    level :'midlevel'

}