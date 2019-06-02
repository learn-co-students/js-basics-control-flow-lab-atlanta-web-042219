function scuberGreetingForFeet(input){
  // Write your code here!
  if (input <= 400) {
    return "This one is on me!";
  } else if (input > 2000 && input <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (input > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(input){
  // Write your code here!
  return input === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(input){
  // Write your code here!
  switch (input) {
    case "generous":
      return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}