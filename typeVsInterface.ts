interface name_value{
    manufacturer : string;
    modelName: string;
}

interface cars_value extends name_value{
    color : string;
    modelNumber? : number;

} 

const cars_information : cars_value ={

    manufacturer : "Toyota",
    modelName : "LandCruiser",
    color: "White",

}
const cars_information1 : cars_value ={

    manufacturer : "Honda",
    modelName : "Civic",
    color: "Black",
    modelNumber : 2016

}
console.log(cars_information);
console.log(cars_information1);
// Type Alias: Cannot be extended or implemented directly. 

