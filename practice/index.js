
// let username;
// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("mytext").value;
//     console.log(username)
//     document.getElementById("mylabel").innerHTML = username;
// }

// type conversion = change datatype of a value to another

// let y;
// let x;
// let z;

// x = Number("3.14")
// y = String(3.14)

// console.log(typeof x)
// console.log(typeof y)

// const = a variable that cant be changed

// let a = window.prompt("enter side A");
// a = Number(a);

// let b = window.prompt("enter side B");
// b = Number(b);

// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b ,2))

// console.log("side c is ", c)


// document.getElementById("submit").onclick = function(){

//     let a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     let b = document.getElementById("bTextBox").value;
//     b = Number(b);

//     let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b ,2))

//     document.getElementById("clabel").innerHTML = "Side C: " + c
// }


// slice method

// let fullName = "snoop dog"
// let firstName;
// let lastName;

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName)
// console.log(lastName)



// method chaining = calling one method after another
//                    in one continuos line od code


// document.getElementById("mybtn").onclick = function(){

//     if (document.getElementById("myCheckbox").checked) {
//         console.log("you are subscribed")
//     } else {
//         console.log("you are not subscribed")
//     }

// }



// variable scope = where a variable is accessible

//  let  =  variable are limited to block scope {}
// var = variables are limited to a function (){}


// format currency.................................
// toLocaleString() = return a string with a language
//                   sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options
// let myNum = 123456.789;

// myNum = myNum.toLocaleString("en-US"); // us english
// myNum = myNum.toLocaleString("hi-IN"); // hindi
// myNum = myNum.toLocaleString("de-DE"); // standard german

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"})

// myNum = myNum.toLocaleString(undefined , {style: "unit", unit: "celsius"});

// console.log(myNum);


// .................................................
// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

// let age = [18,15,12,45,66,32,12,6,8,10,17,25];

// let adult = age.filter(checkAge);
// adult.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }

// function print(element){
//     console.log(element);
// }

//....................................................
// array.reduce() = reduce an array to a single value

// let prices = [5,10,15,20,25,30]
// let total = prices.reduce(checkOut)
// console.log(`the total is $${total}`)

// function checkOut(total, element){
//     return total + element;
// }


// .......................................................
// function expression = function without a name (anonymous function)
//                        avoid polluting the global scope with names
//                         write it, then forget about it

// let counter = 0

// document.getElementById("decbtn").onclick = function (){
//     counter--;
//     document.getElementById("mylabel").innerHTML = counter
// }
// document.getElementById("incbtn").onclick = function (){
//     counter++;
//     document.getElementById("mylabel").innerHTML = counter
// }
// document.getElementById("reset").onclick = function (){
//     counter = 0;
//     document.getElementById("mylabel").innerHTML = counter
// }


// ................................................................
// arrow function = compact alternative to a traditional function expression
//  =>

// const greeting = (name) => console.log(`hello ${name}`);

// greeting("rahul")

// const percentage = (x,y) =>  x/y *100;
// console.log(`${percentage(75, 100)}%`)

// .......................................................
// nested function = function inside other functions.
//                    outer functions have access to inner function,
//                     inner functions are hidden from outside the outer function.
//                      used in closure

// let username = "Bro";
// let userInbox = 0;

// login();

// function login(){

//     displayusername();
//     displayInbox();

//     function displayusername(){
//         console.log(`hiii ${username}`);
//     }
//     function displayInbox(){
//         console.log(`you have ${userInbox} messages`)
//     }
// }

// ...................................................
// map = object that holds key-value pairs of any data type;

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ]);

// let shoppingCart = 0

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("jeans");
// console.log(shoppingCart);

// store.set("hat", 50)
// store.delete("hat");
// store.has("hat");
// store.size();

// store.forEach((value, key) => console.log(`${key} $${value}`))
// ....................................................................

// object = a group of properties and methods
//           properties = what an object has
//           method = what an object can do
//           use . to access properties/methods

// const car = {
//     model: "Mustang",
//     color: "Red",
//     year: 2023,

//     drive: function(){
//         console.log("you drive the car");
//     },
//     break: function(){
//         console.log("you step on the breaks");
//     }
// }

// console.log(car.model)
// console.log(car.color)
// console.log(car.year)
// car.drive();
// car.break();
// ................................................................

// this = reference to a particular object
//         the object depends on the immediate context

// const car = {
//     model: "Mustang",
//     color: "Red",
//     year: 2023,

//     drive: function(){
//         console.log(`you drive the ${this.model}`);
//     },
//     break: function(){
//         console.log("you step on the breaks");
//     }
// }
// const car2 = {
//     model: "BMW",
//     color: "Yellow",
//     year: 2024,

