QUnit.test("Natural Number Sequence should return all numbers up to and including the number entered.", function (assert) {
  assert.deepEqual(naturalNumberSequence(1), [ 0, 1 ], "naturalNumberSequence(1) returns [ 0, 1 ]");
  assert.deepEqual(naturalNumberSequence(2), [ 0, 1, 2 ], "naturalNumberSequence(2) returns [ 1, 2 ]");
  assert.deepEqual(naturalNumberSequence(15), [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], "naturalNumberSequence(15) returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]");
});

QUnit.test("Odd Number Sequence should return all odd numbers up to and including the number entered.", function (assert) {
  assert.deepEqual(oddNumberSequence(1), [ 1 ], "oddNumberSequence(1) returns [ 1 ]");
  assert.deepEqual(oddNumberSequence(2), [ 1 ], "oddNumberSequence(2) returns [ 1 ]");
});

QUnit.test("Even Number Sequence should return all even numbers up to and including the number entered.", function (assert) {
  assert.deepEqual(evenNumberSequence(1), [ 0 ], "evenNumberSequence(1) returns [ 0 ]");
  assert.deepEqual(evenNumberSequence(2), [ 0, 2 ], "evenNumberSequence(2) returns [ 0, 2 ]");
});

QUnit.test("Three & Five Number Sequence should return all numbers up to and including the number entered, except:\n it should output 'C' when a number is a multiple of 3; it should output 'E' when it is a multiple of 5; and it should output 'Z' when it is a multiple of both 3 and 5.", function (assert) {
  var expectedOutput = [ 0, 1, 2, 'C', 4, 'E', 'C', 7, 8, 'C', 'E', 11, 'C', 13, 14, 'Z' ]
  var output = threeFiveSequence(15);
  assert.deepEqual(output[0], expectedOutput[0], "The first value should be '0'.");
  assert.deepEqual(output[3], expectedOutput[3], "The fourth value should be 'C'.");
  assert.deepEqual(output[5], expectedOutput[5], "The sixth value should be 'E'.");
  assert.deepEqual(output[15], expectedOutput[15], "The 16th value should be 'Z'.");
  assert.deepEqual(output, expectedOutput, "threeFiveSequence(15) should return [ 0, 1, 2, 'C', 4, 'E', 'C', 7, 8, 'C', 'E', 11, 'C', 13, 14, 'Z' ]");
});

QUnit.test("Fibonacci Sequence should return all fibonacci numbers, up to and including the number entered.", function (assert) {
  var expectedOutput = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
  var output = fibonacciSequence(150);
  assert.deepEqual(output.length, expectedOutput.length, "fibonacciSequence(150) should have 13 values.");
  assert.deepEqual(output, expectedOutput, "fibonacciSequence(150) should return [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]." )
});

QUnit.test("isValid should return true if it is a positive, whole number.", function (assert) { 
  assert.deepEqual(isValid(1), true, "isValid(1) returns true, as 1 is a valid number.");
  assert.raises(function () { isValid(-1); },
                Error("The input must be a positive number."),
                "isValid(-1) throws an error.");
  assert.raises(function () { isValid(1.1); },
                Error("The input must be an integer."),
                "isValid(1.1) throws an error.");
});

QUnit.test("numericSequences(input) should return 5 separate number sequences.", function (assert) {
  assert.deepEqual(numericSequences(1).length, 5, "numericSequences returns 5 separate number sequences.");
});