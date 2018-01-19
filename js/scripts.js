function beepBoop(userNum) {
  if (userNum >= 1) {
    var returnArray = [];
    var expression1 = /1/g;
    var expression2 = /0/g;
    for (var i = 1; i <= userNum; i++) {
      var stringIndex = String(i);
      if (!(i % 3)) {
        console.log(returnArray);
        returnArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (expression2.test(stringIndex)) {
        returnArray.push("Boop!");
        console.log(returnArray);
      } else if (expression1.test(stringIndex)) {
        returnArray.push("Beep!");
      } else {
        returnArray.push(i);
      }
    }
    return returnArray;
    console.log(returnArray);
  }
  return false;
}
$(document).ready(function(){
  $("#button").click(function(event) {
    var userNum = parseInt($("#userInput").val());
    if (beepBoop(userNum).length > 50) {
      $("#displayP").text("That is a long number!");
    } else {
      beepBoop(userNum).forEach(function(each) {
        $("#displayP").text(each);
      })
    }
  })
})
