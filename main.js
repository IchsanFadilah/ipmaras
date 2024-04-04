(function () {
  let images = [
    "assets/img/Illustrasi-1.png",
    "assets/img/Illustrasi-2.png",
    "assets/img/Illustrasi-3.png",
    "assets/img/Illustrasi-4.png",
    "assets/img/Illustrasi-5.png",
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

// (function () {
//   let bgColor = ["#f1601e", "dbc9ff", "#f7dbe3", "#91a8b3", "#01b679"];

//   let ganti1 = 0;
//   setInterval(bgChg, 1500);
//   function bgChg() {
//     document.querySelector("body").style.backgroundColor = bgColor[ganti1];
//     setTimeout();
//   }
// });

let bg = 0;
let il = 0;

function bgChg() {
  let bgColors = document.getElementById("banner");
  let imgIl = document.getElementById("image");
  // let bgColor1 = ["#f1601e", "#dbc9ff", "#f7dbe3", "#91a8b3", "#01b679"];
  let bgColor = ["#01b679", "#91a8b3", "#f1601e", "#dbc9ff", "#f7dbe3"];
  let images = [
    "assets/img/Illustrasi-1.png",
    "assets/img/Illustrasi-2.png",
    "assets/img/Illustrasi-3.png",
    "assets/img/Illustrasi-4.png",
    "assets/img/Illustrasi-5.png",
  ];
  bgColors.style.backgroundColor = bgColor[bg];
  imgIl.setAttribute("src", images[il]);
  // bg = (bg + 1) % bgColor.length;
  // il = (il + 1) % images.length;
  bg++;
  if (bg === bgColor.length) {
    bg = 0;
  }
  il++;
  if (il === images.length) {
    il = 0;
  }
}
setInterval(bgChg, 1500);
