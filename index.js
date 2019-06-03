function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting
  if (feet >= 2500) {
    greeting = "No can do.";
  }
    else if (feet >= 2000 && feet <= 2500) {
      greeting = "I will gladly take your thirty bucks.";
  }
    else if (feet < 200) {
      greeting = "This one is on me!";
    }
    return greeting
  }
function ternaryCheckCity(city){
  // Write your code here!
  let result
  if (city === "NYC") {
    result = "Ok, sounds good.";
  }
    else if (city != "NYC") {
      result = "No go.";
    }
  return result
  }

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm
  if (tip === "generous") {
    charm = "Thank you so much.";
  }
  else if (tip === "not as generous") {
    charm = "Thank you.";
  }
  else if (tip === "thanks for everything") {
    charm = "Bye."
  }
  return charm
  }