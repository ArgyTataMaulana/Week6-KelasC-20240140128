async function getProducts() {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const listEl = document.getElementById('product-list');

  try {
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';

    // Mengambil data dari endpoint DummyJSON
    const response = await fetch('https://dummyjson.com/products');
    
    if (!response.ok) {
      throw new Error('Gagal terhubung ke server katalog jastip.');
    }

    const data = await response.json();
    
    // Tampilkan data produk ke DOM
    renderProducts(data.products);

  } catch (err) {
    errorEl.textContent = `Error: ${err.message || 'Terjadi kesalahan saat memuat data.'}`;
    errorEl.style.display = 'block';
  } finally {
    loadingEl.style.display = 'none';
  }
}

function renderProducts(products) {
  const listEl = document.getElementById('product-list');
  listEl.innerHTML = '';

  // Mengambil 8 produk pertama agar tampilan katalog tidak terlalu panjang
  const featuredProducts = products.slice(0, 8);

  featuredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Tampilan komponen kartu jastip
    card.innerHTML = `
      <span class="badge">Jastip Ready</span>
      <img src="${product.thumbnail}" alt="${product.title}" class="product-img">
      <h3>${product.title}</h3>
      <p class="category">Kategori: ${product.category}</p>
      <p class="price">Estimasi Harga: $${product.price}</p>
    `;

    listEl.appendChild(card);
  });
}