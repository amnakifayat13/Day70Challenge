interface Person2{
    name: string;
    age: number;
    greet(message: string): void;
}

const amna: Person2 ={
    name: "Amna",
    age: 30,
    greet(message:string){
        console.log(`${this.name} says: ${message}`);
        
    }
}
amna.greet("Hello TypeScript!")