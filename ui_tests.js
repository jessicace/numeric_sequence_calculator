// Numeric Sequence Calculator Testing
casper.test.begin('UI Testing Numeric Sequence Calculator', function suite(test) {
  casper.start("./index.html", function() {
    test.assertTitle("Numeric Sequence Calculator", "Numeric Sequence Calculator title is expected");
    test.assertExists('#instructions', "Instructions exist");
    test.assertExists('input', "text input is found");
    this.fill('form', { 'number': "20" }, false);
  });

  casper.run(function() {
    test.done();
  });
});