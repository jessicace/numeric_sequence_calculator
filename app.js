window.onload = function () {
  $('#calculate').click(calculateNumericSequences);
}

function calculateNumericSequences(event) {
  var number = $('#number').val();
  var numericSequences = [];
  numericSequences.push(naturalNumbers(number));
  numericSequences.push(oddNumbers(number));
  numericSequences.push(evenNumbers(number));
  numericSequences.push(fizzBuzz(number));
  console.log(numericSequences.join("\n"));
  // $('#result').text(numericSequences.join("\n"));
}

function naturalNumbers(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    result.push(i);
  }
  return result.join(', ');
}

function oddNumbers(number) {
  var result = [];
  for (var i = 1; i <= number; i += 2) {
    result.push(i);
  }
  return result.join(', ');
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
