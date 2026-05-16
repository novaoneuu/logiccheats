const productsEl = document.getElementById("products");
const buttons = document.querySelectorAll(".navbtn");

const productSets = {
  test1: [
    {
      game: "Rainbow Six Siege (R6)",
      products: [
        { name: "R6 Starter", desc: "Basic tools for Rainbow Six Siege." },
        { name: "R6 Premium", desc: "Advanced R6 tools + extra features." },
        { name: "R6 Lifetime", desc: "Lifetime access for R6 tools." }
      ]
    },
    {
      game: "Rust",
      products: [
        { name: "Rust Starter", desc: "Basic tools for Rust." },
        { name: "Rust Pro", desc: "Better Rust tools + extra features." },
        { name: "Rust Ultimate", desc: "Full Rust access pack." }
      ]
    }
  ],

  test2: [
    {
      game: "Fortnite",
      products: [
        { name: "FN Pack 1", desc: "Fortnite test product." },
        { name: "FN Pack 2", desc: "Fortnite test product." },
        { name: "FN Pack 3", desc: "Fortnite test product." }
      ]
    },
    {
      game: "Apex Legends",
      products: [
        { name: "Apex Starter", desc: "Apex test product." },
        { name: "Apex Premium", desc: "Apex test product." },
        { name: "Apex Elite", desc: "Apex test product." }
      ]
    }
  ],

  test3: [
    {
      game: "Call of Duty",
      products: [
        { name: "COD Pack 1", desc: "COD test product." },
        { name: "COD Pack 2", desc: "COD test product." },
        { name: "COD Pack 3", desc: "COD test product." }
      ]
    },
    {
      game: "Valorant",
      products: [
        { name: "Val Starter", desc: "Valorant test product." },
        { name: "Val Pro", desc: "Valorant test product." },
        { name: "Val Ultimate", desc: "Valorant test product." }
      ]
    }
  ]
};

function renderProducts(tab) {
  productsEl.innerHTML = "";

  productSets[tab].forEach(section => {
    const wrapper = document.createElement("div");

    const title = document.createElement("h2");
    title.className = "game-title";
    title.textContent = section.game;

    const grid = document.createElement("div");
    grid.className = "product-grid";

    section.products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <button class="product-buy">View →</button>
      `;

      grid.appendChild(card);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(grid);
    productsEl.appendChild(wrapper);
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
