import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'front';
}






// import { Vehicle } from '../../../interfaces/vehicle.interface';
// import { Dictionary } from 'lodash';
//1 class

// class Car implements Vehicle {
//   make: boolean;
//   model: string;
//   year: number;

//   constructor(make: boolean, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// }

//2 generic func

// function identity<T>(arg: T) : T {
//   return arg;
// }

// let make = identity(true);
// let model = identity('BMW');
// let year = identity([1997, 1998, 1999]);

// console.log(`This car is ${model} and it is ${year[0]} year`);



//3 generic func

// function makePair<T, K>(arg1: T, arg2: K): [T, K] {
//   return [arg1, arg2];
// }

// let pair1 = makePair<number, boolean>(4, false);
// let pair2 = makePair('piglet', 3);

// console.log(pair1 , pair2);


//4 generic func

// const logArrayLength = <T>(arg: T[]): number => {
//   return arg.length;
// }

// let myArray = logArrayLength([3, 4, 5]);

// console.log(myArray);



//5 generic func

// const reverseArray = <T>(arg: T[]) => {
//   return arg.reverse();
// }

// let myNewArr = reverseArray([1, 2, 3]);
// console.log(myNewArr);


//6 customized decorator

// function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value;

//   descriptor.value = function(a: number, b: number) {
//     console.log(`Calling func ${key} with params${a} & ${b}`);

//     return original.apply(this, a, b)
//   }

//   return descriptor;
// }

// export class Numberz {
//   @logMethod
//   //original
//   addNums (a: number, b: number) {
//     return a + b;
//   }

// }

// const newNumz = new Numberz()
// newNumz.addNums(2, 3);




//7 enum (enum props should be written in uppercase)

// enum Color {
//   RED = 'Red',
//   WHITE = 'White',
//   GREEN = 'Green'
// }

// class Shape {
//   name: string;
//   color: Color;

//   constructor(name: string, color: Color) {
//     this.name = name;
//     this.color = color;
//   }

//   displayDetails() {
//     console.log(`Shape: ${this.name}, Color: ${this.color}`);
//   }
// }

// const myShape = new Shape('Triangle', Color.GREEN);
// myShape.displayDetails();


//enum with iteration

// enum Direction {
//   NORTH = 'North',
//   SOUTH = 'South',
//   EAST = 'East',
//   WEST = 'West',
// }

// console.log('Iterating through enum values:');
// for (const dir in Direction) {
//   if (isNaN(Number(dir))) {
//     console.log(dir);
//   }
// }

//enum mapping (obj mapping)

// enum ShapeType {
//   CIRCLE = 'Circle',
//   SQUARE = 'Square',
//   TRIANGLE = 'Triangle',
// }

// const shapeDescriptions: Record<ShapeType, string> = {
//   [ShapeType.CIRCLE]: 'A circle is a round shape.',
//   [ShapeType.SQUARE]: 'A square has four equal sides.',
//   [ShapeType.TRIANGLE]: 'A triangle has three sides.',
// };

// console.log('Shape Descriptions:');
// console.log(shapeDescriptions[ShapeType.CIRCLE]);
// console.log(shapeDescriptions[ShapeType.SQUARE]);
// console.log(shapeDescriptions[ShapeType.TRIANGLE]);



//enum

// enum Ocean {
//   FISH = 'Salmon',
//   MERMAID = 'Ariel',
//   CRAB = 'Sebastian'
// }

// const descriptionz: Record<Ocean, string> = {
//   [Ocean.FISH]: 'His name is Flunder.',
//   [Ocean.MERMAID]: 'The main character.',
//   [Ocean.CRAB]: 'My fav Character.'
// };

// console.log(descriptionz[Ocean.FISH, Ocean.MERMAID, Ocean.CRAB]);

// partials

// type AntX = {
//   name: string;
//   age: number;
//   eats: boolean;
// }

// type PartialAnt = Partial<AntX>;

// function updateAnt(ant: AntX, updates: Partial<AntX>): AntX {
//   return { ...ant, ...updates};
// }

// const initialAnt: AntX = {
//   name: 'Morty',
//   age: 3,
//   eats: true,
// };

// const updatesAnt: AntX = updateAnt(initialAnt, { eats: false});

