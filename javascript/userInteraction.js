/* scroll action */

let imgPortrait = { element: null, opacity: 1 };
let imgWorkplace = { element: null, opacity: 1 };
let mainArea = document.getElementById("main-area");

mainArea.addEventListener("wheel", function (e) {
  scroll(e.deltaY);
});

let scrollPos = 0;

function scroll(delta) {
  imgPortrait.element = document.getElementById("portrait");
  imgWorkplace.element = document.getElementById("workplace");

  if (delta > 0) {
    scrollPos++;

    // fade out portrait image
    if (scrollPos <= 10) {
      imgPortrait.opacity -= 0.1;
      imgPortrait.element.style.opacity = imgPortrait.opacity;
    } else {
      imgPortrait.element.style.opacity = 0;
    }
  } else if (delta < 0 && scrollPos > 0) {
    scrollPos--;

    // fade in portrait image
    if (scrollPos <= 10) {
      imgPortrait.element = document.getElementById("portrait");
      imgPortrait.opacity += 0.1;
      imgPortrait.element.style.opacity = imgPortrait.opacity;
    }
  }
  console.log(scrollPos);
  console.log(imgPortrait.element.style.opacity);
}

function inRange(x, start, end) {
  if (x > start && x < end) {
    return true;
  }
  return false;
}

