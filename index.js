function onInputChange(row) {
  let result =
    Number($(`#number-${row}-1`).val()) +
    Number($(`#number-${row}-2`).val()) +
    Number($(`#number-${row}-3`).val());

  $(`#number-row-${row}-res`).val(result);
  // console.log(result);
}