// const newAnt: PartialAnt = { name: 'Lila' };

//required

// type AntY = {
//   name: string;
//   age: number;
//   eats: boolean;
// };

// type RequiredAnt = Required<AntY>;

// const requiredAnt: RequiredAnt = { name: 'Morty', age: 3, eats: true };
// Here, all properties (name, age, eats) are required, even though age and eats were originally optional.



//record

// type Ant = {
//   name: string;
//   age?: number;
//   eats?: boolean;
// };


//name prop is mandatory

// const antCollection: Record<string, Ant> = {
//   ant1: { name: 'Morty', age: 3, eats: true },
//   ant2: { name: 'Lila', age: 2 },
//   ant3: { name: 'Tom', eats: false },
//   ant4: { name: 'Sam' },
// };

// console.log(antCollection.ant1); // Output: { name: 'Morty', age: 3, eats: true }
// console.log(antCollection.ant2); // Output: { name: 'Lila', age: 2 }
// console.log(antCollection.ant3); // Output: { name: 'Tom', eats: false }
// console.log(antCollection.ant4); // Output: { name: 'Sam' }



//record

// type Room = {
//   id: string[];
// }

// const messages: Record<string, Room> = {
//   person1: { id: ['get out', 'fick fick']},
//   person2: { id: ['go sleep', 'go eat']}
// }
// console.log(messages);

//record
// type Person = {
//   id: number;
//   name?: string;
//   age?: number;
// }

// const convertToDictionary(arr: Person[]): Record<number, Person> => {
//   const dictionary: Record<number,Person> = arr.reduce((acc, curr) => {
//     acc[curr.id] = curr;
//     return acc;
//   }, {} as Record<number, Person>);

//   return dictionary;
// }

// const persons: Person[] = [
//     { id: 1, name: 'Forest', age: 31 },
//     { id: 2, name: 'Lisa', age: 21},
//     { id: 3, name: 'Vaz', age: 32}
// ];

// const dictionaryPeople: Record<number, Person> = convertToDictionary(persons);



//record 

// function countOccurrences<T>(arr: T[]): Record<string, number> {
//   return arr.reduce((occurrences: Record<string, number>, item: T) => {
//     const stringifiedItem = String(item);

//     if (occurrences[stringifiedItem]) {
//       occurrences[stringifiedItem]++;
//     } else {
//       occurrences[stringifiedItem] = 1;
//     }

//     return occurrences;
//   }, {});
// }

// interface User {
//   id: number;
//   name: string;
// }

// const users: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 1, name: 'Alice' }
// ];

// const userOccurrences: Record<string, number> = countOccurrences(users);
// console.log('User Occurrences:', userOccurrences);


//record


// type AllowedNames = {
//   name: string;
// }

// function filterObjectPropertiez(arr: AllowedNames[]): Record<string, AllowedNames> {
//   const filteredNames(arr: AllowedNames[]) {
//     arr.filter()
//   }
// }

// function filterObjectProperties(
//   obj: Record<string, any>,
//   allowedProperties: string[]
// ): Record<string, any> {
//   const filteredObj: Record<string, any> = {};

//   allowedProperties.forEach(property => {
//     if (obj.hasOwnProperty(property)) {
//       filteredObj[property] = obj[property];
//     }
//   });

//   return filteredObj;
// }




// function mergeObjs(objs: Record<string, any>[], allowedProperties?: string[]): Record<string, any> {
//   const mergeObj: Record< string, any> = {};

//   objs.forEach(obj => {
//     for(const prop in obj) {
//       if(!allowedProperties || allowedProperties.includes(prop)) {
//         mergeObj[prop] = obj[prop];
//       }
//     }
//   });

//   return mergeObj;
// }


// const person1 = {
//   id: 1,
//   name: 'Alice',
//   age: 30
// };

// const person2 = {
//   id: 2,
//   name: 'Brandon',
//   age: 25
// };

// const person3 = {
//   id: 3,
//   name: 'Lucil',
//   age: 15
// };

// const merged = mergeObjs([person1, person2, person3]);

// const allowedProperties = ['id', 'name'];

// const mergeWithAllowedProps = mergeObjs([person1, person2, person3], allowedProperties);
// const filteredPerson = filterObjectProperties(person, allowedProperties);
// console.log('Filtered Person:', filteredPerson);



