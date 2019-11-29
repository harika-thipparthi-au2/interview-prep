let maxLength = 10;
$('input').keyup(function() {
  let textlength = maxLength - $(this).val().length;
  $('#remainingChars').text(textlength);
});
