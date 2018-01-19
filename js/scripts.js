$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    debugger;
  function count(index) {
    for (var i = 0; i <= index; i++) {
      numberArray.push(i);

    var userInput = parseInt($("#inputNumber").val());
    var numberArray = []
    var result = count(userInput);
  var switchedWords = numberArray.map(function(number){
      if (number % 3 === 0) {
        return "I'm sorry, Dave. I'm afraid I can't let you do that";
      } else if (/1/.test(number)) {
        return "Beep!";
      } else if (/0/.test(number)) {
        return "Boop!";
      } else {
        return "Whoops!";
      }
    });
    return switchedWords;
    console.log(switchedWords)
  }
}
})
})
