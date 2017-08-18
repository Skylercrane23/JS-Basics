//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
  if (name === 'Tyler'){
    return true;
  } else {
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
  return prompt();
}

  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
  var usersname = getName();
  alert('Welcome, ' + usersname);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
// From what I understand is that Arguments are the values actually
// passed through a function and a parameter is the name that is
//  passed through the function. Arguments are usually used when calling 
//the function and parameters are the names that take in those values.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?
// 

  //Answer Here
// Falsy values include: false, 0, "" - empty string, null, endefined, NAN
// Truthy are all other values including "0", "false", empty functions, empty arrays, and empty objects
// Best way to find if a value is truthy or falsey is to use one of the values and set it === to another. 

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(){
  return 'Skyler';
}  

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
function newMyName(myName){
  alert(newMyName);
}
//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////


//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(){
    return function(){
      return 'Skyler';
    }
  }
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();
//Now invoke innerFn.

innerFn();
