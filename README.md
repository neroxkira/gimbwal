# Nembak Cewe Proposal Website

Website buat nembak cewe dengan fitur button yang kabur dan musik otomatis.

## 🎮 Cara Pakai

### Deploy ke Vercel
1. Fork repository ini
2. Buka [Vercel](https://vercel.com)
3. Import repository yang sudah di fork
4. Deploy

### Deploy Local
1. Clone repository ini
2. Buka terminal, ketik:
```bash
npm install
npm start
```

## 🛠 Cara Mengubah Konten

### 1. Mengubah Teks dan Gambar
Di file `script.js`, cari bagian ini:
```javascript
const messages = [
    {
        text: "plss mau dong",
        image: "URL_GAMBAR_1"
    },
    {
        text: "pls klik yg kiri",
        image: "URL_GAMBAR_2"
    },
    {
        text: "terakhir, kalo \"no\" yauda deh",
        image: "URL_GAMBAR_3"
    }
];
```
Ganti teks dan URL gambar sesuai keinginan.

### 2. Mengubah Pertanyaan Awal
Di file `index.html`, cari:
```html
<h1 class="title">Will you be my girlfriend?</h1>
```
Ganti teksnya sesuai keinginan.

### 3. Mengubah Musik
Di file `index.html`, cari bagian `<audio>`, ganti `src` dengan URL musik kamu:
```html
<audio id="bgMusic" loop>
    <source src="URL_MUSIK_KAMU" type="video/mp4">
</audio>
```

### 4. Mengubah Pesan Akhir
Di file `script.js`, cari:
```javascript
yesBtn.addEventListener('click', () => {
    title.innerHTML = "HORE!! maaacccciiii paannii cantikkkkkk 🤏🏻🤏🏻;
    document.querySelector('img').src = "URL_GAMBAR_AKHIR";
});
```
Ganti teks dan URL gambar sesuai keinginan.

## 🎨 Fitur
- Tombol "No" yang kabur ketika di hover/klik
- Musik otomatis main (volume 30%)
- Animasi hati jatuh
- Responsive di HP dan PC
- Pesan dan gambar berubah setiap klik "No"
- Support semua browser

## 👨‍💻 Author
**Nerox**
- Instagram: [@niorxugood](https://instagram.com/niorxugood)
- TikTok: [@niorxugood](https://tiktok.com/@niorxugood)

## 📝 License
Copyright © 2024 Nerox.
All rights reserved.

## 💝 Tips
- Gunakan gambar GIF untuk animasi yang lebih menarik
- Pastikan URL gambar dan musik valid
- Test dulu di HP sebelum dikirim ke doi
- Musik yang direkomendasikan: lagu romantis yang viral di TikTok
