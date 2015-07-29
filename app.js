function calculateNumericSequences(event) {
  var number = parseInt($('#number').val());
  var numericSequences = [];
  numericSequences.push(naturalNumbers(number));
  numericSequences.push(oddNumbers(number));
  numericSequences.push(evenNumbers(number));
  numericSequences.push(fizzBuzz(number));
  numericSequences.push(fibonacciSequence(number));
  console.log(numericSequences.join("\n"));
  // $('#result').text(numericSequences.join("\n"));
}

function naturalNumberSequence(number) {
  isValid(number);
  var result = [];
  for (var i = 1; i <= number; i++) {
    result.push(i);
    }
  return result;
}

function oddNumberSequence(number) {
  var result = [];
  for (var i = 1; i <= number; i += 2) {
    result.push(i);
  }
  return result;
}

function evenNumbers(number) {
  var result = [];
  for (var i = 2; i <= number; i += 2) {
    result.push(i);
  }
  return result.join(', ');
}

function fizzBuzz(number) {
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
  return result.join(', ');
}

// Returns all fibonacci numbers up to and including the number entered.
function fibonacciSequence(number) {
  var result = [];
  var value1 = 0;
  var value2 = 1;
  var fibonacciNumber = 1;

  for (fibonacciNumber; fibonacciNumber <= number; fibonacciNumber += value1) {
    result.push(fibonacciNumber);
    value1 = value2;
    value2 = fibonacciNumber;
  }
  return result.join(', ');
}

window.onload = function () {
  $('#calculate').click(calculateNumericSequences);
}

function isValid(input) {
  if (input < 1) throw new Error("The input must be a positive number.");
  if (Math.floor(input) !== input) throw new Error("The input must be an integer.");
};