//     drive: function(){
//         console.log(`you drive the ${this.model}`);
//     },
//     break: function(){
//         console.log("you step on the breaks");
//     }
// }
// car.drive();
// car2.drive();
// .......................................................................

// class = a blueprint for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties

// class player {
//     score = 0;

//     pause(){
//         console.log("you paused the game")
//     }
//     exit(){
//         console.log("you exited the game")
//     }
// }
// const player1 = new player();
// player1.score = +1;
// console.log(player1.score);

// player1.pause();
// player1.exit();
// .....................................................................................

// constructor = a special method of a class
//               accepts arguments and assigns properties

// class student {
//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`)
//     }
// }

// const student1 = new student("raj", 25, 8.5);

// student1.study();
// ..........................................................................

// static = belongs to the class, not the object
//          properties: useful for caches, fixed-configurations
//          methods: useful for utility functions

// class Car{

//     static numberOfCars = 0;

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars ++;
//     }

//     static startRace(){
//         console.log("3....2....1...Go");
//     }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("BMW");
// const car3 = new Car("TATA");
// const car4 = new Car("Tesla");

// console.log(Car.numberOfCars)

// Car.startRace();
// ....................................................................

// inheritance = a child class can inherit all the
//                  methods and properties from the other classes

// class Animal{

//     alive  = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
    
//     name = "rabbit";
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal {
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// .............................................................................

// super = refers to the parent class
//          commonly used to invoke constructor of a parent class

// class Animal{

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age)
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name,age)
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name,age)
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 50);
// const hawk = new Hawk("hawk", 3, 80);

// console.log(rabbit.age);
// console.log(rabbit.name);
// console.log(rabbit.runSpeed);

// .................................................................

// get = binds an object property to a function
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

// class Car{
//     constructor(power){
//         this._gas = 15;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas / 50 * 100}%)`
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);
// car.gas  = 33

// console.log(car.power);
// console.log(car.gas);
// ..............................................................................

// anonymous objects = objects without a name
//                      not directly referenced
//                      less syntax no need for unique names

// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [new Card("A", "Hearts"),
//             new Card("A", "Spades"),
//             new Card("A", "Diamonds"),
//             new Card("A", "Clubs"),
//             new Card("2", "Hearts"),
//             new Card("2", "Spades"),
//             new Card("2", "Diamonds"),
//             new Card("2", "Clubs")];

// cards.forEach(card => console.log(`${card.value} ${card.suit}`))
// ................................................................................

// error = objects with a description of something went wrong
//          cant open file, lose connection, user types incorrect input, typeerror etc,,,
// throw =  execute a user defined error

// try {
//     let x = window.prompt("enter a number");
//     x = Number(x);

//     if(isNaN(x)) throw "that was not a number";
//     if(x == "") throw "that was empty";

//     console.log(`${x} is a number`);

// } 
// catch (error) {
//     console.log(error);
// }
// finally {
//     console.log("this always execute");
// }
// ...........................................................................

// setTimeout() = invokes a function after a number of milliseconds
//                  asynchronous function (doesn't pause execution)

// let timer1 = setTimeout(firstMsg, 3000);
// let timer2 = setTimeout(secondMsg, 6000);
// let timer3 = setTimeout(thirdMsg, 10000)

// function firstMsg(){
//     alert("buy this course for $500");
// }
// function secondMsg(){
//     alert("this is not a scam");
// }
// function thirdMsg(){
//     alert("do it!");
// }

// document.getElementById("myBtn").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert("thanks for buying");
// }
//.................................................................................

// setInterval() = invokes a function repeatedly after a number of milliseconds
//                 asynchronous function (doesn't pause execution)

// let count = 0;
// let max = window.prompt("count up to what number?")
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count++;
//     console.log(count);
//     if(count == max){
//         clearInterval(myTimer);
//     }
// }
// ..................................................................................

// the Date object is used to work with dates and time

// let date = new Date();

// date = date.toLocaleString();

// document.getElementById("myLabel").innerHTML  = date;
// ...................................................................................

// synchronous code = in an order sequence.
//                      step-by-step linear instructions
//                      (start now, finish now)

// asynchronous code = out of sequence.
//                      Ex. Access a database
//                      Fetch a file
//                      Task that takes time
//                      (start now, finish sometime later)
// .........................................................................................

// console.time() = start a timer you can use to
//                  track how long a operation takes
//                  give each timer a unique name.

// // start
// console.time("Response time");

// alert("Click the ok button")

// // end
// console.timeEnd("Response time");
// .................................................................................................

