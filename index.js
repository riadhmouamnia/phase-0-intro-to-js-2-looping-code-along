// writeCards() returns an array of thank you messages for each name provided to the function
const names = ["Charlie", "Samip", "Ali"];
function writeCards(array, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// countDown()
// 1) invokes console.log once for each number, counting down from the number provided to zero
// 2) logs each number when counting down, starting from the number provided

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
