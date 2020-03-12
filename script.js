// GIVEN I am taking a code quiz
  
// ****************************COUNTDOWN TIMER ELEMENT************************

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// create a countdown time

// these variables are for the timer element id tags 
var timeEl = document.querySelector("#time");
var startButtonEl = document.getElementById("btn btn-primary btn-lg")
var mainEl = document.getElementById("main");
var headingEl = document.getElementById("heading");
var questionBlockEl = document.getElementById("questionblock")

// this is the submit or start button that displays the quiz, and starts the timer 
startButtonEl.addEventListener("click", function(){
   console.log ("you clicked me") 
    setTime()
    headingEl.style.display = "none";
    
    // this line changes display of the questionblock from none to block, hides and shows 
    var changeQuestion = document.getElementById("questionblock");
    if (changeQuestion.style.display === "none") {
      changeQuestion.style.display = "block";
    } else {
      changeQuestion.style.display = "none";
    }  
    
    loadQuestions()
});

// this is when the timer begins countdown process
var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "TIME:  " + secondsLeft
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    
    };
    console.log(secondsLeft)
  }, 1000);

}



// ********************************ONCLICK EVENT TO START QUESTIONS*****************************
//assign variables elements to the ids

var displayQuestionEl = document.getElementById("display-question");
var choiceAEl= document.getElementById("choice-a");
var choiceBEl= document.getElementById("choice-b");
var choiceCEl= document.getElementById("choice-c");
var choiceDEl= document.getElementById("choice-d");

// questions  

var questions = [
  {
    displayQuestionEl : "I have branches, but no fruit, trunk or leaves. What am I?",
      choiceAEl : "A Bank",
      choiceBEl : "Swimming Pool",
      choiceCEl : "Restaurant",
      choiceDEl : "Parking Garage",
      correct : "A"
  },{
    displayQuestionEl : "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?",
      choiceAEl: "Best Friend",
      choiceBEl : "Your Shadow",
      choiceCEl : "Pet",
      choiceDEl : "Reflection",
      correct : "B"
  },{
    displayQuestionEl : "If you've got me, you want to share me; if you share me, you haven't kept me.  What am I?",
      choiceAEl : "Money",
      choiceBEl : "Attitude",
      choiceCEl : "A Secret",
      choiceDEl : "Lunch",
      correct : "C"
  },{
    displayQuestionEl : "What has hands, but can't clap?",
    choiceAEl : "A Clock",
    choiceBEl : "Handyman",
    choiceCEl : "Leftovers",
    choiceDEl : "A handkerchief",
    correct : "A"
},{
  displayQuestionEl : "What building has the most stories?",
    choiceAEl : "Empire State Building",
    choiceBEl : "Wayne Tower",
    choiceCEl : "The Library",
    choiceDEl : "Daily Planet",
    correct : "C"
},
];

//loop through questions and display them in the question block
//every timer an options is selected question changes
//notate when the last question occurs, which is the length - 1
var lastQuestion = questions.length - 1;

for (var i = 0; i < questions.length; i++) {
  console.log("I love " + questions[i]);
  //when for loop begins first set of questions load into block
  //once a button is clicked the next set of questions display; etc.
  //if the answer is correct proceed
  //else if answer is wrong -15 secs from timer then proceed
var questionOne = questions[0].displayQuestionEl;
var questionTwo = questions[1].displayQuestionEl;
var questionThree = questions[2].displayQuestionEl;
var questionFour = questions[3].displayQuestionEl;
var questionFive = questions[4].displayQuestionEl;
// these variables establish where answer within index
var optionOne = questions[0].choiceAEl
var optionTwo = questions[1].choiceBEl
var optionThree = questions[2].choiceCEl
var optionFour = questions[3].choiceDEl
}

function loadQuestions(){
 console.log("hello")



  choiceAEl = buttonAEl.addEventListener("click", function(){
    console.log ("you clicked a")} );
  choiceBEl = buttonBEl.addEventListener("click", function(){
    console.log ("you clicked b")} );
  choiceCEl = buttonCEl.addEventListener("click", function(){
    console.log ("you clicked c")} );
  choiceDEl = buttonDEl.addEventListener("click", function(){
    console.log ("you clicked d")} );

}