// function transformObject(inputObj: Record<string, any>, mapper: (value: any) => any): Record<string, any> {
//   const transformedObj: Record<string, any> = {};

//   for (const key in inputObj) {
//     if(Object.prototype.hasOwnProperty.call(inputObj, key)) {
//       const value = inputObj[key];
//       transformedObj[key] = mapper(value);
//     }
//   }
//   return transformedObj;
// }

// const inputObj = {
//   name: 'Alice',
//   age: 30,
//   id: 1,
// };

// Mapping function to double numeric values
// function doubleNumericValues(value: any): any {
//   if (typeof value === 'number') {
//     return value * 2;
//   }
//   return value;
// }

// Transform the input object using the mapping function
// const transformedObj = transformObject(inputObj, doubleNumericValues);
// console.log('Transformed Object:', transformedObj);




// interface Frog {
//   id: number,
//   name: string,
//   food: string
// };

// function updateFrog(frog: Frog, updateData: Partial<Frog>) {
//   return{ ...frog, ...updateData };
// }

// const initialFrog: Frog = {
//   id: 0,
//   name: 'Bud',
//   food: 'insects'
// };

// const updatedData: Partial<Frog> = {
//   name: 'Mr Bud',
//   food: 'ants'
// };

// const updatedFrog = updateFrog(initialFrog, updatedData);






//easy Record
//<string(means key) and any(or like here is number) means value; like name(string): string(any)
// const availableFruits: Record<string, number> = {
//   apple: 10,
//   //apple(key - string) and 10(value - number)
//   banna: 15,
//   orange: 20,
// };

// availableFruits['orange'] += 5;
// console.log('Updated Oranges', availableFruits['orange']);

//when accessing properties of an object using an index signature 
// (such as Record<string, number>), TypeScript requires using square brackets 
// (['property']) to access the property dynamically.





//record

// interface Pug {
//   id: number,
//   name: string,
//   kilos: number,
//   loveFood: boolean,
// };

// const pugOne = {
//   id: 1,
//   name: 'Yugi',
//   kilos: 11,
//   loveFood: true
// }

// const pugTwo = {
//   id: 2,
//   name: 'Rosie',
//   kilos: 8,
//   loveFood: false
// }

// const pugThree = {
//   id: 3,
//   name: 'Bingo',
//   kilos: 5,
//   loveFood: true
// }

// const foodLovers: Record<string, any> = {
//   pugThree,
//   pugTwo,
//   pugOne
// }

// const foodLovers2: Record<number, Pug> = {
//   1: pugOne,
//   2: pugTwo,
//   3: pugThree
// };



// const foodLovers3: Record<string, Pug> = {
//   [pugOne.name]: pugOne,
//   [pugTwo.name]: pugTwo,
//   [pugThree.name]: pugThree,
// };

// const dict: Dictionary<Pug> = {
//   [pugOne.name]: pugOne,
//   [pugTwo.name]: pugTwo,
//   [pugThree.name]: pugThree,
// };

// dict[1].name




// console.log(`${foodLovers['pugOne'].name} loves food? ${foodLovers['pugOne'].loveFood}`)





// function findFoodLovers(name) {
//   if()
// }




//all at once 1 

// interface Pig {
//   id: number,
//   name: string,
//   age: number,
// };

// class PigManager {
//   pigs: Record<string, Pig> = {

//   };

//   addPig(pig: Pig) {
    
//     this.pigs[pig.name] = pig;
//   }


//   getPigByName(name: string) {
//     return this.pigs[name];
//   }

//   updatePig(name: string, update: Partial<Pig>) {
//     // let pigToUpdate = this.getPigByName(name);

//     // if(pigToUpdate) {
//     //   Object.assign(pigToUpdate, update);

//     //   // pigToUpdate = { ...pigToUpdate, ...update }

//     //   // this.pigs[name] = pigToUpdate;
//     // }

    
//     this.pigs[name] = { ...this.pigs[name], ...update };
//   }
// }

// const manager = new PigManager();

// manager.addPig({
//   name: 'john',
//   age: 12,
//   id: 1
// })

// console.log(`Johns age: ${manager.getPigByName('john').age}`)


