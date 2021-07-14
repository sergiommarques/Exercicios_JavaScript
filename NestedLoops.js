//Nested loops

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2, 6];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

bobsFollowers = ['Gil', 'Miguel', 'Ana', 'Aniceto']

tinasFollowers = ['Ana', 'Luís', 'Gil']

mutualFollowers = []

for(let b = 0; b < bobsFollowers.length; b++){    
    for(let t = 0; t < tinasFollowers.length; t++){
        if (bobsFollowers[b] === tinasFollowers[t]){
         mutualFollowers.push(bobsFollowers[t])
            }
        }
    }

    console.log(mutualFollowers.length)
    for (let m =0; m<mutualFollowers.length; m++){
        console.log(mutualFollowers[m])
    }

