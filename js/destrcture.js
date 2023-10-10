// //destructure 'America'
// const obj1 = { name: 'Kratos', City: 'NY', Country: 'America'}
// const {Country}=obj1;
// // console.log(Country);


// //destructure John and Wick . Print "John Wick"
// const obj2 = { name: {fname: 'John', lname: 'Wick'}, city: 'Toronto'}
// // const {name:{fname,lname}}=obj2;
// // console.log(fname,lname);

// //destructure 'Valar Morghulis', 'Spartan'.
// const obj3 = {person1: { name: 'No One', address: { city: 'Bravos',slogan: 'Valar Morghulis'}}, person2: {name:'Spartan',
// address: {city: 'SpartanCity', slogan: 'Ahoooo'}}};
// const {person1:{address:{slogan}},person2:{name}}=obj3;
// // console.log(slogan,name);

// //destructure 'Sea', 'Rock', 'Oxygen' as Water, Earth, Air
// const obj4 = {elements: { water : 'Sea', earth: 'Rock', air: 'Oxygen'}}
// const {elements:{water:Water,earth:Earth,air:Air}}=obj4;
// // console.log(Water,Earth,Air);

// //destructure 1
// const arr = [1,'c', 8]
// // const [a,,]=arr
// // console.log(a);

// // destructure 5
// const arr1 = [1,2,3,4,5];
// // const [,,,,a]=arr1
// // console.log(a);

// //destructure d
// const arr2 = ['a', 'b', 'c', 'd', 'e'];
// // const [,,,a,]=arr2
// // console.log(a);

// //destructur 'Targareyan' and 'Starks'
// const arr3 = [['Targareyan'], ['Starks'], ['Greyjoy'], ['Arryn']];
// // const [[a],[b],,]=arr3
// // console.log(a,b);

// //destructure 'Celin'
// const arr4 = [{name: 'Celin'}, {name: 'George'}]
// // const [{name:a},]=arr4
// // console.log(a);

// //destructure 'Chandler' as fname and 'Bing' as lname and form an Object and Print it.
// const arr5 = [{firstName: 'Chandler'}, {lastName: 'Bing'}];
// let [{firstName:fname},{lastName:lname}]=arr5;
// console.log(fname,lname);

//                 ------------------       Advanced        ----------------------

//destructure 'Elija', 'Klaus' and 'Rebecca' as elder, middle, younger
const obj = {originals: ['Elija', 'Jade', 'Walter White', 'Daemon', 'Klaus', 'Rebecca']};

const {originals:[elder,,,,middle,younger]}=obj
console.log(elder,middle,younger);


//destructure 'Elina' and 'Caroline'
const obj1 = [{wolfies: ['Hayley', 'Elina', 'Rafael', 'Aiden']}, {vampires: ['Salvatore','Caroline']}];
const [{wolfies:[,a,,]},{vampires:[,b]}]=obj1;
console.log(a,b);

