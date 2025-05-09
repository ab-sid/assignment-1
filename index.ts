function formatString(input:string, toUpper?: boolean):string{
    
     if(toUpper === false){
        return input.toLowerCase()
    }
    else{
    return input.toUpperCase()
    }

}
 function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result = items.filter(item=>item.rating >= 4)
    return result;
 }

 function concatenateArrays<T>(...arrays: T[][]):T[]{
    return arrays.reduce((a,b)=>a.concat(b))
 }

 class Vehicle{
    private make:string;
    private year:number;

    constructor(make:string,year:number){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
 }

 class Car extends Vehicle{
    private model:string
     constructor(make:string,year:number,model:string){
        super(make,year)
        this.model = model
     }

     getModel(){
        console.log(`Model: ${this.model}`);
     }
 }

 

 
