// a type is dependent on another type

type a1 = number ; 
type a3 = undefined ; 
type a4 = number ; 

type a2 = a1 extends string ? string : null ; 

type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never ;


type Sheikh = {
    wife1 : string , 
    wife2 : string ,
}

// check korbe Sheikh er wife1 property ase kina ..Thakle true return korbe na thakle false return korbe

type A = keyof Sheikh ; 

type checkProperty<T , K> = K extends keyof Sheikh ? true : false ; 

//object kokono string ke extend korte pare na



type checkWife1 = checkProperty<Sheikh , 'wife3'> ; 

// matha kharap example

type Bandhubi = 'Shafina' | 'Khanom' | 'Koly'  ;

type BandhubiName = string ; 

type RemoveBandhubi<T , BandhubiName> = T extends BandhubiName ? 'never' : T ;

type CurrentBandhubi = RemoveBandhubi<Bandhubi , 'Koly'>