//assigns buttons to places within the HTML and add event listners
buttonAEl = document.getElementById("btn-a");
buttonBEl = document.getElementById("btn-b");
buttonCEl = document.getElementById("btn-c");
buttonDEl = document.getElementById("btn-d");
//these element are used to display into corresponding boxes on HTML
displayQuestionEl.innerHTML += questionOne
choiceAEl.innerHTML += optionOne
choiceBEl.innerHTML += optionTwo
choiceCEl.innerHTML += optionThree
choiceDEl.innerHTML += optionFour


//assigns buttons to places within the HTML and add event listners
// buttonAEl = document.getElementById("btn-a");
// buttonBEl = document.getElementById("btn-b");
// buttonCEl = document.getElementById("btn-c");
// buttonDEl = document.getElementById("btn-d");

// onclick event for buttons
//these buttons need to trigger the correct answer 
//these buttons need to trade out questions 
//choices should correlate to buttons
// choiceAEl = buttonAEl.addEventListener("click", function(){
//   console.log ("you clicked a")} );
// choiceBEl = buttonBEl.addEventListener("click", function(){
//   console.log ("you clicked b")} );
// choiceCEl = buttonCEl.addEventListener("click", function(){
//   console.log ("you clicked c")} );
// choiceDEl = buttonDEl.addEventListener("click", function(){
//   console.log ("you clicked d")} );

 


// ************************POSSIBLE EXERCISE TO UTILIZE TOGGLE FUNCTION *********************

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



// ***************************POSSIBLE REFERENCE FOR ARRAY FOR READING THROUGH QUESTIONS**********************************


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

var highscoreInput = document.querySelector("#highscore-text");
var highscoreForm = document.querySelector("#highscore-form");
var highscoreList = document.querySelector("#highscore-list");
var highscoreCountSpan = document.querySelector("#highscore-count");  


init();

function renderhighscores() {
  // Clear highscoreList element and update highscoreCountSpan
  highscoreList.innerHTML = "";
  highscoreCountSpan.textContent = highscores.length;

  // Render a new li for each highscore
  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];

    var li = document.createElement("li");
    li.textContent = highscore;
    li.setAttribute("data-index", i);

    // ********THESE TWO LINES ADDED THE COMPLETE BUTTON ON THE ASSIGNMENT, SHOULD NOT NEED******** 
    // var button = document.createElement("button"); 
    // button.textContent = "Complete";
    // ***********THIS LINE ADDED OR APPENDED THE BUTTON TO THE TAG, SHOULD NOT NEED*********  
    // li.appendChild(button);
    highscoreList.appendChild(li);
  }

}

function init() {
  // Get stored highscores from localStorage
  // Parsing the JSON string to an object
  var storedhighscores = JSON.parse(localStorage.getItem("highscores"));

  // If highscores were retrieved from localStorage, update the highscores array to it
  if (storedhighscores !== null) {
    highscores = storedhighscores;
  }

  // Render highscores to the DOM
  renderhighscores();
}

function storehighscores() {
  // Stringify and set "highscores" key in localStorage to highscores array
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

// When form is submitted...
highscoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var highscoreText = highscoreInput.value.trim();

  // Return from function early if submitted highscoreText is blank
  if (highscoreText === "") {
    return;
  }

  // Add new highscoreText to highscores array, clear the input
  highscores.push(highscoreText);
  highscoreInput.value = "";

  // Store updated highscores in localStorage, re-render the list
  storehighscores();
  renderhighscores();
});

// When a element inside of the highscoreList is clicked...
highscoreList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the highscore element from the list
    var index = element.parentElement.getAttribute("data-index");
    highscores.splice(index, 1);

    // Store updated highscores in localStorage, re-render the list
    storehighscores();
    renderhighscores();
  }
});



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
// THEN I can save my initials and
