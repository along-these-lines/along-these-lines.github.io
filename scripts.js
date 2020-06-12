// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

    titleText = document.getElementById("lines");
    titleText.style.color = '#EE9D00';
    titleText.classList.add("fade");

  } else {
    document.getElementById("lines").style.color = "white";
    titleText = document.getElementById("lines");
    titleText.classList.remove("fade");
  }
}
