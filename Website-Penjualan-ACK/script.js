// Data Produk Lengkap untuk ACK Supplier
// Gambar menggunakan link direct dari Unsplash agar langsung muncul saat online
const products = [
  {
    id: 1,
    name: "Buku Tulis Sinar Dunia (Pack 10)",
    price: 35000,
    category: "Buku",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pulpen Gel Hitam (Lusin)",
    price: 24000,
    category: "Alat Tulis",
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Kertas HVS A4 70gsm (1 Rim)",
    price: 45000,
    category: "Kertas",
    image:
      "https://images.unsplash.com/photo-1626202266838-8120e527715f?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Kalkulator Kantor 12 Digit",
    price: 65000,
    category: "Elektronik",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee1f620?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Binder Note B5 Polos",
    price: 28000,
    category: "Buku",
    image:
      "https://images.unsplash.com/photo-1531346878377-a513bc957374?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Pensil Mekanik 0.5mm",
    price: 15000,
    category: "Alat Tulis",
    image:
      "https://images.unsplash.com/photo-1598539969134-2cb6d9539352?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Stabilo / Highlighter Set",
    price: 32000,
    category: "Alat Tulis",
    image:
      "https://images.unsplash.com/photo-1524678129202-763484f22285?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Map File Dokumen (Plastik)",
    price: 12000,
    category: "Filing",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd45eeed8bd?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Gunting Kertas Stainless",
    price: 18000,
    category: "Alat Kantor",
    image:
      "https://images.unsplash.com/photo-1590240752538-4f8e6579f157?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Sticky Notes / Post-it",
    price: 9500,
    category: "Kertas",
    image:
      "https://images.unsplash.com/photo-1586794644552-3269b8287711?q=80&w=300&auto=format&fit=crop",
  },
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cart-count");
let cart = 0;

// Fungsi Render Produk
function renderProducts(items) {
  productList.innerHTML = "";
  items.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Format Rupiah
    const priceString = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(product.price);

    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <span class="price">${priceString}</span>
            <p style="color: #7f8c8d; font-size: 0.9rem; margin-bottom: 10px;">${product.category}</p>
            <button class="btn-add" onclick="addToCart('${product.name}')">
                <i class="fas fa-cart-plus"></i> Tambah
            </button>
        `;
    productList.appendChild(card);
  });
}

// Fungsi Tambah ke Keranjang
function addToCart(productName) {
  cart++;
  cartCount.innerText = cart;
  // Animasi sederhana (opsional)
  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.style.transform = "scale(1.2)";
  setTimeout(() => (cartIcon.style.transform = "scale(1)"), 200);
}

// Fitur Pencarian
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
  );
  renderProducts(filteredProducts);
});

// Scroll Function untuk tombol di Hero
function scrollToProducts() {
  const productsSection = document.getElementById("products");
  productsSection.scrollIntoView({ behavior: "smooth" });
}

// Initial Render saat web dibuka pertama kali
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
