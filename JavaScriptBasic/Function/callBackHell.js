// callback hell also known as the "Pyramid of Doom," is a phenomenon in JS that occurs when multiple 
// asynchronous operation are nested within each other using callback.

function sayHello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 3000);
}

function askHowAreYou(callback) {
  setTimeout(() => {
    console.log("How are you?");
    callback();
  }, 1000);
}

function sayGoodbye(callback) {
  setTimeout(() => {
    console.log("Goodbye");
    callback();
  }, 1000);
}

// Nested callbacks — callback hell
sayHello(() => {
  askHowAreYou(() => {
    sayGoodbye(() => {
      console.log("Conversation ended.");
    });
  });
});