const RetentionCalc = (value, percentage) => {

    value = value.replace("R$ ", "").replace(/\./g, '').replace(",", ".");
    value = parseFloat(value);
    if (typeof percentage === "string") {
      percentage = parseFloat(percentage.replace("%", ""));
    }
    let result = value * (percentage / 100);
    if (isNaN(result)) {
      return "R$ 0,00"
    }
    function addDots(number) {
      let a = number.toString().split(".")

      var numberString = a[0];
      var formattedNumber = '';

      while (numberString.length > 3) {
        formattedNumber = '.' + numberString.substr(numberString.length - 3) + formattedNumber;
        numberString = numberString.substring(0, numberString.length - 3);
      }

      formattedNumber = numberString + formattedNumber;
      return `R$ ${formattedNumber},${a[1]}`;
    }
    return addDots(result.toFixed(2));
  }

  export default RetentionCalc