# Struktur file pada website lernen berbasis next.js

```
LERNEN-STATIC/
├── .next/
├── components/
│   ├── BlogList.js
│   ├── CTA.js
│   ├── Footer.js
│   └── Navbar.js
├── lib/
│   └── posts.js
├── node_modules/
├── out/                  ← hasil export dari `next export`
├── pages/
│   ├── api/
│   ├── blog/
│   │   └── index.js
│   ├── posts/
│   │   └── [slug].js     ← halaman dinamis berdasarkan markdown
│   ├── _app.js
│   ├── _document.js
│   ├── core-program.js
│   ├── index.js
│   ├── mini-course.js
│   └── scholarship-care.js
├── posts/                ← markdown blog post disimpan di sini
│   ├── 2025-04-22-beasiswa_2025.md
│   ├── 2025-04-27-strategi_beasiswa_2025.md
│   └── 2025-04-28-7_best_country.md
├── public/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
└── README.md
```

Eksekusi :

npm run dev → Menjalankan Next.js dalam mode development (localhost, hot reload).

npm run build → Membuat versi production build (untuk deploy).

npm run export → Mengekspor Next.js ke static HTML files (SSG) ke folder out/.