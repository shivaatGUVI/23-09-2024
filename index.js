// (JIT) -> JavaScript is not a compiled language -> The applications created by JS are single threaded.

// setTimeout(() => {
//   console.log("From function executing after 5 seconds");
//   // RESULT
// }, 5000); // function -> cb, time in milliseconds -> 5 sec

// addEventListener("click", function)

// // function is given to browser and broswers looks out for it

// // console.log("Hello");
// // console.log("World");

// // let output = 5 + 10;
// // console.log(output);

// // // for (let a = 0; a < 10000000000; a++) {} // 1hr -> someone else (browser)

// // console.log("Good morning");
// // n number of code lines are heres -> eventListeners -> for loops
// // v8

// console.log(document);

// let arrayc = [1, 2, 3, 4];
// let array = new Array(5);

// let server = true; // take time I am in Mumbai, server is USA

// let promiseOne = new Promise((resolve, reject) => {
//   console.log("Hello promise");

//   if (server === true) {
//     resolve({
//       status: true,
//       message: "Server is running",
//     });
//   } else {
//     reject({
//       status: false,
//       message: "Server is down",
//     });
//   }

//   // promise is succeeded or failed -> resolve and reject
// });

// a -> b -> c -> d
// shiva@guvi.in -> shiva@gmail.com

/**
 *
 * 1. Depending upon my server response I want to reject or resolve my promise
 * 2. Depending upon resolve/reject I want to do / console.log
 */

// promise -> pending resolve reject Mumbai -> USA

// mpul

// console.log(promiseOne);

// promiseOne
//   .then((response) => {
//     console.log(response);

//     let serverTwo = true; // it would take me sometime -> it can give me my result / it cannot

//     // let promiseTwo = new Promise((resolve, reject) => {
//     //   if (serverTwo === true) {
//     //     resolve("Server two is running");
//     //   } else {
//     //     reject("Server two is down");
//     //   }
//     // });

//     // promiseTwo
//     //   .then((response) => {
//     //     console.log(response);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch() -> web api's

// function fetch() {
//   let promise = new Promise((resolve, reject) => {
//     if (server) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// function fetchingData() {
//   return fetch("https://reqres.in/api/useeerrrsssssss?p=2");
//   output
//     .then((response) => {
//       let jsonResponse = response.json(); // returns new promise

//       jsonResponse
//         .then((dataResponse) => {
//           console.log(dataResponse);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// async function fetchData() {
//   try {

// let response = await fetch("https://reqres.in/api/users?page=2");
// let jsonResponse = await response.json();

// console.log(jsonResponse);

//     let jsonResponse = await response.json();

//     console.log(jsonResponse);
//   } catch (error) {
//     console.log(error, "errroooo");
//   }
// }

// fetchData();

function saySomething() {
  function saySomethingTwo() {
    function saySomethingThree() {
      function saySomethingFour() {
        // ...n Node.of time
      }
    }
  }
}
