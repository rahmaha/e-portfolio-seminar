// ID file dari link share Google Drive
function driveId(link) {
    const m = (link || '').match(/\/d\/([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
}

// Isi preview PDF sekali saja, saat folder matkul pertama kali dibuka
function loadCoursePdf(root) {
    root.querySelectorAll('.course-pdf').forEach(box => {
        if (box.dataset.loaded) return;
        box.dataset.loaded = '1';

        const id = driveId(box.dataset.pdf);
        const frame = box.querySelector('.course-pdf-frame');
        const empty = box.querySelector('.course-pdf-empty');
        const openBtn = box.querySelector('.course-pdf-open');
        const downBtn = box.querySelector('.course-pdf-download');

        if (!id) {
            // Link belum diisi: preview disembunyikan, tombol tetap tampil tapi pudar
            frame.classList.add('hidden');
            empty.classList.remove('hidden');
            [openBtn, downBtn].forEach(btn => {
                btn.classList.add('opacity-50', 'pointer-events-none');
                btn.setAttribute('aria-disabled', 'true');
            });
            return;
        }
        frame.src = `https://drive.google.com/file/d/${id}/preview`;
        openBtn.href = `https://drive.google.com/file/d/${id}/view`;
        downBtn.href = `https://drive.google.com/uc?export=download&id=${id}`;
    });
}
// Buka/tutup folder mata kuliah (dipakai halaman Semester 1 dan 2)
function setAccordion(id, open) {
    const content = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    if (!content) return;
    content.classList.toggle('hidden', !open);
    if (open) loadCoursePdf(content);
    if (icon) icon.innerHTML = `<i class="fa-solid fa-chevron-${open ? 'up' : 'down'}"></i>`;
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    if (content) setAccordion(id, content.classList.contains('hidden'));
}

function toggleAllAccordions(open) {
    document.querySelectorAll('.accordion-content').forEach(el => setAccordion(el.id, open));
}

// Cari matkul berdasarkan kode, nama, atau dosen
function filterCourses() {
    const query = (document.getElementById('search-input')?.value || '').toLowerCase();
    document.querySelectorAll('.course-card').forEach(card => {
        const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
        card.classList.toggle('hidden', !keywords.includes(query));
    });
}
