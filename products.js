/* =========================================
   VAULT KHAZANA
   PRODUCT DATA + CART SYSTEM
   ========================================= */

const products = [

  {
    id: "h1-6x3-5",
    category: "Food Container",
    name: "H1 Plastic Box with Folding Lid",
    dimensions: "6 × 3.5 × 2 inches",
    price: 700,
    pack: "100 pieces",
    image: "h1-plastic-box-folding-lid-main.jpg",
    images: [
      "h1-plastic-box-folding-lid-main.jpg",
      "h1-plastic-box-folding-lid-detail.jpg"
    ],
    overview:
      "A practical clear plastic box designed for takeaway, delivery, and everyday food storage. The folding lid keeps the contents covered while making the box convenient to handle and use.",
    suitableFor:
      "Condiments, biscuits, cakes, frozen food, and a wide range of other food items.",
    idealFor:
      "Serving and delivering both savoury and sweet foods, while also being useful at home for storing individual portions and leftover food in the refrigerator."
  },


  {
    id: "h1-6x4",
    category: "Food Container",
    name: "H1 Plastic Box with Folding Lid",
    dimensions: "6 × 4 × 2 inches",
    price: 750,
    pack: "100 pieces",
    image: "h1-plastic-box-folding-lid-main.jpg",
    images: [
      "h1-plastic-box-folding-lid-main.jpg",
      "h1-plastic-box-folding-lid-detail.jpg"
    ],
    overview:
      "A practical clear plastic box designed for takeaway, delivery, and everyday food storage. The folding lid keeps the contents covered while making the box convenient to handle and use.",
    suitableFor:
      "Condiments, biscuits, cakes, frozen food, and a wide range of other food items.",
    idealFor:
      "Serving and delivering both savoury and sweet foods, while also being useful at home for storing individual portions and leftover food in the refrigerator."
  },


  {
    id: "h3",
    category: "Food Container",
    name: "H3 Clear Food Storage Box — Folding Lid",
    dimensions: "8 × 5 × 2.5 inches",
    price: 1000,
    pack: "100 pieces",
    image: "h3-plastic-box-folding-lid-main.jpg",
    images: [
      "h3-plastic-box-folding-lid-main.jpg",
      "h3-plastic-box-folding-lid-open.jpg",
      "h3-plastic-box-folding-lid-food.jpg"
    ],
    overview:
      "A larger clear food box with a practical folding lid, made for takeaway, delivery, and convenient food storage.",
    suitableFor:
      "Condiments, biscuits, cakes, frozen food, and much more.",
    idealFor:
      "Serving and delivering both savoury and sweet foods, portioning meals, and keeping leftover food stored in the refrigerator at home."
  },


  {
    id: "h6",
    category: "Food Container",
    name: "H6 Clear Food Storage Box — Folding Lid",
    dimensions: "9 × 6 × 2.5 inches",
    price: 1300,
    pack: "100 pieces",
    image: "h6-plastic-box-folding-lid-main.jpg",
    images: [
      "h6-plastic-box-folding-lid-main.jpg",
      "h6-plastic-box-folding-lid-open.jpg",
      "h6-plastic-box-folding-lid-food.jpg"
    ],
    overview:
      "A spacious clear food box with a convenient folding lid, designed for takeaway, delivery, and practical food storage.",
    suitableFor:
      "Condiments, biscuits, cakes, frozen food, and much more.",
    idealFor:
      "Takeaway and delivery of savoury and sweet foods, portioning meals, and storing leftover food in the refrigerator at home."
  },


  {
    id: "h9",
    category: "Food Container",
    name: "H9 Clear Food Storage Box — Folding Lid",
    dimensions: "5 × 4 × 2 inches",
    price: 550,
    pack: "100 pieces",
    image: "h9-plastic-box-folding-lid-main.jpg",
    images: [
      "h9-plastic-box-folding-lid-main.jpg",
      "h9-plastic-box-folding-lid-open.jpg",
      "h9-plastic-box-folding-lid-food.jpg"
    ],
    overview:
      "A compact clear food box with a folding lid, suitable for takeaway, delivery, and everyday food storage.",
    suitableFor:
      "Condiments, biscuits, cakes, frozen food, and much more.",
    idealFor:
      "Takeaway and delivery of savoury and sweet foods, portioning meals, and storing leftover food in the refrigerator at home."
  },


  {
    id: "200ml-disposable",
    category: "Food Container",
    name: "200ml Clear Round Disposable Food Container with Lid",
    dimensions: "200ml capacity",
    price: 900,
    pack: "100 pieces",
    image: "200ml-disposable-round-container-main.jpg",
    images: [
      "200ml-disposable-round-container-main.jpg",
      "200ml-disposable-round-container-open.jpg",
      "200ml-disposable-round-container-food.jpg"
    ],
    overview:
      "A lightweight clear round food container made from disposable PP (soft plastic), supplied with a lid for convenient takeaway, delivery, and food packing.",
    suitableFor:
      "Chaat, sauces, fresh salad, condiments, kheer, and more.",
    idealFor:
      "Takeaway, delivery, food packing, and convenient portioning.",
    material: "Polypropylene (PP) — disposable, soft plastic",
    shape: "Round",
    lid: "Included"
  },


  {
    id: "300ml-round",
    category: "Food Container",
    name: "300ml Clear Round Food Container with Lid",
    dimensions: "300ml capacity",
    price: 1000,
    pack: "50 pieces",
    image: "300ml-clear-round-container-main.jpg",
    images: [
      "300ml-clear-round-container-main.jpg",
      "300ml-clear-round-container-open.jpg",
      "300ml-clear-round-container-food.jpg"
    ],
    overview:
      "A clear, round PP food container designed for convenient food packing, takeaway, and storage. The transparent body makes it easy to see the contents, while the included lid helps keep food covered during transport and storage.",
    suitableFor:
      "Desserts, fast food, soup, and other food items.",
    idealFor:
      "Takeaway, food packing, transport, and food storage.",
    material: "PP (Polypropylene) plastic",
    shape: "Round",
    colour: "Transparent",
    lid: "Included"
  },


  {
    id: "450ml-r16",
    category: "Food Container",
    name: "450ml R16 Clear Round Food Container with Lid",
    dimensions: "450ml capacity",
    price: 2200,
    pack: "1000 pieces",
    image: "450ml-r16-clear-round-container-main.jpg",
    images: [
      "450ml-r16-clear-round-container-main.jpg",
      "450ml-r16-clear-round-container-open.jpg",
      "450ml-r16-clear-round-container-food.jpg"
    ],
    overview:
      "A sturdy clear round container made from polypropylene (PP), designed for convenient takeaway, delivery, and food storage. Its practical shape makes it suitable for transporting both solid and semi-solid foods.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, brownies, mithai, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Round",
    model: "R16",
    lid: "Included"
  },


  {
    id: "500ml-rectangular",
    category: "Food Container",
    name: "500ml Clear Rectangular Food Container with Lid",
    dimensions: "Approx. 7 × 4.75 × 1.5 inches",
    price: 1350,
    pack: "50 pieces",
    image: "500ml-clear-rectangular-container-main.jpg",
    images: [
      "500ml-clear-rectangular-container-main.jpg",
      "500ml-clear-rectangular-container-open.jpg",
      "500ml-clear-rectangular-container-food.jpg"
    ],
    overview:
      "A clear rectangular PP food container designed for convenient takeaway, delivery, and everyday food storage. Its practical shape makes it suitable for transporting both solid and semi-solid foods.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, mithai, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Rectangular",
    capacity: "500ml",
    lid: "Included"
  },


  {
    id: "750ml-rectangular",
    category: "Food Container",
    name: "750ml Clear Rectangular Food Container with Lid",
    dimensions: "Approx. 6.5 × 4.5 × 2.25 inches",
    price: 825,
    pack: "25 pieces",
    image: "750ml-clear-rectangular-container-main.jpg",
    images: [
      "750ml-clear-rectangular-container-main.jpg",
      "750ml-clear-rectangular-container-open.jpg",
      "750ml-clear-rectangular-container-food.jpg"
    ],
    overview:
      "A clear rectangular PP food container with a practical lid, designed for takeaway, delivery, and convenient food storage. Its shape makes it suitable for carrying both solid and semi-solid foods.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, mithai, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Rectangular",
    capacity: "750ml",
    lid: "Included"
  },


  {
    id: "1000ml-rectangular",
    category: "Food Container",
    name: "1000ml Clear Rectangular Food Container with Lid",
    dimensions: "Approx. 7 × 4.75 × 2.5 inches",
    price: 875,
    pack: "25 pieces",
    image: "1000ml-clear-rectangular-container-main.jpg",
    images: [
      "1000ml-clear-rectangular-container-main.jpg",
      "1000ml-clear-rectangular-container-open.jpg",
      "1000ml-clear-rectangular-container-food.jpg"
    ],
    overview:
      "A spacious clear rectangular PP food container with a lid, designed for takeaway, delivery, and convenient food storage. Its practical shape is suitable for transporting both solid and semi-solid foods.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Rectangular",
    capacity: "1000ml",
    lid: "Included"
  },


  {
    id: "1500ml-square",
    category: "Food Container",
    name: "1500ml Clear Square Food Container with Lid",
    dimensions: "Approx. 6.25 × 6.25 × 3 inches",
    price: 1125,
    pack: "25 pieces",
    image: "1500ml-clear-square-container-main.jpg",
    images: [
      "1500ml-clear-square-container-main.jpg",
      "1500ml-clear-square-container-open.jpg",
      "1500ml-clear-square-container-food.jpg"
    ],
    overview:
      "A spacious clear square PP food container with a separate lid, designed for takeaway, delivery, and convenient food storage. Its generous capacity makes it suitable for both solid and semi-solid food portions.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, brownies, mithai, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Square",
    capacity: "1500ml",
    lid: "Included — separate lid"
  },


  {
    id: "2000ml-square",
    category: "Food Container",
    name: "2000ml Clear Square Food Container with Lid",
    dimensions: "Approx. 8 × 8 × 3 inches",
    price: 660,
    pack: "25 pieces",
    image: "2000ml-clear-square-container-main.jpg",
    images: [
      "2000ml-clear-square-container-main.jpg",
      "2000ml-clear-square-container-open.jpg",
      "2000ml-clear-square-container-food.jpg"
    ],
    overview:
      "A large-capacity clear square PP food container with a lid, designed for takeaway, delivery, and convenient food storage. Its spacious design is suitable for transporting both solid and semi-solid foods.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, brownies, mithai, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Square",
    capacity: "2000ml",
    lid: "Included"
  },


  {
    id: "3000ml-square",
    category: "Food Container",
    name: "3000ml Clear Square Food Container with Lid",
    dimensions: "Approx. 8 × 8 × 4 inches",
    price: 1875,
    pack: "25 pieces",
    image: "3000ml-clear-square-container-main.jpg",
    images: [
      "3000ml-clear-square-container-main.jpg",
      "3000ml-clear-square-container-open.jpg",
      "3000ml-clear-square-container-food.jpg"
    ],
    overview:
      "A high-capacity clear square PP food container with a lid, designed for takeaway, delivery, and practical food storage. Its generous size provides ample space for larger portions of both solid and semi-solid foods.",
    suitableFor:
      "Rice, curries, frozen food, ice cream, brownies, mithai, and more.",
    idealFor:
      "Takeaway, delivery, portioning, and refrigerator storage.",
    material: "Polypropylene (PP)",
    shape: "Square",
    capacity: "3000ml",
    lid: "Included"
  }

];


