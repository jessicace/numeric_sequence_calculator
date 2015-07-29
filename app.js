function calculateNumericSequences(event) {
  var number = parseInt($('#number').val());
  isValid(number);
  var numericSequences = [];
  numericSequences.push(naturalNumberSequence(number));
  numericSequences.push(oddNumberSequence(number));
  numericSequences.push(evenNumberSequence(number));
  numericSequences.push(fizzBuzz(number));
  numericSequences.push(fibonacciSequence(number));
  console.log(numericSequences.join("\n"));
  // $('#result').text(numericSequences.join("\n"));
}

function naturalNumberSequence(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    result.push(i);
    }
  return result;
}

function oddNumberSequence(number) {
  isValid(number);
  var result = [];
  for (var i = 1; i <= number; i += 2) {
    result.push(i);
  }
  return result;
}

function evenNumberSequence(number) {
  var result = [];
  for (var i = 0; i <= number; i += 2) {
    result.push(i);
  }
  return result;
}

function threeFiveSequence(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      result.push('Z');
    }
    else if (i % 3 == 0) {
      result.push('C');
    }
    else if (i % 5 == 0) {
      result.push('E');
    }
    else {
      result.push(i);
    }
  }
  return result;
}

// Returns all fibonacci numbers up to and including the number entered.
function fibonacciSequence(number) {
  var result = [];
  var value1 = 0;
  var value2 = 1;
  var fibonacciNumber = 0;

  for (fibonacciNumber; fibonacciNumber <= number; fibonacciNumber += value1) {
    result.push(fibonacciNumber);
    value1 = value2;
    value2 = fibonacciNumber;
  }
  return result;
}

window.onload = function () {
  $('#calculate').click(calculateNumericSequences);
}

// An input is valid if the following is satisfied:
// 1. It is a positive value.
// 2. It is an integer.
function isValid(input) {
  if (input < 1) throw new Error("The input must be a positive number.");
  if (Math.floor(input) !== input) throw new Error("The input must be an integer.");
};