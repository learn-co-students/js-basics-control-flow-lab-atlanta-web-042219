

function scuberGreetingForFeet(distance) {
  // Write your code here!
  let message;
      if (distance <= 400) {
      return message = 'This one is on me!';
    } else if (distance > 401 && distance < 2499) {
      return message = 'I will gladly take your thirty bucks.';
    } else if (distance > 2500) {
      return message = 'No can do.';
    }
  }

function ternaryCheckCity(city){
  // Write your code here!
  let message;
  return city === "NYC" ? (message = 'Ok, sounds good.') : (message = 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    case 'thanks for everything':
      return "Bye."
  }

}