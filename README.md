# ⏰ Modern Digital Clock with Smart Greeting Feature

Aplikasi penunjuk waktu nyata (*real-time clock*) yang interaktif berbasis **Vanilla JavaScript**. Aplikasi ini tidak hanya menampilkan jam, menit, dan detik secara akurat, melainkan juga mampu mendeteksi waktu setempat untuk memberikan teks sapaan dinamis beserta transformasi skema warna latar belakang yang adaptif.

Sangat direkomendasikan bagi siswa SMK Jurusan RPL kelas dasar untuk memahami manajemen asinkronus `setInterval` dan pemanfaatan fungsi bawaan kelas `Date()` JavaScript.

---

## 🚀 Fitur Utama

* **Asynchronous Time Tracking:** Memanfaatkan fungsi `setInterval()` untuk memaksa browser mengeksekusi pembaruan data waktu secara terjadwal tepat setiap 1000 milidetik (1 detik).
* **Smart Time-Based Theme Adaptor:** Logika bersarang `if-else` mendeteksi parameter jam saat ini untuk mengubah dekorasi teks sapaan dan variabel warna `body` secara harmonis sesuai siklus waktu (Pagi, Siang, Sore, Malam).
* **Blinking CSS Animation:** Pembatas waktu titik dua (`:`) dibekali animasi keyframes opacity berkelanjutan (*infinite loops*) untuk mensimulasikan karakteristik ketukan detak pada jam digital fisik.
* **String Padding Helper:** Menggunakan operator ternary sederhana untuk menyisipkan karakter string `"0"` di depan angka satuan, menjaga konsistensi tata letak visual komponen agar tidak bergeser.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Kerangka boks panel jam, komponen pembagi waktu, dan metadata teks sapaan
├── style.css        # Layouting Flexbox, animasi kedip keyframes, dan konfigurasi tema variabel
└── script.js        # Instansiasi objek Date, kamus array kalender lokalisasi, dan interval loop
