for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  console.log(document.querySelectorAll(".drum")[i].innerHTML);

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    var name = getFileName(this.innerHTML);
    playAudio(name);
    addAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  console.log(event.key);
  var name = getFileName(event.key);
  playAudio(name);
  addAnimation(event.key);
});

function getFileName(inner) {
  var name;
  switch (inner) {
    case "w":
      name = "tom-1";
      break;
    case "a":
      name = "tom-2";
      break;
    case "s":
      name = "tom-3";
      break;
    case "d":
      name = "tom-4";
      break;
    case "j":
      name = "snare";
      break;
    case "k":
      name = "kick-bass";
      break;
    case "l":
      name = "crash";
      break;
    default:
      name = "crash";
      break;
  }
  return name;
}
function playAudio(string) {
  console.log(string);
  var audio = new Audio("sounds/" + string + ".mp3");
  audio.play();
}

function addAnimation(value) {
  document.querySelector("." + value).classList.add("darken");
  setTimeout(function () {
    document.querySelector("." + value).classList.remove("darken");
  }, 100);
}
