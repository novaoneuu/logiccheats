const productsEl = document.getElementById("products");
const buttons = document.querySelectorAll(".navbtn");

const productSets = {
  test1: [
    { name: "Product A", desc: "This is a test product for category 1." },
    { name: "Product B", desc: "Another test product for category 1." },
    { name: "Product C", desc: "Category 1 product example." },
    { name: "Product D", desc: "More test content for scrolling." },
    { name: "Product E", desc: "More test content for scrolling." },
    { name: "Product F", desc: "More test content for scrolling." }
  ],
  test2: [
    { name: "Product X", desc: "This is a test product for category 2." },
    { name: "Product Y", desc: "Another test product for category 2." },
    { name: "Product Z", desc: "Category 2 product example." },
    { name: "Product Q", desc: "Extra test product for scrolling." }
  ],
  test3: [
    { name: "Premium Pack 1", desc: "This is a test product for category 3." },
    { name: "Premium Pack 2", desc: "Another test product for category 3." },
    { name: "Premium Pack 3", desc: "Category 3 product example." },
    { name: "Premium Pack 4", desc: "Extra test product for scrolling." },
    { name: "Premium Pack 5", desc: "Extra test product for scrolling." }
  ]
};

function renderProducts(tab) {
  productsEl.innerHTML = "";

  productSets[tab].forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <button class="product-buy">View →</button>
    `;

    productsEl.appendChild(card);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.tab);
  });
});

renderProducts("test1");
