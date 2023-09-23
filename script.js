document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.getElementById("side-menu");

  function increaseOpacity() {
    let opacity = 0;
    const increment = 0.1;
    const interval = 50;

    function changeOpacity() {
      opacity += increment;
      if (opacity <= 1.0) {
        sideMenu.style.opacity = opacity.toString();
        setTimeout(changeOpacity, interval);
      }
    }

    changeOpacity();
  }

  function ShowDashBoard() {
    if (sideMenu.style.display == "grid") {
      sideMenu.style.display = "none";
    } else {
      sideMenu.style.display = "grid";
      increaseOpacity();
    }
  }

  menuButton.addEventListener("click", ShowDashBoard);
});
