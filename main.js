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

// let image = document.getElementById("image");
// let images = [
//   "assets/img/1.png",
//   "assets/img/2.png",
//   "assets/img/3.png",
//   "assets/img/4.png",
//   "assets/img/5.png",
// ];

// setInterval(() => {
//   console.log("image.src");
// }, 2000);

// // setInterval(function () {
// //   let random = Math.floor(Math.random() * 5);
// //   image.src = images[random];
// // }, 1200);
