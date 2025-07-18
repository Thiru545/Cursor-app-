const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, img: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { id: 2, title: "1984", author: "George Orwell", price: 8.49, img: "https://covers.openlibrary.org/b/id/153541-L.jpg" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 9.75, img: "https://covers.openlibrary.org/b/id/9874151-L.jpg" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 7.25, img: "https://covers.openlibrary.org/b/id/10515205-L.jpg" },
  { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", price: 12.5, img: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { id: 6, title: "Moby Dick", author: "Herman Melville", price: 11.0, img: "https://covers.openlibrary.org/b/id/8101356-L.jpg" },
  { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 8.99, img: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
  { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 25.0, img: "https://covers.openlibrary.org/b/id/8725048-L.jpg" }
];

const bookListEl = document.getElementById("book-list");
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cart = [];

function renderBooks() {
  books.forEach((b) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${b.img}" class="card-img-top" alt="${b.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${b.title}</h5>
          <p class="card-text text-muted mb-1">${b.author}</p>
          <p class="card-text fw-bold mb-4">$${b.price.toFixed(2)}</p>
          <button class="btn btn-primary mt-auto" data-id="${b.id}">Add to Cart</button>
        </div>
      </div>`;
    bookListEl.appendChild(col);
  });
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    const book = books.find((b) => b.id === id);
    cart.push({ ...book, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(id) {
  const idx = cart.findIndex((i) => i.id === id);
  if (idx > -1) {
    cart.splice(idx, 1);
  }
  updateCartUI();
}

function updateCartUI() {
  cartCountEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "d-flex align-items-center justify-content-between border-bottom py-2";
    div.innerHTML = `
      <div>
        <strong>${item.title}</strong> x ${item.qty}
      </div>
      <div>$${(item.price * item.qty).toFixed(2)}</div>
      <button class="btn btn-sm btn-outline-danger" data-remove="${item.id}">&times;</button>`;
    cartItemsEl.appendChild(div);
  });
  cartTotalEl.textContent = cart
    .reduce((sum, i) => sum + i.price * i.qty, 0)
    .toFixed(2);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-id]")) {
    addToCart(parseInt(e.target.getAttribute("data-id")));
  }
  if (e.target.matches("[data-remove]")) {
    removeFromCart(parseInt(e.target.getAttribute("data-remove")));
  }
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart.length = 0;
  updateCartUI();
  const modal = bootstrap.Modal.getInstance(document.getElementById("cartModal"));
  modal.hide();
});

renderBooks();