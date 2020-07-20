// //alert("Hello Avijeet");
// var myd = new Date();
// console.log(myd.getMinutes());

//DOM - Document Object Model
document.getElementById('click').style.border = "2px solid blue";
// document.getElementById('click').style.border = "4px solid orange";
var check1 = document.getElementsByClassName("container");
// console.log(check1);
//check1[0].style.background = "orange";
check1[0].classList.add("bg-primary");
check1[0].classList.add("txt-success");

var checkerClick = document.getElementById('click');
// console.log(checkerClick.innerHTML);
// console.log(checkerClick.innerText);
// console.log(check1[0].innerText);
// console.log(check1[0].innerHTML);


//for getting all the buttons 
// tn = document.getElementsByTagName('button')
// console.log(tn)

// tn = document.getElementsByTagName('div')
// console.log(tn)


// createdElement = document.createElement('p');
// createdElement.innerText = "this is a created para";
// tn[0].appendChild(createdElement);


// // Events in JS
// function clicked() {
//     console.log("the button was clicked");
// }

// window.onload = function() {
//     console.log("the window was loaded");
// };

// firstContainer.addEventListener('click', function() {
//     console.log("Click on Container");
// });


// firstContainer.addEventListener('mouseover', function() {
//     console.log("Mouse on Container");
// });


// firstContainer.addEventListener('mouseout', function() {
//     console.log("Mouse out Container");
// });



// firstContainer.addEventListener('mouseup', function() {
//     console.log("Mouse up on Container");
// });


// firstContainer.addEventListener('mousedown', function() {
//     console.log("Mouse down on Container");
// });



// making changes using clicking or any other mouse action
// firstContainer.addEventListener('click', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked on button</b>"
//     console.log("Container Clicked")
// })


//this can be used to display text or make some animation using mouse movements
// var perviousHtml = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseover', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<h1><b>textDisplayed</b></h1>";
// })
// firstContainer.addEventListener('mouseout', function() {
//     document.querySelectorAll('.container')[1].innerHTML = perviousHtml;
// })

//Arrow functions
// function sum(a, b) {
//     return a + b;
// }
// summ = (a, b) => {
//     return a + b;
// };

// SetTimeout and setInterval
logkarko = () => {
    console.log("set interval fired")
}

// setTimeout(logkarko, 2000);



// //this is how we can stop an interval execution or timeout
// clr = setInterval(logkarko, 1000);



// stopexe = () => {
//     clearInterval(clr);
// }
// setTimeout(stopexe, 10000);


//local storage
//remark local storage is visible to the user of the site so sesitive info. is not advisible to be stored here.
// localStorage.setItem('name', "avijeet")
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')  -- removes one item 
// localStorage.clear() -- removes all the items from localStorage

// clearing console
// window.onload = () => {
//         console.clear()
//     }



//JSON

// obj = { name: "avijeet", length: 1 }; //js object
// console.log(typeof obj)
//     //conversion of object to json string
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)


// parsed = JSON.parse(`{"name":"avijeet","length":1}`)
// parsed = JSON.parse(jso)

// console.log(parsed);

//ECMAScript -- JavaScript -- standard for maintaining js
//this was basically made as to maintain the JavaScript standard and also pushing new versions.


// //Backticks
// a = 34
// console.log(`this is my ${++a}`)