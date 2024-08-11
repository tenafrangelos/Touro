// =========================================================//

// Js Gallary FOR SECOND GALLARY

// =========================================================//

var slideImgOfSecond = Array.from(
  document.querySelectorAll(".second_Gallary .image-container a img")
);

//Select array of text img
var textArrOfSecond = Array.from(
  document.querySelectorAll(".second_Gallary .slider-container .text-img")
);

// Get number of slides
var slideCountesOfSecond = slideImgOfSecond.length;

// Get number of textarr
var textLengthOfSecond = textArrOfSecond.length;

// set current index
var currentImageOfSecond = 1;

// Slide Number string
var slideNumberElementOfSecond = document.querySelector(
  ".second_Gallary #slide-number"
);

// Previous and N ext buttons
var nextButtonOfSecond = document.querySelector(".second_Gallary #next");
var prevButtonOfSecond = document.querySelector(".second_Gallary #prev");

// handle click
nextButtonOfSecond.onclick = nextSlideOfSecond;
prevButtonOfSecond.onclick = prevSlideOfSecond;

// Run main function
checkerOfSecond();

// function nextslide
function nextSlideOfSecond() {
  if (nextButtonOfSecond.classList.contains("disabled")) {
    return false;
  } else {
    currentImageOfSecond++;
    checkerOfSecond();
  }
}

// function prevslide
function prevSlideOfSecond() {
  if (prevButtonOfSecond.classList.contains("disabled")) {
    return false;
  } else {
    currentImageOfSecond--;
    checkerOfSecond();
  }
}
// Create the checker function
function checkerOfSecond() {
  // set current slide

  slideNumberElementOfSecond.textContent =
    "slide # " + currentImageOfSecond + " of " + slideCountesOfSecond;

  //remove all active classes

  removeActiveOfSecond();

  // set active class on current slide and text
  slideImgOfSecond[currentImageOfSecond - 1].classList.add("active");
  textArrOfSecond[currentImageOfSecond - 1].classList.add("active");

  // check if current slide is first
  if (currentImageOfSecond == 1) {
    // add disabled in prev button
    prevButtonOfSecond.classList.add("disabled");
  } else {
    // remove class disabled from prev if not the first
    prevButtonOfSecond.classList.remove("disabled");
  }
  if (currentImageOfSecond == slideCountesOfSecond) {
    // add disabled in next button
    nextButtonOfSecond.classList.add("disabled");
  } else {
    // remove class disabled from next if not the end
    nextButtonOfSecond.classList.remove("disabled");
  }
}
//Remove all active classes from images
function removeActiveOfSecond() {
  // Loop through images
  slideImgOfSecond.forEach(function (img) {
    img.classList.remove("active");
  });
  textArrOfSecond.forEach(function (txt) {
    txt.classList.remove("active");
  });
}

// =========================================================//

// Js Galary FOR THIRD GALLARY

// =========================================================//

var slideImgOfThird = Array.from(
  document.querySelectorAll(".third_Gallary .image-container a img")
);

//Select array of text img
var textArrOfThird = Array.from(
  document.querySelectorAll(".third_Gallary .slider-container .text-img")
);

// Get number of slides
var slideCountesOfThird = slideImgOfThird.length;

// Get number of textarr
var textLengthOfThird = textArrOfThird.length;

// set current index
var currentImageOfThird = 1;

// Slide Number string
var slideNumberElementOfThird = document.querySelector(
  ".third_Gallary #slide-number"
);

// Previous and N ext buttons
var nextButtonOfThird = document.querySelector(".third_Gallary #next");
var prevButtonOfThird = document.querySelector(".third_Gallary #prev");

// handle click
nextButtonOfThird.onclick = nextSlideOfThird;
prevButtonOfThird.onclick = prevSlideOfThird;

// Run main function
checkerOfThird();

