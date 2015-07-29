QUnit.test("Natural Number Sequence", function (assert) {
  assert.deepEqual(naturalNumberSequence(1), [ 1 ], "naturalNumbers(1) returns [ 1 ]");
  assert.deepEqual(naturalNumbers(2), [ 1, 2 ], "naturalNumbers(2) returns [ 1, 2 ]");
  assert.raises(function () { naturalNumberSequence(-1); },
                Error("The input must be a positive number."),
                "naturalNumbers(-1) throws an error.");
  assert.raises(function () { naturalNumberSequence(1.1); },
                Error("The input must be an integer."),
                "naturalNumbers(1.1) throws an error.");
});

QUnit.test("Odd Number Sequence", function (assert) {
  assert.deepEqual(oddNumberSequence(1), [ 1 ], "oddNumbers(1) returns [ 1 ]");
  assert.deepEqual(oddNumberSequence(2), [ 1, 2 ], "naturalNumbers(2) returns [ 1, 2 ]");
});