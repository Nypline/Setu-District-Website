function changeImage() {
  var menuImage = document.getElementById("menu");
  if (window.innerWidth > 720) {
    menuImage.src = "image/menu-list-right.png";
  } else {
    if (menuImage.src.endsWith("image/menu-list-left.svg")) {
      menuImage.src = "image/menu-list-right.png";
    } else if (menuImage.src.endsWith("image/menu-list-right.png")) {
      menuImage.src = "image/menu-list-left.svg";
    }
  }
}

function myFunction() {
  let x = document.getElementById("hamburger-div");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    x.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function checkScreenWidth() {
  let x = document.getElementById("hamburger-div");
  if (window.innerWidth > 720) {
    x.style.display = "none";
    document.body.style.overflow = "auto";
    changeImage();
  }
}

window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();
