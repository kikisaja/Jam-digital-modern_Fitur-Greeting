// --- 1. SELEKSI ELEMEN DOM ---
const txtGreeting = document.getElementById("greeting-text");
const txtDate = document.getElementById("date-text");

const displayJam = document.getElementById("txt-jam");
const displayMenit = document.getElementById("txt-menit");
const displayDetik = document.getElementById("txt-detik");
const boxDetik = document.querySelector(".time-box-seconds");

// Array nama hari dan bulan dalam Bahasa Indonesia
const DAFTAR_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const DAFTAR_BULAN = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// --- 2. FUNGSI UTAMA: PEMBARUAN WAKTU NYATA ---
function perbaruiJamDigital() {
    // Membuat instansiasi objek tanggal saat ini
    const sekarang = new Date();

    // A. Ambil Data Waktu (Jam, Menit, Detik)
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();
    const detik = seconds = sekarang.getSeconds();

    // Ganti teks teks jam di HTML, pastikan formatnya dua digit menggunakan helper function
    displayJam.innerText = tambahkanNol(jam);
    displayMenit.innerText = tambahkanNol(menit);
    displayDetik.innerText = tambahkanNol(detik);

    // B. Ambil Data Tanggal Lengkap
    const namaHari = DAFTAR_HARI[sekarang.getDay()];
    const tanggal = sekarang.getDate();
    const namaBulan = DAFTAR_BULAN[sekarang.getMonth()];
    const tahun = sekarang.getFullYear();

    txtDate.innerText = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;

    // C. Kondisional Sapaan (Greeting) & Perubahan Tema Warna
    aturTemaWarnaDanSapaan(jam);
}

// --- 3. FUNGSI KONDISIONAL: ATUR SAPAAN & VARIABEL CSS ---
function aturTemaWarnaDanSapaan(jam) {
    let sapaan = "";
    let warnaLatar = "";
    let warnaAksenDetik = "";

    if (jam >= 4 && jam < 11) {
        sapaan = "Selamat Pagi Sayangku! 🌅⛅";
        warnaLatar = "#fef3c7"; // Kuning pastel lembut
        warnaAksenDetik = "#ffb703"; // Kuning Pop
    } else if (jam >= 11 && jam < 15) {
        sapaan = "Selamat Siang Kiki! ☀️😎";
        warnaLatar = "#e0f7fa"; // Biru pastel langit
        warnaAksenDetik = "#00f0ff"; // Cyan Pop
    } else if (jam >= 15 && jam < 18) {
        sapaan = "Selamat Sore Bestie! 🌇☕";
        warnaLatar = "#fce4ec"; // Pink pastel senja
        warnaAksenDetik = "#ff477e"; // Pink Pop
    } else {
        sapaan = "Selamat Malam! 🌌💤";
        warnaLatar = "#ede7f6"; // Ungu pastel malam
        warnaAksenDetik = "#06d6a0"; // Hijau Mint Pop (sebagai kontras malam)
    }

    // Suntik teks sapaan ke halaman
    txtGreeting.innerText = sapaan;

    // Ganti properti warna global CSS via JavaScript DOM
    document.body.style.backgroundColor = warnaLatar;
    boxDetik.style.backgroundColor = warnaAksenDetik;
}

// --- 4. FUNGSI PEMBANTU (HELPER): FORMAT DUA DIGIT ---
// Mengubah angka satuan menjadi dua digit (misal: angka 5 berubah menjadi "05")
function tambahkanNol(angka) {
    return angka < 10 ? "0" + angka : angka;
}

// --- 5. EKSEKUSI INTERVAL ASINKRONUS ---
// Jalankan fungsi sekali di awal agar tampilan tidak kosong saat web dimuat
perbaruiJamDigital();

// Atur agar fungsi dipanggil otomatis oleh browser setiap 1000 milidetik (1 detik)
setInterval(perbaruiJamDigital, 1000);
