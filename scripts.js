// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (window.scrollTop > 70 || document.documentElement.scrollTop > 70) {

    var titleText = document.getElementById("lines");
    titleText.style.color = "#32F5F1";
    // titleText.style.textShadow = "0 0 5px goldenrod" 
    // titleText.style.color = '#EE9D00';
    titleText.classList.add("fade");

  } else {
    document.getElementById("lines").style.color = "white";
    var titleText = document.getElementById("lines");
    titleText.classList.remove("fade");
    titleText.style.textShadow = "0 0 5px black"
  }
}
