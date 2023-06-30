// Togle Class Active //
const navbarMenu = document.querySelector(".menu");

// Ketika di Klik //
document.querySelector("#bars").onclick = () => {
  navbarMenu.classList.toggle("active");
};

//Klik di Luar Sidebar tuk hilangkan menu//
const bars = document.querySelector("#bars");

document.addEventListener("click", function (e) {
  if (!bars.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});

$(document).ready(function () {
  $("#mu-slider").slick({
    // Konfigurasi opsi slider
    // Misalnya, untuk mengaktifkan tampilan panah navigasi sebelum dan sesudah slider, Anda dapat menggunakan kode berikut:
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });
});
