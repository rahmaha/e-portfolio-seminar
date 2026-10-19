// Modal detail refleksi (dipakai di index.html dan refleksi-semester-1.html)
const MODAL_FIELDS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];

function showModal(data) {
    document.getElementById('modal-code').innerText = data.code;
    document.getElementById('modal-sks').innerText = data.sks;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-lecturers').innerText = data.lecturers;

    // Jawaban kosong -> tampil "Belum diisi."
    MODAL_FIELDS.forEach(key => {
        const value = data[key] || '';
        const el = document.getElementById(`modal-${key}`);
        el.innerText = value || 'Belum diisi.';
        el.classList.toggle('italic', !value);
        el.classList.toggle('text-gray-400', !value);
    });

    document.getElementById('modal-artifact-url').href = data.artifactUrl || 'https://drive.google.com';
    document.getElementById('reflection-modal').classList.remove('hidden');
}

// Dipakai kartu Refleksi Semester 2
function openModalWithCustomData(title, q1, q2, artefak, perubahan) {
    showModal({
        code: 'REFLEKSI',
        sks: 'MATA KULIAH',
        title,
        lecturers: 'PPG Prajabatan UNY Informatika',
        q1,
        q2,
        q4: perubahan,
        q5: artefak
    });
}

function closeModal() {
    document.getElementById('reflection-modal').classList.add('hidden');
}
