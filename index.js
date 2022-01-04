//button click function
function clickingFunction() {
  $(".btn").on("click", function (event) {
    console.log(event.target.id);
    $("." + event.target.id).addClass("pressed");
    setTimeout(function () {
      $("." + event.target.id).removeClass("pressed");
    }, 100);
  });
}

var arrOfColor = ["green", "red", "yellow", "blue"];
function lightUpRandom() {
  var randomNumber = Math.floor(Math.random() * 4);
  $("." + arrOfColor[randomNumber]).addClass("pressed");
  setTimeout(function () {
    $("." + arrOfColor[randomNumber]).removeClass("pressed");
  }, 1000);
}

function patternRendering() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      lightUpRandom();
    }, 5000);
  }
}
$("h1").on("click", patternRendering);
