## 🚀 React Vite Tailwind Project

### 🧾 Deskripsi Singkat
Project ini merupakan starter template menggunakan **React** dengan bantuan **Vite** sebagai build tool modern dan **Tailwind CSS** untuk styling yang efisien dan fleksibel. Cocok digunakan untuk pengembangan frontend yang cepat dan modular.

---

### 🛠️ Tools & Library
Berikut adalah tools dan library yang digunakan dalam project ini:

- ⚛️ **React**: Library untuk membangun UI interaktif.
- ⚡ **Vite**: Frontend build tool yang sangat cepat.
- 🎨 **Tailwind CSS**: Utility-first CSS framework.

---

### 📂 Struktur Folder
```
test_suitmedia/
├── public/
├── src/
│   ├── components/
│   │           ├── Header/
│   │           │       ├── list.jsx/              # isiList
│   │           ├── LoadingSkeleton/               # Komponen React
│   │           │       ├── LoadingSkeleton.jsx/   # Loading Skeleton
│   │           ├── Banner.jsx                     # hero section
│   │           ├── Header.jsx                     # navigation bar
│   │           ├── Pagination.jsx                 # pagination
│   │           ├── PostCard.jsx                   # card
│   │           ├── PostGrid.jsx                   # layout menyimpan card
│   ├── components/
│   │           ├── pages.jsx                      # menyimpan semua components
│   ├── App.jsx             # Komponen utama
│   ├── main.jsx            # Entry point aplikasi
│   └── index.css           # File Tailwind CSS
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

### 🧪 Cara Menjalankan Project
Berikut langkah-langkah untuk menjalankan project ini secara lokal:

1. **Clone Repository**
   ```bash
   git clone https://gitlab.com/Reihannnn/project-test-reihanachmadsusilo.git
   cd project-test-reihanachmadsusilo
   git checkout reihan-fix
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```

4. Akses aplikasi di:
   ```
   http://localhost:5173
   ```

---

### ⚙️ Konfigurasi Tailwind
`tailwind.config.js`:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---


---

### 🔌 API Integration
Project ini menggunakan API publik dari Suitmedia untuk menampilkan data artikel atau ide. Berikut adalah konfigurasi endpoint dan parameternya:

```json
{
  "url": "https://suitmedia-backend.suitdev.com/api/ideas",
  "params": {
    "page[number]": 1,
    "page[size]": 10,
    "append[]": ["small_image", "medium_image"],
    "sort": "published_at" // atau "-published_at" untuk descending
  }
}
```

- `page[number]`: Halaman data yang ingin diambil
- `page[size]`: Jumlah item per halaman
- `append[]`: Menambahkan variasi ukuran gambar
- `sort`: Pengurutan berdasarkan tanggal publikasi (`published_at` atau `-published_at`)


### 🙌 Penutup
Project ini ditujukan untuk pembelajaran dan pengembangan antarmuka website menggunakan stack modern yang ringan dan mudah digunakan. Silakan fork, eksplorasi, dan kembangkan sesuai kebutuhan!