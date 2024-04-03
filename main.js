(function () {
  let images = [
    "assets/img/1.png",
    "assets/img/2.png",
    "assets/img/3.png",
    "assets/img/4.png",
    "assets/img/5.png",
  ];
  let ganti = 0;
  setInterval(imageChg, 1500);
  function imageChg() {
    document.getElementById("image").setAttribute("src", images[ganti]);
    ganti++;
    if (ganti === images.length) {
      ganti = 0;
    }
  }
})();
