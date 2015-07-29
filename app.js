function naturalNumbers(event) {
  var result = [];
  var number = event.toElement.innerHTML;
  for (var i = 0; var <= number; i++) {
    result.push(i);
  }
  return result.join(',');
}

window.onload = function () {
  var string = $("#calculate").click(naturalNumbers);
  $('#result').text(string);
}