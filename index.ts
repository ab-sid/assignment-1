//1
function formatString(input:string, toUpper?: boolean):string{
    
     if(toUpper === false){
        return input.toLowerCase()
    }
    else{
    return input.toUpperCase()
    }

}

//2
 function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result = items.filter(item=>item.rating >= 4)
    return result;
 }

 //3
 function concatenateArrays<T>(...arrays: T[][]):T[]{
    return arrays.reduce((a,b)=>a.concat(b))
 }


 //4
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

//5
 function processValue(value: string | number): number{
    if(typeof(value) === 'string'){
        return value.length;
    }
    else{
        return value * 2;
    }
 }


 //6
 interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]){
    if(products.length === 0){
        return null
    }
    else{
       return products.reduce((max,current)=>current.price > max.price? current:max)
    }
    
}

//7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
    if(day === Day.Friday || day === Day.Saturday){
        return "Weekend";
    }
    else{
        return "Weekday"
    }
}

//8

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject();
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}





 

 
