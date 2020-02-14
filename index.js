function openCalculator() {
  $('.calculator__open-button').click(function() {
    $('.calculator--opened').removeClass('calculator--hidden');
    $('.calculator--closed').addClass('calculator--hidden');
  });
}

function onInputChange(row) {
  let result =
    Number($(`#number-${row}-1`).val()) +
    Number($(`#number-${row}-2`).val()) +
    Number($(`#number-${row}-3`).val());

  $(`#number-row-${row}-res`).val(result);
}

function closeCalculator() {
  $('.calculator__close-button').click(function() {
    $('.calculator--opened').addClass('calculator--hidden');
    $('.calculator--closed').removeClass('calculator--hidden');
  });
}
