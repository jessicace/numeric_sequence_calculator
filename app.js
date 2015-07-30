window.onload = function () {
  $('form').submit(function (event) {
    event.preventDefault();
    displayNumericSequences();
  });
}

function displayNumericSequences() {
  // Remove error messages and previous results
  $('#error').text('');
  $('#result').empty();

  // Validate numbers
  var number = parseFloat($('#number').val());

  // If an error is encountered, the error span will be updated.
  try {
    isValid(number);
  } catch (error) {
    $('#error').text(error.message);
  }
  
  var sequences = numericSequences(number);
  // List items are appended to the result list.
  for (var index in sequences) {
    $('<li class="numeric-sequence" id=' + index + '>' + sequences[index].join(', ') + '</li>').appendTo('#result');
  }
}

function numericSequences(number) {
  var numericSequences = [];
  numericSequences.push(naturalNumberSequence(number));
  numericSequences.push(oddNumberSequence(number));
  numericSequences.push(evenNumberSequence(number));
  numericSequences.push(threeFiveSequence(number));
  numericSequences.push(fibonacciSequence(number));
  return numericSequences;
}

function naturalNumberSequence(number) {
  var result = [];
  for (var i = 0; i <= number; i++) {
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

// Returns all even numbers up to the number entered.
function evenNumberSequence(number) {
  var result = [];
  for (var i = 0; i <= number; i += 2) {
    result.push(i);
  }
  return result;
}

// It should return all numbers up to and including the number entered, except:
// it should output 'C' when a number is a multiple of 3; 
// it should output 'E' when it is a multiple of 5; 
// and it should output 'Z' when it is a multiple of both 3 and 5.
function threeFiveSequence(number) {
  var result = [ 0 ];
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

// An input is valid if the following is satisfied:
// 1. It is a positive value.
// 2. It is an integer.
function isValid(input) {
  if (input < 1) throw new Error("The input must be a positive number.");
  if (Math.floor(input) !== input) throw new Error("The input must be an integer.");
  return true;
};