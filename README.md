# try gefen Proposal Website

Website.

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
        text: "terima la ryna",
        image: "https://media-hosting.imagekit.io//3c114cf95c494146/IMG_20200531_221725_111_Original.jpeg?Expires=1835172945&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kHx0JNM-irVZ6wXLJNfYf4ZTFoLpO3gAOucZkhPQVUtY--tRlVt9B0CwC8Z~8jdSfZqWFek6QNiCYyUcAm1AjmEJWJp3kDbhS6g5c5mwYJUoLqHTFpHtPIjBLKyckYB0Gh3m2S54~2VpjoKw5L6ZDtr0sZExbPx1u~is9MaKMXCEEUy5Ah~T4rMTlrLzFAtBxnTvQyWqYoG1rMlaoxtv~dkEFPBX8~eepjDHfmwMjmrsMFr4Ug9vnD2c-C4OWia~pwa3fVQQLgvkieKSbKogh7aeXc-1VCRgzUFmvLf7bB5hQUvyW4i2J9X2G5wVjYpavHCBJqNydiblBT9E7ELa7g__"
    },
    {
        text: "pilih yang kanan tu",
        image: "https://media-hosting.imagekit.io//e1429051d8144979/IMG_8240.jpeg?Expires=1835173151&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VZwuOoSRfaTWi4Bp8eQPczCG8fDhRMjug0eWUeVgLJ6N0eZWlb88X6mx6ZoJPZyIYRLqj2rvmtzmsuTmbjmyXSqURO0oGZ4y2fgoDYEM6e85kQUO7xuRW4GftYEND9hlwwH6~hVJP0ZfG4f8~ZVYHUqBA6ulzEXKHfqwXR1QLWecw9~pwHXf1Am8tZgRMYuH3WjjZ0CzVwIIOp5aLhoh9QMoqIMFxiAteFpPaJxmuAd3WCu8RfvVzsyVOPEO4ZA9hR6TE8fBIZg1JIdusUpBduPo-sOQDKKC~9MpuUdLMhjSvQHYud8KOu0A4nTIDX7tN6TWL57CBFq~9mwTRjHMXw__"
    },
    {
        text: "last eh kalau tanak takpela",
        image: "https://media-hosting.imagekit.io//22ceda0fe798400c/IMG_8242.jpeg?Expires=1835172846&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w6RG9KYUmZuGW75ahbHhgVbRJKlN-HCJEjFjcxpwYzBFv0v94PMZQiHGCLDOip1Mi3QTa~AVUN04rBCOuB9yHsRXnML8CFe8p4iXrUZnViO4vojnlpvjhnysNa6h-BSYDBorL3e1sXoSCOJKFSiG0FHBvWndLztZfMKW7F~STQfYrdftV6ulOC3MN5c8~09rBHHp1HnNq-ujhk3DQgD6ppNNkfRIxHHMYkOKYARtRw02IjziZdqGB20Ft~RBA2bRZD5ZGfYBMrOLNIf08EOQ7T8h1NE2Nq1dpkMnUwrMfALvS4SeJIklD4I7r5OMHOjAj-obH2MzHAn6uNa3PXELXA__"
    }
];
```
Ganti teks dan URL gambar sesuai keinginan.

### 2. Mengubah Pertanyaan Awal
Di file `index.html`, cari:
```html
<h1 class="title">nak jadi gefen saya tak?</h1>
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
    title.innerHTML = "yes finnalyy , hehe diaa suka tak macamni";
    document.querySelector('img').src = "URL_GAMBAR_AKHIR";
});
```
Ganti teks dan URL gambar sesuai keinginan.

