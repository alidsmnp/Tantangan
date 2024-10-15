// Mengambil elemen untuk dialog dan tombol
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("close-dialog");
const readMeButton = document.getElementById("read-me");
const goToSiteButton = document.getElementById("go-to-site");
const checkmark = document.getElementById("checkmark");

// Menampilkan dialog box saat halaman dimuat
window.onload = () => {
    dialog.classList.remove("hidden");
    dialog.classList.add("visible");
};

// Menangani event klik untuk menutup dialog
closeDialogButton.addEventListener("click", () => {
    dialog.classList.remove("visible");
    dialog.classList.add("hidden");
    checkmark.classList.remove("show"); // Menyembunyikan ceklis saat dialog ditutup
});

// Menangani event klik untuk tombol "Baca README"
readMeButton.addEventListener("click", () => {
    checkmark.classList.add("show"); // Menampilkan ceklis saat tombol diklik
    window.location.href = "https://alidsmnp.github.io/Readme/"; // Ganti dengan jalur README yang sesuai
});

// Menangani event klik untuk tombol "Kunjungi Situs"
goToSiteButton.addEventListener("click", () => {
    checkmark.classList.add("show"); // Menampilkan ceklis saat tombol diklik
    window.location.href = "https://www.instagram.com/alidlodkdksi/profilecard/?igsh=MW5qazA5czlmaTdhZA=="; // Ganti dengan URL situs yang sesuai
});