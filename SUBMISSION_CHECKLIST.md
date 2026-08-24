# Checklist Submission Automation Testing & CI/CD RuangSuara

## Kriteria wajib

- [x] Registrasi dan login akun
- [x] Daftar thread dan detail beserta komentar
- [x] Membuat thread dan komentar (pengguna terautentikasi)
- [x] Loading indicator untuk proses API
- [x] Konfigurasi ESLint dan lint tanpa error
- [x] React Strict Mode
- [x] State API berada pada Redux Store
- [x] REST API hanya dipanggil di asynchronous thunk
- [x] Folder UI dan state terpisah
- [x] Komponen modular dan reusable
- [x] 4 skenario pengujian reducer dengan narasi skenario
- [x] 4 skenario pengujian thunk dengan narasi skenario
- [x] 4 skenario pengujian React component dengan narasi skenario
- [x] E2E Cypress untuk alur login dengan narasi skenario
- [x] Perintah `npm test` dan `npm run e2e`
- [x] GitHub Actions untuk lint, test, build, dan E2E
- [x] Konfigurasi SPA untuk deployment Vercel
- [x] React Ecosystem: Storybook dan PropTypes
- [x] Minimal 2 stories: ThreadCard dan VoteButtons

## Target rating 5

- [x] Optimistic up-vote/down-vote/neutral-vote thread
- [x] Optimistic up-vote/down-vote/neutral-vote komentar
- [x] Indikator vote aktif dan jumlah vote
- [x] Halaman leaderboard (nama, avatar, score)
- [x] Filter thread berdasarkan kategori di front-end
- [x] UI responsif dan orisinal

## Sebelum unggah

1. Jalankan `npm install`.
2. Jalankan `npm run lint` dan pastikan tidak ada error.
3. Jalankan `npm run build`.
4. Jalankan `npm run e2e`.
5. Jalankan `npm run build-storybook`.
6. Jalankan aplikasi dan uji register, login, thread, komentar, vote, filter, leaderboard, dan logout.
7. Ikuti `PANDUAN_CICD.md` untuk GitHub, branch protection, Vercel, dan screenshot autentik.
8. Masukkan `1_ci_check_error`, `2_ci_check_pass`, dan `3_branch_protection` ke folder `screenshots`.
9. Kirim ZIP tanpa `node_modules`, `dist`, `storybook-static`, `coverage`, serta artefak Cypress.

## Hasil validasi lokal pada 24 Agustus 2026

- ESLint: lulus tanpa error.
- Unit/component test: 12/12 lulus.
- Production build: berhasil.
- Storybook static build: berhasil dan memuat 2 berkas stories.
- Cypress spec: konfigurasi dan skenario tersedia; binary Cypress perlu dijalankan di laptop/GitHub Actions karena unduhan binary pada lingkungan penyusunan tidak utuh.
