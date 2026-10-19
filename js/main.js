// ARTEFACT DATA
const artefactData = [
    { title: 'Modul Ajar UbD Informatika Class X', type: 'Modul Ajar', url: 'https://drive.google.com', desc: 'Skenario pembelajaran Algoritma dengan Backward Design UbD.' },
    { title: 'LKPD Visual Scratch & Python', type: 'LKPD', url: 'https://canva.com', desc: 'Lembar kerja bergambar komik untuk pemrograman dasar.' },
    { title: 'Video PPL Terbimbing UNY', type: 'Video PPL', url: 'https://youtube.com', desc: 'Dokumentasi mengajar 2 JP di laboratorium komputer.' },
    { title: 'Rubrik Penilaian Proyek Pemrograman', type: 'Asesmen', url: 'https://drive.google.com', desc: 'Instrumen asesmen otentik formatif dan sumatif.' }
];

// Pindah tab (Beranda, Sem 2, PPG, Artefak, Profil)
function switchTab(tab) {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`tab-btn-${tab}`);
    if (activeBtn) activeBtn.classList.add('active');

    document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
    const targetPage = document.getElementById(`page-${tab}`);
    if (targetPage) targetPage.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Galeri artefak
function renderArtefacts() {
    const grid = document.getElementById('artefact-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    artefactData.forEach(art => {
        const card = document.createElement('div');
        card.className = 'scrap-card p-5 rounded-xl bg-white relative flex flex-col justify-between';
        card.innerHTML = `
            <div class="washi-tape"></div>
            <div>
                <span class="bg-yellow-300 border border-black font-title text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-2">${art.type}</span>
                <h4 class="font-title text-base font-bold text-gray-900">${art.title}</h4>
                <p class="text-xs text-gray-600 mt-2 font-body">${art.desc}</p>
            </div>
            <a href="${art.url}" target="_blank" class="mt-4 py-2 bg-calendar-blue text-white text-center font-title text-xs rounded border border-black shadow-[2px_2px_0px_#000] hover:bg-blue-900 transition">
                <i class="fa-solid fa-download"></i> Buka / Unduh Artefak
            </a>
        `;
        grid.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderArtefacts();

    // Dari halaman Refleksi Sem 1: index.html#profil dst.
    const tab = location.hash.replace('#', '');
    if (tab && document.getElementById(`page-${tab}`)) switchTab(tab);
});