// manager.updatePig('john', {
//   age: 13
// })

// console.log(`Johns age: ${manager.getPigByName('john').age}`)



// //all at once 2

// interface ProductInfo {
//   productId: number,
//   name: string,
//   price: number,
//   description: string,
// };

// class ProductManager {
//   products: Record<string, ProductInfo> = {};

//   addProduct(product: ProductInfo) {
//     this.products[product.name] = product;
//   };

//   getProduct(name: string) {
//     return this.products[name];
//   };

//   updateProduct(name: string,update: Partial<ProductInfo>) {
//     this.products[name] = {...this.products[name], ...update };
//   };

// }

// const managerr = new ProductManager();

// managerr.addProduct({
//   productId: 0,
//   name: 'Olive',
//   price: 100,
//   description: 'Vaz doesnt like it',
// });

// managerr.updateProduct('Olive', {
//   description: 'Vaz loves it'
// });



//NEW 5 INTERMEDIATE TASKS

// 1 enum

// enum Animal {
//   DOG = 'Dog',
//   CAT = 'Cat',
//   BIRD = 'Bird'
// }

// function describeAnimal(animal: Animal) {
//   let sound: string;

//   switch (animal) {
//     case Animal.DOG:
//     sound = 'Woof';

//     case Animal.CAT:
//     sound = 'Meow';

//     case Animal.BIRD:
//     sound = 'Chirp';
//     break;

//    default:
//    sound: 'Unlnown';
//   }

// return sound;
// }

// console.log(describeAnimal(Animal.BIRD));
// console.log(describeAnimal(Animal.CAT));
// console.log(describeAnimal(Animal.DOG));


//2 generics


// function wrapInArray<T>(arr: T): T[] {
//   return [arr];
// }

// function compose<A, B, C>(fn1: (arg: A) => B, fn2: (arg: B) => C): (arg: A) => C {
//   return (input: A) => fn2(fn1(input));
// }

// function addTwo(x: number): number {
//   return x + 2;
// }

// function multipleByThree(y: number): number {
//   return y * 3;
// }

// const composedFunc = compose(addTwo, multipleByThree);

// const result = composedFunc(3);
// console.log(result)


//3 Type Assertions and Interfaces

// interface Vehiclee {
//   type: string,
//   wheels: number,
// };

// function createVehicle(type: string, wheels: number): Vehiclee {
//   return {
//     type,
//     wheels
//   };
// }

// const vehiclee: Vehiclee = createVehicle('Car', 4);
// console.log(vehiclee); 



//4 Conditional Types and keyof

// function getProperty(r: Object, k: string) {
//   return r[k];
// }

// const person = {
//   name: 'foo'
// }

// console.log(getProperty(person, 'nameo'))


// 5 Intersection and Omitting Properties

// interface Girl {
//   name: string;
//   age: number;
//   address: string;
// }

// interface Sister extends Girl{
//   sisId: number;
// }

// type PartialGal = Partial<Girl>;

// function createSister(sis: Sister, gal: PartialGal): Sister {
//   const { address, ...rest } = gal;
//   return { ...sis, ...rest};
// }

// const initialSis: Sister = {
//   name: 'Fren',
//   age: 17,
//   address: 'Moose',
//   sisId: 1,
// };

// const updateGal: Partial<Girl> = {
//   name: 'Bone',
//   age: 21,
// };

// // const newGal: PartialGal = { name: 'Gal'};
// const updateSis = createSister(initialSis, updateGal);
// console.log(updateSis);




//EASY

//1
// function sumFirst(a, b) {
//   return a + b;
// }

// console.log(sumFirst(2, 3));

// //2
// const sumSecond = (a, b) => a + b;

// console.log(sumSecond(2, 4));

// //3
// class Mouse {

//   name: string;
//   sound: string;

//   constructor(name: string, sound: string) {
//     this.name = name;
//     this.sound = sound;
//    }

//    hearSound(): any {
//     console.log(`Mouse ${this.name} makes '${this.sound}' sound.`)
//    }

//    static createMouse(name: string, sound: string) {
//     return new Mouse(name, sound);
//    }
// }

// const newMouse = new Mouse('Mimi', 'SHHHHH');
// console.log(newMouse.hearSound());