///////////////////////////////////////////////////////
// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
///////////////////////////////////////////////////////
// solucion:
///////////////////////////////////////////////////////
// const inventory= [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}];
// function getTotal(){
//   return inventory.reduce((acc,elem)=> acc+elem.price*elem.quantity,0)
// } 
// console.log(getTotal()); 
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
// 02 - Function
// const inventory=['🥑','🍌','🥭', '🍌'];
// countBanana(inventory:['🥑','🍌','🥭', '🍌']});
//
///////////////////////////////////////////////////////
// Solucion
/////////////////////////////////////////////////////////
// const inventory = ['🥑','🍌','🥭', '🍌'];
// function countBanana(){
//   return inventory.reduce((acc,e) => e==='🍌' ? ++acc : acc, 0)
// }; 
// console.log(countBanana()); 
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
// 03- Function 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
//
///////////////////////////////////////////////////////
// Solucion:
///////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filterEvenNumbers(numbers){
//   return numbers.filter(e => e%2===0 )
// }; 
// console.log(filterEvenNumbers(numbers)); 
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 04 - function
// const numbers = [1, 2, 3, 4, 5];
// console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
//
///////////////////////////////////////////////////////
// Solucion
///////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// function squareNumbers(numbers){
//   return numbers.map(e => e**2 )
// }; console.log(squareNumbers(numbers)); 
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 05 - function
// const numbers = [1, 2, 3, 4, 5];
// console.log(findMax(numbers)); // Output: 5
//
///////////////////////////////////////////////////////
// Solucion
///////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// function findMax(numbers){
//   return numbers.reduce((total,item)=> item>total ? item : total ,0)
// }; 
// console.log(findMax(numbers));
/////////////////////////////////////////////////////// 

/////////////////////////////////////////////////////// 
// 06 - function
// const people = [{name: "Juan", age: 25 },{ name: "Carla", age: 30 },{ name: "Lucia", age: 35 },{ name: "El Chengue", age: 49 }];
// console.log(calculateAverageAge(people)); // Output: 34.75
//
///////////////////////////////////////////////////////
// Solucion
/////////////////////////////////////////////////////// 
// const people = [{name: "Juan", age: 25},{name: "Carla", age: 30},{name: "Lucia", age: 35},{name: "El Chengue", age: 49}]; 
// const calculateAverageAge = (people) => people.reduce((acc,item)=> acc + item.age, 0) / people.length;
// console.log(calculateAverageAge(people)); 
/////////////////////////////////////////////////////// 


/////////////////////////////////////////////////////// 
// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons
//
// const persons = [
//  {name: 'Paula', hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']},
//  {name: 'Martin', hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']},
//  {name: 'Juan', hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']},
//  {name: 'Veronica', hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
// }];
//
// combinedHobbies(persons);
//
// Expected output:
// [ 'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️' ]
//
/////////////////////////////////////////////////////// 
// Solucion:
/////////////////////////////////////////////////////// 
// 
// const persons = [
//   {name: 'Paula', hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']},
//   {name: 'Martin', hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']},
//   {name: 'Juan', hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']},
//   {name: 'Veronica', hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️'] 
// }];
//
// function combinedHobbies(persons){
//   return persons.reduce((acc,item)=>{
//     acc.push(...item.hobbies);
//     return acc  
//   }, [])
// }; 
// console.log(combinedHobbies(persons));
/////////////////////////////////////////////////////// 


