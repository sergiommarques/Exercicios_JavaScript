    //FOR VS WHILE LOOP 

    // A for loop that prints 1, 2, and 3
    for (let counterOne = 1; counterOne < 4; counterOne++){
        console.log(counterOne);
      }
       
      // A while loop that prints 1, 2, and 3
      let counterTwo = 1;
      while (counterTwo < 4) {
        console.log(counterTwo);
        counterTwo++;
      }

// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.
// Inside the block of your while loop, add the following line of code:
// currentCard = cards[Math.floor(Math.random() * 4)];
// Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

console.log(Math.random() * 4)
console.log(Math.floor(Math.random() * 4))