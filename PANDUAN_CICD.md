# Panduan CI/CD dan Bukti Submission

## GitHub dan CI

1. Buat repository public dan unggah proyek.
2. Gunakan branch default `main` (workflow juga mendukung `master`).
3. Buat branch `submission-ci`, ubah sementara satu ekspektasi test agar gagal, commit, push, lalu buat Pull Request.
4. Ambil screenshot check merah sebagai `screenshots/1_ci_check_error.png`.
5. Kembalikan test yang benar, commit, dan push kembali.
6. Ambil screenshot seluruh check hijau sebagai `screenshots/2_ci_check_pass.png`.

## Branch protection

Di **Settings → Branches/Rules**, buat aturan untuk `main`:

- Require a pull request before merging.
- Require status checks to pass before merging.
- Pilih `quality-check` dan `end-to-end`.
- Require branches to be up to date before merging.

Ambil screenshot proteksi pada halaman PR sebagai `screenshots/3_branch_protection.png`.

## Vercel

Impor repository ke Vercel. Pilih Vite, Build Command `npm run build`, dan Output Directory `dist`. Uji refresh pada `/login`, `/register`, `/leaderboard`, lalu tempel URL production di catatan submission.

## ZIP final

Setelah screenshot masuk, hapus `node_modules`, `dist`, `coverage`, `storybook-static`, `cypress/screenshots`, dan `cypress/videos`, lalu kompres folder proyek.
