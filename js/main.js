document.addEventListener('DOMContentLoaded', () => {
  // Panggil fungsi buat narik data produk jastip dari API
  getProducts();

  // Panggil fungsi buat ngaktifin event listener pada form
  initForm();
});