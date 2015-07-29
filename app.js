window.onload = function () {
  $('#calculate').click(calculateNumericSequences);
}

function calculateNumericSequences(event) {
  var number = $('#number').val();
  var numericSequences = [];
  numericSequences.push(naturalNumbers(number));
  numericSequences.push(oddNumbers(number));
  console.log(numericSequences.join("\n"));
  $('#result').text(numericSequences.join("\n"));
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
