// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping1()

// function mysterScoping1() {
//     var x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x)
// }

// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';  
//     console.log(x);
//   }
//   console.log(x);
// }

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block'; // This is a different x from the first one
        console.log(x);
    }
    console.log(x);
}

// mysteryScoping2()

//   function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//       var x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x)
// }

// mysteryScoping3()
/*
The issue with this code is that the var keyword has a different scope than the const keyword in JavaScript. Variables declared with var are function-scoped, which means that they are accessible anywhere within the function in which they are defined, regardless of whether they are defined inside an if statement or other block of code. This behavior is often referred to as "hoisting," because variables declared with var are hoisted to the top of the function's scope and initialized to undefined.

Therefore, when the console.log(x) statement is executed outside of the if statement, it logs the value of the variable x that was defined inside the if statement and assigned the value 'in block'. The previous value of x ('out of block') is no longer accessible, because it was shadowed by the variable declaration inside the if statement.
*/



//   function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     console.log(x);
//   }

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = "in block";
//         console.log(x)
//     }
//     console.log(x);
// }

// mysteryScoping4()

//   function mysteryScoping5() {
//     let x = 'out of block'; //Cannot redeclare block-scoped variable 'x'
//     if (true) {
//       let x = 'in block';  
//       console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
//   }

// mysteryScoping5()



function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb} the ${adjective} ${noun}.`)
}

madLib("eat", "tastiest", "food")

function isSubstring(searchString, substring) {

    searchString.includes(substring) ? console.log(true) : console.log(false)

}

isSubstring("Pizza", "za")


function fizzBuzz(array) {
    return array.filter(num => (num % 3 === 0 || num % 5 === 0)
        && num % 15 !== 0);
}

//     names.forEach(function(name) {
//         console.log(name);
//     });

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]))

function isPrime(number) {

    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return number > 1;
}

console.log(isPrime(8))

function isPrime2(number, div = 2) {

    while (div <= number && number % div !== 0) div++; console.log;
    return div > number && number > 1;

}

console.log(isPrime2(2))

function sumOfNPrimes(n) {
    let count = 0;
    let sum = 0;
    for (let i = 2; count < n; i++) {
      if (isPrime2(i)) {
        sum += i;
        count++;
      }
    }
    return sum;
  }
  
console.log(sumOfNPrimes(5))