////////////////////////////////////////////////////////////////////////////////////////////////
// 08 - function printChemicalInfo(chemicals)
// printChemicalInfo(chemicals)
//
// const chemicals = [
//   {
//     CompoundId: 'CHEM001',
//     Name: 'Aspirin',
//     Formula: 'C9H8O4',
//     Description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//     MolecularWeight: '180.16 g/mol',
//     MeltingPoint: '135°C',
//     BoilingPoint: '140°C',
//     Solubility: 'Slightly soluble in water'
//   },
//   {
//     CompoundId: 'CHEM002',
//     Name: 'Caffeine',
//     Formula: 'C8H10N4O2',
//     Description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//     MolecularWeight: '194.19 g/mol',
//     MeltingPoint: '238°C',
//     BoilingPoint: '178°C',
//     Solubility: 'Freely soluble in water'
//   },
//   {
//     CompoundId: 'CHEM003',
//     Name: 'Ethanol',
//     Formula: 'C2H6O',
//     Description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//     MolecularWeight: '46.07 g/mol',
//     MeltingPoint: '-114.1°C',
//     BoilingPoint: '78.37°C',
//     Solubility: 'Miscible with water'
//   }
// ];
// 
// Expected output:
//
// +-------------------------------------------------------+
// | Compound ID: CHEM001                                  |
// | Name: Aspirin                                         |
// | Formula: C9H8O4                                       |
// | Description: Aspirin is a common medication used to   |
// | reduce pain and inflammation.                         |
// | Molecular Weight: 180.16 g/mol                        |
// | Melting Point: 135°C                                  |
// | Boiling Point: 140°C                                  |
// | Solubility: Slightly soluble in water                 |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                  |
// | Name: Caffeine                                        |
// | Formula: C8H10N4O2                                    |
// | Description: Caffeine is a stimulant found in coffee, |
// | tea, and various energy drinks.                       |
// | Molecular Weight: 194.19 g/mol                        |
// | Melting Point: 238°C                                  |
// | Boiling Point: 178°C                                  |
// | Solubility: Freely soluble in water                   |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                  |
// | Name: Ethanol                                         |
// | Formula: C2H6O                                        |
// | Description: Ethanol, also known as alcohol, is       |
// | commonly used as a solvent and in alcoholic beverages |
// | Molecular Weight: 46.07 g/mol                         |
// | Melting Point: -114.1°C                               |
// | Boiling Point: 78.37°C                                |
// | Solubility: Miscible with water                       |
// +-------------------------------------------------------+
//
/////////////////////////////////////////////////////// 
// Solucion 1: Funcion simplificada (Tabla. +Da la misma info. +Poco codigo. -No es identica presentacion):
/////////////////////////////////////////////////////// 
//  
// const chemicals = [
//   {
//     CompoundId: 'CHEM001',
//     Name: 'Aspirin',
//     Formula: 'C9H8O4',
//     Description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//     MolecularWeight: '180.16 g/mol',
//     MeltingPoint: '135°C',
//     BoilingPoint: '140°C',
//     Solubility: 'Slightly soluble in water'
//   },
//   {
//     CompoundId: 'CHEM002',
//     Name: 'Caffeine',
//     Formula: 'C8H10N4O2',
//     Description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//     MolecularWeight: '194.19 g/mol',
//     MeltingPoint: '238°C',
//     BoilingPoint: '178°C',
//     Solubility: 'Freely soluble in water'
//   },
//   {
//     CompoundId: 'CHEM003',
//     Name: 'Ethanol',
//     Formula: 'C2H6O',
//     Description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//     MolecularWeight: '46.07 g/mol',
//     MeltingPoint: '-114.1°C',
//     BoilingPoint: '78.37°C',
//     Solubility: 'Miscible with water'
//   }
// ];
// 
//
// function printChemicalInfo(chemicals){
//   console.table(chemicals)
// };
// printChemicalInfo(chemicals);
//
///////////////////Solucion 2: Funcion con una presentacion mas similar a lo pedido):
//
// const chemicals = [
//   {
//     CompoundId: 'CHEM001',
//     Name: 'Aspirin',
//     Formula: 'C9H8O4',
//     Description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//     MolecularWeight: '180.16 g/mol',
//     MeltingPoint: '135°C',
//     BoilingPoint: '140°C',
//     Solubility: 'Slightly soluble in water'
//   },
//   {
//     CompoundId: 'CHEM002',
//     Name: 'Caffeine',
//     Formula: 'C8H10N4O2',
//     Description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//     MolecularWeight: '194.19 g/mol',
//     MeltingPoint: '238°C',
//     BoilingPoint: '178°C',
//     Solubility: 'Freely soluble in water'
//   },
//   {
//     CompoundId: 'CHEM003',
//     Name: 'Ethanol',
//     Formula: 'C2H6O',
//     Description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//     MolecularWeight: '46.07 g/mol',
//     MeltingPoint: '-114.1°C',
//     BoilingPoint: '78.37°C',
//     Solubility: 'Miscible with water'
//   }
// ];
// function midText(chemical, boxWidth, boxContent){      
//   let index=0;    
//   process.stdout.write(`+${'-'.repeat(boxWidth-2)}+\n| `);
// 
//   for (let key in chemical) {
//     const strChemical = `${key}: '${chemical[key]}'`;
//     const vChem = strChemical.split(' ');
//     let spaceRemaining;
//     let acc=0;
//     let indexes = Object.keys(chemical);
//         
//     vChem.forEach( e => {
//       if (acc + e.length > boxContent-3){ //si (caracteres en el renglon + nueva palabra) caben aun...
//         //quito sangria y bordes para calcular espacios a imprimir antes del limite de cada renglon 
//         spaceRemaining = boxWidth - 3 - acc; 
//         process.stdout.write(`${' '.repeat(spaceRemaining)}|\n| `);
//         acc=0
//       };    
//       process.stdout.write(String(`${e} `));  
//       acc+=e.length+1; //se suma el caracter space y la palabra siguiente.   
//     });
//     
//     index++;
//     spaceRemaining = boxWidth - 3 - acc;     
// 
//     if(index<indexes.length)
//       process.stdout.write(`${' '.repeat(spaceRemaining)}|\n| `)
//     else
//       process.stdout.write(`${' '.repeat(spaceRemaining)}|\n`);
//   }
//   console.log(`+${'-'.repeat(boxWidth-2)}+`);
// };
// 
// function printChemicalInfo(chemicals) {
//   const boxWidth = 57; //Largo exacto del recuadro que se brinda en el ejemplo. Incluye 2 chars de bordes + 2 de padding.
//   const boxContent = 53; //Longitud exacto del texto por cada renglon en la caja.    
//   chemicals.forEach((chemical) => {    
//     midText(chemical, boxWidth, boxContent);
//   });  
// }
// printChemicalInfo(chemicals); 
/////////////////////////////////////////////////////// 


