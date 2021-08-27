function topnavbar() {
  var x = document.getElementById("idhomeindexmenu");
  if (x.className === "homeindexmenuclass") {
    x.className += " responsive";
  } else {
    x.className = "homeindexmenuclass";
  }
}