function start(){
  var Name = prompt("Please enter your name", "ai");
  document.getElementById("yourName").innerHTML = Name;
}
$(function() {
  $('.selectImages').hide();
  $('#btnStart').click(function(){
    $('.selectImages').slideDown(1000);
  });
});
var score = 0;
function game(personAnswer){
  while(-300 < score && score < 300){
    var result = "";
    var janken = ["Rock","Scissors","Pepar"];
    var computerAnswer = janken[Math.floor( Math.random() * janken.length)];//Computer pic one of those from array
    document.getElementById("imgComputer").src = "img/" + computerAnswer + ".png";//Show image of computer's answer
    document.getElementById("imgPerson").src = "img/" + personAnswer + ".png";//Show image of computer's answer
    if(personAnswer == computerAnswer){
      result = "Tie";
    }
    if(personAnswer == "Rock"){
      if(computerAnswer == "Scissors"){
        result = "Win";
      }
      if(computerAnswer == "Pepar"){
        result = "Lose";
      }
    }
    if(personAnswer == "Scissors"){
      if(computerAnswer == "Rock"){
        result = "Lose";
      }
      if(computerAnswer == "Pepar"){
        result = "Win";
      }
    }
    if(personAnswer == "Pepar"){
      if(computerAnswer == "Rock"){
        result = "Win";
      }
      if(computerAnswer == "Scissors"){
        result = "Lose";
      }
    }
    if(result == "Win"){
      score = score + 100;
    }
    if(result == "Lose"){
      score = score - 100;
    }
    document.getElementById("Result").innerHTML = personAnswer + "!! " + result;
    document.getElementById("Score").innerHTML = score;
    break;
  }
  if(-300 == score || score == 300){// if score is 300 or -300 game end
    document.getElementById("End").innerHTML = "<p>Game End</p>";
  }
}