/////////////////////////////////////////////////////// 
// 09 - function getUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
//
// Remove duplicated elements from the guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']
//
/////////////////////////////////////////////////////// 
// Solucion:
///////////////////////////////////////////////////////  
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
// function getUniqueGuestList(guestList){
//   return guestList.filter((item, index) => guestList.indexOf(item) === index)
// };
// console.log(getUniqueGuestList(guestList)); 
/////////////////////////////////////////////////////// 

///////////////////////////////////////////////////////
// 10 - function showUserProfiles(user)
// User data
//
// const user1 = {
//   id: 1,
//   name: 'Carol Smith',
//   profile: {
//     social: {
//       twitter: 'carol.smith',
//       facebook: 'carol.smith77'
//     }
//   }
// };
//
// const user2 = {
//   id: 2,
//   name: 'Jane Smith',
//   profile: {
//     email: 'jane.smith@example.com'
//   }
// };
// showUserProfile(user1); // Expected output: 'carol.smith, carol.smith77'
// showUserProfile(user2); // Expected output: 'jane.smith@example.com'
//
/////////////////////////////////////////////////////// 
// Solucion:
/////////////////////////////////////////////////////// 
// const user1 = {
//   id: 1,
//   name: 'Carol Smith',
//   profile: {
//     social: {
//       twitter: 'carol.smith',
//       facebook: 'carol.smith77'
//     }
//   }
// };
// 
// const user2 = {
//   id: 2,
//   name: 'Jane Smith',
//   profile: {
//     email: 'jane.smith@example.com'
//   }
// };
// 
// function showUserProfiles(user){
// 
//   const twitter  = user.profile?.social?.twitter;
//   const facebook = user.profile?.social?.facebook;
//   const email    = user.profile?.email;
//   
//   if (twitter && facebook) {
//     console.log(`'${twitter}, ${facebook}'`)
//   } else if (email) {
//     console.log(`'${email}'`);
//   } else {
//     console.log('No se encuentran las propiedades solicitadas')
//   }
// };
// 
// showUserProfiles(user1);
// showUserProfiles(user2);
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output
// const leaderBoard = [
//   { player: 'John', score: 80 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Julio', score: 50 },
//   { player: 'Bob', score: 80 },
//   { player: 'Bobby', score: 11 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Eric', score: 99 },
//   { player: 'Alice', score: 100 },
//   { player: 'Alfred', score: 30 }
// ];
// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]
//
///////////////////////////////////////////////////////
// Solucion:
///////////////////////////////////////////////////////
// const leaderBoard = [
//   { player: 'John', score: 80 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Julio', score: 50 },
//   { player: 'Bob', score: 80 },
//   { player: 'Bobby', score: 11 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Eric', score: 99 },
//   { player: 'Alice', score: 100 },
//   { player: 'Alfred', score: 30 }
// ];
//
// function sortLeaderBoardByScoreDesc(leaderBoard){
//   console.log( leaderBoard.sort((a,b) => b.score - a.score) )
// };
// sortLeaderBoardByScoreDesc(leaderBoard)
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 12 - function getTopFiveWorstPlayers(leaderBoard)
//
// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]
//
// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.
//
///////////////////////////////////////////////////////
// Solucion:
///////////////////////////////////////////////////////
// const leaderBoard = [
//   { player: 'John', score: 80 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Julio', score: 50 },
//   { player: 'Bob', score: 80 },
//   { player: 'Bobby', score: 11 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Eric', score: 99 },
//   { player: 'Alice', score: 100 },
//   { player: 'Alfred', score: 30 }
// ];
// 
// function getTopFiveWorstPlayers(leaderBoard){
//   const aux = [];
//   leaderBoard.sort((a,b) => a.score - b.score);
// 
//   for (let i=0; i<=4; i++){
//     aux.push(leaderBoard[i])
//   }
//   console.log(aux);
// }
// 
// getTopFiveWorstPlayers(leaderBoard); 
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 13 - function safeCopy()
// const companyHierarchy = {
//     name: 'Company',
//     departments: [
//       {
//         name: 'Engineering',
//         head: 'Alice',
//         subDepartments: [
//           {
//             name: 'Backend',
//             head: 'Bob',
//             employees: ['Charlie', 'David']
//           },
//           {
//             name: 'Frontend',
//             head: 'Eve',
//             employees: ['Frank', 'Grace']
//           }
//         ]
//       },
//       {
//         name: 'Sales',
//         head: 'Henry',
//         employees: ['Isaac', 'Jane']
//       }
//     ]
//   };
//
// Deep copy function
//
//   function safeCopy (obj) {
//      ToDo (complete the function here...)
//   }
//
//   // Example usage
//   const copiedHierarchy = safeCopy(companyHierarchy);
//
//   // Modify the copied hierarchy
//   copiedHierarchy.departments.push({
//     name: 'Marketing',
//     head: 'Karen',
//     employees: ['Liam', 'Mia']
//   });
//
//   // Verify independence
//   console.log('Original Company Hierarchy:');
//   console.log(companyHierarchy);
//
//   console.log('Copied Company Hierarchy with Modifications:');
//   console.log(copiedHierarchy);
//
///////////////////////////////////////////////////////
// Solucion:
///////////////////////////////////////////////////////
// const companyHierarchy = {
//   name: "Company",
//   departments: [
//     {
//       name: "Engineering",
//       head: "Alice",
//       subDepartments: [
//         {
//           name: "Backend",
//           head: "Bob",
//           employees: ["Charlie", "David"],
//         },
//         {
//           name: "Frontend",
//           head: "Eve",
//           employees: ["Frank", "Grace"],
//         },
//       ],
//     },
//     {
//       name: "Sales",
//       head: "Henry",
//       employees: ["Isaac", "Jane"],
//     },
//   ],
// };
// 
// const safeCopy = obj => structuredClone(obj);
//   
// const copiedHierarchy = safeCopy(companyHierarchy);
//
// copiedHierarchy.departments.push(
//   {
//     name: 'Marketing',
//     head: 'Karen',
//     employees: ['Liam', 'Mia']
//   }
// );
// 
// console.log('Original Company Hierarchy:');
// console.log(companyHierarchy);
// console.log('Copied Company Hierarchy with Modifications:');
// console.log(copiedHierarchy);
///////////////////////////////////////////////////////