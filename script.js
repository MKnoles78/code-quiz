// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// create a countdown time
  

// ****************************COUNTDOWN TIMER ELEMENT************************
//added timer feature
var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("main");

var secondsLeft = 76;


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    
    }
    console.log(secondsLeft)
  }, 1000);

}


setTime();



// link timer to start button


// ********************************ONCLICK EVENT TO START QUESTIONS*****************************

// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");
// var mode = "dark";

// themeSwitcher.addEventListener("click", function() {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0

// **************************************QUESTION GENERATION**************************************

// The array of questions for our quiz game.
// var questions = [
//     { q: "The sky is blue.", a: "t" },
//     { q: "There are 365 days in a year.", a: "t" },
//     { q: "There are 42 ounces in a pound.", a: "f" },
//     { q: "The Declaration of Independence was created in 1745.", a: "f" },
//     { q: "Bananas are vegetables.", a: "f" }
//   ];

//   // We start the game with a score of 0.
//   var score = 0;

//   // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);

//     // Compare answers
//     if ((answer === true && questions[i].a === "t") ||
//       (answer === false && questions[i].a === "f")) {
//       // Increase score
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("Wrong!");
//     }
//   }

//   // Show total at end
//   alert("You got " + score + "/" + questions.length);


// ***************************ARRAY FOR READING THROUGH QUESTIONS**********************************


// var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
// var words = poem.split(" ");

// var mainEl = document.getElementById("main");
// var readEl = document.getElementById("read");
// var timerEl = document.getElementById("countdown");
// var bodyEl = document.createElement("div");

// var i = 0;

// var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

// function prepareRead() {
//   var timeLeft = 5;

//   var timeInterval = setInterval(function() {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;

//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       speedRead();
//       clearInterval(timeInterval);
//     }

//   }, 1000);
// }


// function speedRead() {
//   mainEl.append(bodyEl);

//   var poemInterval = setInterval(function() {
//     if (words[i] === undefined) {
//       clearInterval(poemInterval);
//     } else {
//       mainEl.textContent = words[i];
//       i++;
//     }

//   }, millisecondsPerWord);
// }

// prepareRead();

// ******************************DISPLAY ANSWER AS CORRECT OR WRONG***********************************

// var submitEl = document.querySelector("#submit");
// var nameInput = document.querySelector("#name");
// var emailInput = document.querySelector("#email");
// var submissionResponseEl = document.querySelector("#response");

// submitEl.addEventListener("click", function(event) {
//   event.preventDefault();

//   console.log(event);
  
//   var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//   submissionResponseEl.textContent = response;
// });


// *********************************REDUCING TIMER FOR WRONG ANSWERS********************************

// var count = 0;
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// function setCounterText() {
//   countEl.textContent = count;
// }

// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// decrementEl.addEventListener("click", function() {
//   if(count > 0) {
//     count--;
//     setCounterText();
//   }
// }); 


// ***************************APPENDING - ADDING ITEMS TO THE DOM**********************************

// the information below is how to append things, this might be used to display the next question or append the highscores
// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   var tag = document.createElement(tagName);
//   tag.textContent = "This was made via prompts. It's a " + tagName;
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");
// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
//     document.body.appendChild(secondTag);
//   }
// }


// ***********************************LOGGING HIGHSCORE ELEMENT**************************************

// var listEl = document.querySelector("#grocery-list");
// var shoppingCartEl = document.querySelector("#shopping-cart");
// var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// listEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = groceries[event.target.parentElement.id];
//     shoppingCartEl.append(item);
//   }
// });

// ********************************STORING HIGHSCORES TO LOCAL STORAGE*******************************

// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   count++;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });

// subtractButton.addEventListener("click", function() {
//   count--;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });

// **************************CREATING LIST FOR HIGHSCORES AND STORING TO LOCAL************************

// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = [];

// init();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // Render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // When a element inside of the todoList is clicked...
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });


// ******************************USING JSON TO STORE STRING ELEMENTS**********************************

// var firstNameInput = document.querySelector("#first-name");
// var lastNameInput = document.querySelector("#last-name");
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userFirstNameSpan = document.querySelector("#user-first-name");
// var userLastNameSpan = document.querySelector("#user-last-name");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();
  
//   // create user object from submission
//   var user = {
//     firstName: firstNameInput.value.trim(),
//     lastName: lastNameInput.value.trim(),
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim()
//   };
  
//   // validate the fields
//   if (user.firstName === "") {
//     displayMessage("error", "First name cannot be blank");
//   } else if (user.lastName === "") {
//     displayMessage("error", "Last name cannot be blank");
//   } else if (user.email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (user.password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     // set new submission
//     // console.log(user);
//     // localStorage.setItem("user", user);
//     // var stringifiedUser = JSON.stringify(user);
//     // console.log(stringifiedUser);
//     // localStorage.setItem("user", stringifiedUser);
//     localStorage.setItem("user", JSON.stringify(user));
//     // get most recent submission
//     var lastUser = JSON.parse(localStorage.getItem("user"));
//     userFirstNameSpan.textContent = lastUser.firstName;
//     userLastNameSpan.textContent = lastUser.lastName;
//     userEmailSpan.textContent = lastUser.email;
//     userPasswordSpan.textContent = lastUser.password;
//   }
// });


// *****************************CODE INFO FOR DATA EVENTS******************************************

// var imageContainer = document.querySelector(".img-container");

// imageContainer.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches("img")) {
//     var state = element.getAttribute("data-state");

//     if (state === "still") {
//       element.setAttribute("data-state", "animate");
//       element.setAttribute("src", element.getAttribute("data-animate"));
//     } else if (state === "animate") {
//       element.setAttribute("data-state", "still");
//       element.setAttribute("src", element.getAttribute("data-still"));
//     }
//   }
// });

// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score 