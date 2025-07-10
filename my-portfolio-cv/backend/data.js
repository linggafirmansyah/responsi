const educationHistory = [
{ id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
{ id: 2, period: '2019 - 2022', institution: 'SMA PGRI 268 Palembang', major: 'MIPA' }
];
const skills = [
{ name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' },
{ name: 'Tailwind CSS', level: 'Mahir' }, { name: 'Node.js', level: 'Menengah' },
{ name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' },
];
const projects = [
{ title: 'Website Penjualan Tiket', image: '/images/demontix.png',
description: 'Platform e-commerce dengan fitur keranjang belanja.', tech: ['Vue.js', 'Express.js',
'PostgreSQL'], link: '#' },
{ title: 'Aplikasi KitaBagi', image: '/images/kitabagi.png',
description: 'Aplikasi untuk sumbangan bencana alam.', tech: ['React', 'Firebase'], link: '#' }
];
module.exports = { educationHistory, skills, projects };