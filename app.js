window.onload = function () {
  $("#calculate").click(naturalNumbers);

  function naturalNumbers(event) {
    var result = [];
    var number = $('#number').val();
    console.log(number);
    for (var i = 1; i <= number; i++) {
      result.push(i);
    }
    console.log(result);
    $('#result').text(result.join(', '));
  }
}