// function nextslide
function nextSlideOfThird() {
  if (nextButtonOfThird.classList.contains("disabled")) {
    return false;
  } else {
    currentImageOfThird++;
    checkerOfThird();
  }
}
// function prevslide
function prevSlideOfThird() {
  if (prevButtonOfThird.classList.contains("disabled")) {
    return false;
  } else {
    currentImageOfThird--;
    checkerOfThird();
  }
}
// Create the checker function
function checkerOfThird() {
  // set current slide

  slideNumberElementOfThird.textContent =
    "slide # " + currentImageOfThird + " of " + slideCountesOfThird;

  //remove all active classes

  removeActiveOfThird();

  // set active class on current slide and text
  slideImgOfThird[currentImageOfThird - 1].classList.add("active");
  textArrOfThird[currentImageOfThird - 1].classList.add("active");

  // check if current slide is first
  if (currentImageOfThird == 1) {
    // add disabled in prev button
    prevButtonOfThird.classList.add("disabled");
  } else {
    // remove class disabled from prev if not the first
    prevButtonOfThird.classList.remove("disabled");
  }
  if (currentImageOfThird == slideCountesOfThird) {
    // add disabled in next button
    nextButtonOfThird.classList.add("disabled");
  } else {
    // remove class disabled from next if not the end
    nextButtonOfThird.classList.remove("disabled");
  }
}
//Remove all active classes from images
function removeActiveOfThird() {
  // Loop through images
  slideImgOfThird.forEach(function (img) {
    img.classList.remove("active");
  });
  textArrOfThird.forEach(function (txt) {
    txt.classList.remove("active");
  });
}
// =========================================================//

// Js Galary FOR LAST GALLARY

//=========================================================//
var slideImgOfLast = Array.from(
  document.querySelectorAll(".last_Gallary .image-container  img")
);

// Get number of slides
var slideCountesOfLast = slideImgOfLast.length;

// set current index
var currentImageOfLast = 1;

// Previous and N ext buttons
var nextButtonOfLast = document.querySelector(".last_Gallary #next");
var prevButtonOfLast = document.querySelector(".last_Gallary #prev");

// handle click
nextButtonOfLast.onclick = nextSlideOfLast;
prevButtonOfLast.onclick = prevSlideOfLast;

// Run main function
checkerOfLast();

// function nextslide
function nextSlideOfLast() {
  if (nextButtonOfLast.classList.contains("disabled")) {
    return false;
  } else {
    currentImageOfLast++;
    checkerOfLast();
  }
}
// function prevslide
function prevSlideOfLast() {
  if (prevButtonOfLast.classList.contains("disabled")) {
    return false;
  } else {
    currentImageOfLast--;
    checkerOfLast();
  }
}
// Create the checker function
function checkerOfLast() {
  //remove all active classes

  removeActiveOfLast();

  // set active class on current slide
  slideImgOfLast[currentImageOfLast - 1].classList.add("active");

  // check if current slide is first
  if (currentImageOfLast == 1) {
    // add disabled in prev button
    prevButtonOfLast.classList.add("disabled");
  } else {
    // remove class disabled from prev if not the first
    prevButtonOfLast.classList.remove("disabled");
  }
  if (currentImageOfLast == slideCountesOfLast) {
    // add disabled in next button
    nextButtonOfLast.classList.add("disabled");
  } else {
    // remove class disabled from next if not the end
    nextButtonOfLast.classList.remove("disabled");
  }
}
//Remove all active classes from images
function removeActiveOfLast() {
  // Loop through images
  slideImgOfLast.forEach(function (img) {
    img.classList.remove("active");
  });
}

// JS footer
document.querySelector(".footer .columns .col1").onclick = function () {
  document.querySelector(".footer .columns .col1 ul").classList.toggle("open");
};
document.querySelector(".footer .columns .col2").onclick = function () {
  document.querySelector(".footer .columns .col2 ul").classList.toggle("open");
};
document.querySelector(".footer .columns .col3").onclick = function () {
  document.querySelector(".footer .columns .col3 ul").classList.toggle("open");
};
