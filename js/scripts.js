$(document).ready(function(){
  $("userForm").submit(function(event){
    debugger;
    event.preventDefualt();
    var userNum = $("#userInput").val();
    if (beepBoop(userNum).length > 50) {
      $("#displayUl").text("That is a long number!")
    } else {
      beepBoop(userNum).forEach(function(each){
        $("#displayUl").text(each)
      })
    }
    function beepBoop(userNum) {
      if (userNum >= 1) {
        var returnArray = [];
        var expression1 = /1/g;
        var expression2 = /0/g;
        for (var i = 1; i <=userNum; i++) {
          var stringIndex = String(i);
          if (!(i % 3)) {
            returnArray.push("I'm sorry, Dave. I'm afraid I can't do that.")
          } else if (expression1.test(stringIndex)) {
            returnArray.push("Boop!");
          } else if (expression2.test(stringIndex)) {
            returnArray.push("Beep!");
          } else {
            returnArray.push(i);
          }
        }
      }
    }
  })
})