/* =========================================
   PRICE FORMAT
   ========================================= */

function formatPrice(price) {
  return "Rs " + price.toLocaleString("en-PK");
}


/* =========================================
   CART STORAGE
   ========================================= */

const CART_KEY = "vaultKhazanaCart";


function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (error) {
    return [];
  }
}


function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}


/* =========================================
   CART COUNT
   ========================================= */

function updateCartCount() {

  const cart = getCart();

  const totalItems = cart.reduce(function(total, item) {
    return total + item.quantity;
  }, 0);

  document.querySelectorAll(".cart-count").forEach(function(countElement) {
    countElement.textContent = totalItems;
  });
}


/* =========================================
   ADD TO CART
   ========================================= */

function addToCart(productId, button) {

  const product = products.find(function(item) {
    return item.id === productId;
  });

  if (!product) {
    return;
  }

  const cart = getCart();

  const existingItem = cart.find(function(item) {
    return item.id === productId;
  });

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart(cart);

  if (button) {

    const originalText = button.textContent;

    button.textContent = "Added";
    button.classList.add("added");

    setTimeout(function() {
      button.textContent = originalText;
      button.classList.remove("added");
    }, 1200);
  }
}


/* =========================================
   PRODUCT CARDS
   ========================================= */

function renderProductCards(containerId) {

  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  container.innerHTML = "";

  products.forEach(function(product) {

    const card = document.createElement("article");
    card.className = "product-card";

    const productLink =
      "product.html?id=" + encodeURIComponent(product.id);

    card.innerHTML = `
      <a
        href="${productLink}"
        class="product-image-link"
        aria-label="View ${product.name}"
      >
        <img
          src="${product.image}"
          alt="${product.name} - ${product.dimensions}"
          class="product-image"
          loading="lazy"
        >
      </a>

      <div class="product-info">

        <p class="product-type">${product.category}</p>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <p class="product-dimensions">
          ${product.dimensions}
        </p>

        <p class="product-overview">
          ${product.overview}
        </p>

        <div class="product-purchase-info">

          <div>
            <div class="product-price">
              ${formatPrice(product.price)}
            </div>

            <div class="product-pack">
              ${product.pack}
            </div>
          </div>

        </div>

        <div class="product-actions">

          <a
            href="${productLink}"
            class="product-details-button"
          >
            View Details
          </a>

          <button
            type="button"
            class="product-add-button"
            data-product-id="${product.id}"
          >
            Add to Cart
          </button>

        </div>

      </div>
    `;

    const addButton = card.querySelector(".product-add-button");

    addButton.addEventListener("click", function() {
      addToCart(product.id, addButton);
    });

    container.appendChild(card);

  });

  updateCartCount();
}


/* =========================================
   INITIALISE
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {

  renderProductCards("product-grid-container");

  updateCartCount();

});
