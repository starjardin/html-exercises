var count = 0;

function cc(card) {
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 7:
  case 8:
  case 9:
    count;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count --;
    break;
  default:
    count = "no cards has found";
    break;
 }
 if (count > 0) {
   return count + " Bet";
 } else {
   return count + " Hold";
 }
}


console.log(card);


cc(2); cc(3); cc(7); cc('k'); cc('A');


function cc(card) {
    if (card >= 2 && card >=6) {
      count ++;
    }else if(card >= 7 || card <= 9) {
      count;
    }
     else if(card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
      count --;
    }
    if (count > 0) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  }
console.log(card)
cc(2); cc(3); cc(7); cc('k'); cc('A');
