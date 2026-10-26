function initForm() {
  const form = document.getElementById('jastip-form');
  const messageEl = document.getElementById('form-message');

  form.addEventListener('submit', function (event) {
    // Mencegah reload halaman saat submit
    event.preventDefault();

    // Mengambil nilai input dari DOM
    const namaPemesan = document.getElementById('namaPemesan').value.trim();
    const namaBarang = document.getElementById('namaBarang').value.trim();
    const negaraAsal = document.getElementById('negaraAsal').value;
    const catatan = document.getElementById('catatan').value.trim();

    // Validasi input sederhana
    if (namaPemesan === '' || namaBarang === '' || negaraAsal === '') {
      messageEl.innerHTML = '<strong>Gagal:</strong> Mohon lengkapi Nama Pemesan, Nama Barang, dan Negara Asal!';
      messageEl.className = 'message-box error';
      return;
    }

    // Manipulasi DOM untuk menampilkan umpan balik sukses secara dinamis
    messageEl.innerHTML = `
      <strong>Request Jastip Berhasil Dibuat!</strong><br>
      Terima kasih <b>${namaPemesan}</b>, permintaan jastip untuk <b>${namaBarang}</b> (${negaraAsal}) telah diterima. 
      ${catatan ? `<br><i>Catatan: "${catatan}"</i>` : ''}
    `;
    messageEl.className = 'message-box success';

    // Reset form setelah berhasil
    form.reset();
  });
}