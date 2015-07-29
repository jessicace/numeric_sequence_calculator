QUnit.test("Natural Number Sequence", function (assert) {
  assert.deepEqual(naturalNumberSequence(1), [ 1 ], "naturalNumberSequence(1) returns [ 1 ]");
  assert.deepEqual(naturalNumberSequence(2), [ 1, 2 ], "naturalNumberSequence(2) returns [ 1, 2 ]");
  // assert.raises(function () { naturalNumberSequence(-1); },
//                Error("The input must be a positive number."),
//                "naturalNumbers(-1) throws an error.");
//  assert.raises(function () { naturalNumberSequence(1.1); },
//                Error("The input must be an integer."),
//               "naturalNumbers(1.1) throws an error.");
});

QUnit.test("Odd Number Sequence", function (assert) {
  assert.deepEqual(oddNumberSequence(1), [ 1 ], "oddNumberSequence(1) returns [ 1 ]");
  assert.deepEqual(oddNumberSequence(2), [ 1 ], "oddNumberSequence(2) returns [ 1 ]");
});

QUnit.test("Even Number Sequence", function (assert) {
  assert.deepEqual(evenNumberSequence(1), [], "evenNumberSequence(1) returns [ ]");
  assert.deepEqual(evenNumberSequence(2), [ 2 ], "evenNumberSequence(2) returns [ 2 ]");
});

QUnit.test("Three & Five Number Sequence", function (assert) {
  var values = threeFiveSequence(15);
  assert.deepEqual(values[0], 1, "The first value should be '1'.");
  assert.deepEqual(values[2], 'C', "The third value should be 'C'.");
  assert.deepEqual(values[4], 'E', "The fifth value should be 'E'.");
  assert.deepEqual(values[14], 'Z', "The 15th value should be 'Z'.");
});