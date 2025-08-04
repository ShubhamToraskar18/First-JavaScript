const userLoggedInStatus = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isUserLoggedIn = true; 

    if (isUserLoggedIn) {

      console.log("user is logged in !!!!!!");
      resolve({userName: "saideep", age: 23});
      // Resolve the promise with user data

    } else {

      console.log("user logged in error");
      reject("something went wrong");
      // Reject the promise with an error message

    }
  }, 3000);
});

async function testPromise() {
    try {
        const res = await userLoggedInStatus;
        console.log(res);
    } catch (error) {
        console.log("error is:", error)
    }
}

console.log(testPromise());