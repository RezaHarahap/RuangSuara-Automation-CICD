# RuangSuara

Aplikasi forum diskusi React yang menggunakan Dicoding Forum API dan menerapkan automation testing pada reducer, asynchronous thunk, React component, serta End-to-End.

## Perintah

`npm install`, `npm run dev`, `npm run lint`, `npm test`, `npm run e2e`, dan `npm run build`.

## React ecosystem

Storybook digunakan untuk dokumentasi komponen terisolasi (`npm run storybook`) dan PropTypes untuk validasi kontrak props. Stories tersedia untuk `ThreadCard` dan `VoteButtons`.

## Fitur

Registrasi, login, thread, komentar, optimistic vote thread dan komentar, leaderboard, filter kategori, loading indicator, notifikasi, desain responsif, dan penanganan konten API secara aman.

Workflow CI menjalankan lint, test, build, dan Cypress pada push serta Pull Request menuju `main` atau `master`. Petunjuk bukti submission tersedia di `PANDUAN_CICD.md`.
