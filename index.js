function openCalculator() {
  $('.calculator__open-button').click(function() {
    $('.calculator--opened').removeClass('calculator--hidden');
    $('.calculator--closed').addClass('calculator--hidden');
  });
}

function onInputChange(row) {
  let result;
  let radioValue = $("input[name='operation']:checked").val();
  if (radioValue === 'sum') {
    result =
      Number($(`#number-${row}-1`).val()) +
      Number($(`#number-${row}-2`).val()) +
      Number($(`#number-${row}-3`).val());

    $(`#number-row-${row}-res`).val(result);
  } else {
    result =
      Number($(`#number-${row}-1`).val()) *
      Number($(`#number-${row}-2`).val()) *
      Number($(`#number-${row}-3`).val());

    $(`#number-row-${row}-res`).val(result);
  }
}

function closeCalculator() {
  $('.calculator__close-button').click(function() {
    $('.calculator--opened').addClass('calculator--hidden');
    $('.calculator--closed').removeClass('calculator--hidden');
  });
}

function onRadioButtonClick() {
  onInputChange(row);
}

function onBoxClicked(row) {
  let boxChecked = $(`#select__checkbox-${row}`);
  boxChecked.click(function() {
    let rows = Array.from($('calculations-view__row'));
    for (let i = 1; i <= rows.length; i++) {
      if (boxChecked) {
        rows[i].addClass('row-selected');
      }
    }
  });
}