// promise = object that encapsulates the result of an asynchronous operation
//              let asynchronous method return values like synchronous method
//              "I promise to return something in the future"

//              the State is 'pending' them: 'fulfilled' or 'rejected'
//              the Result is what can be returned
//              2 parts producing & consuming

// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("file loaded");
//     }
//     else{
//         reject("file not loaded");
//     }
// });

// promise.then((value) => console.log(value))
//         .catch((error) => console.log(error));

//..................example/.............

// const wait = (time) => new Promise(resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("thanks for waiting!"));

// ...........................................................................................................

// async = make a function return a promise

// async function loadFile(){
    
//     let fileLoaded = false;

//     if(fileLoaded){
//         return "File loaded";
//     }
//     else{
//         throw "File not loaded";
//     }
// }
// loadFile().then(value => console.log(value))
//             .catch(error => console.log(error));
// ..................................................................................

// await  =  makes an async function wait for a promise

// async function loadFile(){
    
//     let fileLoaded = false;

//     if(fileLoaded){
//         return "File loaded";
//     }
//     else{
//         throw "File not loaded";
//     }
// }
// async function startProcess(){
//     try{
//     let message = await loadFile();
//     console.log(message);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// startProcess();
// ..................................................................................

// ES6 modules
// The idea behind a module is that its a file of reusable code
// we can import sections of pre-written code to use whenever
// great for any general utility values and functions
// helps to mae your code more reusable and maintainable
// think of module as separate chapter of books

// import {pi, getCircumference, getArea} from  "./math_util.js";
// import * as mathUtil from  "./math_util.js";

// console.log(mathUtil.pi);

// let circumference = mathUtil.getCircumference(10);
// console.log(circumference);

// let area = mathUtil.getArea(10);
// console.log(area);
// .....................................................................................

// DOM = Document Object Model (API)
//        an interface for changing the content of page

// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// document.title = "Title goes here";
// document.location = "http://www.google.com"

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello"

// ...................................................................................

// add/change HTML elements
//  .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("enter your name");
// document.body.append(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "orange";
// myList.append(listItem);
// myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2])
// ...............................................................................................

// add/change css properties

// const title = document.getElementById("title");

// title.style.backgroundColor = "#222222"
// title.style.color = "rgb(50,200,250)"
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "3px solid";
// title.style.display = "block";
// ....................................................................................

// Events.......

// const element = document.getElementById("myBtn");
// const element = document.body;
// const element = document.getElementById("text");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

// function doSomething(){
//     // alert("you did something");
//     element.style.backgroundColor = "red"

// }
// function doSomethingElse(){
//     // alert("you did something");
//     element.style.backgroundColor = "lightgreen"

// }
// .....................................................................................

// .addEventListener(event, function, useCapture)
// you can add many event handlers to one event.
// even the same event that invokes different functions

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);


// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }
// function changeGreen(){
//     innerDiv.style.backgroundColor = "lightgreen";
// }

// innerDiv.addEventListener("click" , changeBlue);
// outerDiv.addEventListener("click" , changeBlue, true);

// function changeBlue(){
//     alert(`you selected ${this.id}`)
//     this.style.backgroundColor = "lightblue";
// }
// .............................................................................

// detect key presses.................

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event){
//     switch (event.key) {

//         case "ArrowDown":
//             y+=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             myDiv.style.left = x + "px";
//             break;
    
//         default:
//             break;
//     }
// }
// .........................................................................................................

// animations.........................................

// const myBtn = document.getElementById("myBtn");
// const myAnimation = document.getElementById("myDiv");

// myBtn.addEventListener("click", begin);

// function begin(){
//     let timerId = null;
//     let degrees = 0;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             degrees+=5;
//             x+=1;
//             y+=1;
//             myAnimation.style.left = x + "px"
//             myAnimation.style.top = y + "px"
//             myAnimation.style.transform = "rotatez("+degrees +"deg)";
//         }
//     }
// }
// ...........................................................................................

// canvas API = a means for drawing graphics
//              used for animations, games, data visualization

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(250,500)
// ..............................................................................
// window = interface used to talk to the web browser
//           the DOM is a property of the window

const myBtn = document.querySelector("#myBtn");

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// myBtn.addEventListener("click", () => window.open("https://google.com"));
// myBtn.addEventListener("click", () => window.close());
// myBtn.addEventListener("click", () => window.print());

// window.alert("hello");
// window.confirm("press ok to continue!");

// let age = window.prompt("Enter your age");
// if(age < 18){
//     window.alert("you must be 18+ to visit this site")
//     window.close();
// }
// ..........................................................................................

// cookie = a small text file stores on your computer
//          used to remember information about the user
//          saved in name=value pairs





