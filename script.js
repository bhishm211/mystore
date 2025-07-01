const products = [
  {name: "Modern Ceramic Flower Vase", img: "vase.jpg", price: "$19.99", original: "$29.99", rating: "⭐⭐⭐⭐⭐", category: "home", link: "https://amzn.to/3I8fYXJ"},
  {name: "Luxury Wall Mounted LED Mirror", img: "led-mirror.jpg", price: "$49.99", original: "$79.99", rating: "⭐⭐⭐⭐⭐", category: "home", link: "https://amzn.to/44chrox"},
  {name: "Portable Humidifier Diffuser", img: "humidifier.jpg", price: "$24.99", original: "$39.99", rating: "⭐⭐⭐⭐", category: "home", link: "https://amzn.to/44FgMvQ"},
  {name: "Wall Mounted Wooden Shelves", img: "wooden-shelves.jpg", price: "$34.99", original: "$59.99", rating: "⭐⭐⭐⭐", category: "home", link: "https://amzn.to/4exwJYo"},
  {name: "Abstract Canvas Wall Art", img: "canvas-art.jpg", price: "$29.99", original: "$49.99", rating: "⭐⭐⭐⭐⭐", category: "home", link: "https://amzn.to/44vS3ZH"},

  {name: "Trendy Crossbody Bag", img: "crossbody-bag.jpg", price: "$19.99", original: "$39.99", rating: "⭐⭐⭐⭐", category: "fashion", link: "https://amzn.to/40kF8Zx"},
  {name: "Premium Women's Watch", img: "womens-watch.jpg", price: "$29.99", original: "$59.99", rating: "⭐⭐⭐⭐⭐", category: "fashion", link: "https://amzn.to/44bp52u"},
  {name: "Unisex Oversized Hoodie", img: "hoodie.jpg", price: "$34.99", original: "$69.99", rating: "⭐⭐⭐⭐⭐", category: "fashion", link: "https://amzn.to/3ImMMfu"},
  {name: "Casual Sneakers", img: "sneakers.jpg", price: "$39.99", original: "$79.99", rating: "⭐⭐⭐⭐", category: "fashion", link: "https://amzn.to/3TO5Ndh"},
  {name: "Smart Touch Winter Gloves", img: "gloves.jpg", price: "$14.99", original: "$29.99", rating: "⭐⭐⭐⭐⭐", category: "fashion", link: "https://amzn.to/4lEgkUx"},
  
  {name: "Wireless Bluetooth Earbuds", img: "earbuds.jpg", price: "$24.99", original: "$49.99", rating: "⭐⭐⭐⭐", category: "gadgets", link: "https://amzn.to/4l04MuG"},
  {name: "Mini Portable Projector", img: "projector.jpg", price: "$89.99", original: "$149.99", rating: "⭐⭐⭐⭐⭐", category: "gadgets", link: "https://amzn.to/45KslD5"},
  {name: "Smart LED Touch Lamp", img: "touch-lamp.jpg", price: "$19.99", original: "$34.99", rating: "⭐⭐⭐⭐", category: "gadgets", link: "https://amzn.to/3TQsmhu"},
  {name: "Wireless Fast Charging Pad", img: "charging-pad.jpg", price: "$14.99", original: "$24.99", rating: "⭐⭐⭐⭐⭐", category: "gadgets", link: "https://amzn.to/44nxnmv"},
  {name: "Compact Power Bank 20000mAh", img: "powerbank.jpg", price: "$29.99", original: "$49.99", rating: "⭐⭐⭐⭐", category: "gadgets", link: "https://amzn.to/46oiLWB"},

  {name: "Portable Blender Bottle", img: "blender.jpg", price: "$19.99", original: "$34.99", rating: "⭐⭐⭐⭐", category: "kitchen", link: "https://amzn.to/4ntg7VG"},
  {name: "Electric Milk Frother", img: "milk-frother.jpg", price: "$9.99", original: "$19.99", rating: "⭐⭐⭐⭐⭐", category: "kitchen", link: "https://amzn.to/4nshJz7"},
  {name: "Silicone Cooking Utensils Set", img: "utensils.jpg", price: "$24.99", original: "$44.99", rating: "⭐⭐⭐⭐", category: "kitchen", link: "https://amzn.to/4epqwO0"},
  {name: "Digital Kitchen Scale", img: "kitchen-scale.jpg", price: "$14.99", original: "$29.99", rating: "⭐⭐⭐⭐⭐", category: "kitchen", link: "https://amzn.to/44hWeIk"},
  {name: "Non-stick Frying Pan with Lid", img: "frying-pan.jpg", price: "$29.99", original: "$49.99", rating: "⭐⭐⭐⭐", category: "kitchen", link: "https://amzn.to/44m2dvW"},

  {name: "LED Vanity Mirror", img: "vanity-mirror.jpg", price: "$39.99", original: "$69.99", rating: "⭐⭐⭐⭐", category: "beauty", link: "https://amzn.to/46jamDW"},
  {name: "Electric Facial Cleanser Brush", img: "facial-brush.jpg", price: "$24.99", original: "$39.99", rating: "⭐⭐⭐⭐⭐", category: "beauty", link: "https://amzn.to/46kEZsy"},
  {name: "Portable Hair Straightener Brush", img: "hair-brush.jpg", price: "$29.99", original: "$59.99", rating: "⭐⭐⭐⭐", category: "beauty", link: "https://amzn.to/45LbkIZ"},
  {name: "Essential Oil Diffuser", img: "oil-diffuser.jpg", price: "$19.99", original: "$34.99", rating: "⭐⭐⭐⭐⭐", category: "beauty", link: "https://amzn.to/4kgYwgQ"},
  {name: "Mini Skincare Fridge", img: "skincare-fridge.jpg", price: "$49.99", original: "$79.99", rating: "⭐⭐⭐⭐", category: "beauty", link: "https://amzn.to/4l8OD6r"},
];

function showProducts(filtered) {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.filter(item => filtered === 'all' || item.category === filtered)
  .forEach(item => {
    container.innerHTML += `
    <div class="product">
      <div class="bestseller">🔥 Trending</div>
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <div class="rating">${item.rating}</div>
        <div>
          <span class="price">${item.price}</span>
          <span class="original-price">${item.original}</span>
        </div>
        <a href="${item.link}" target="_blank">Buy Now</a>
      </div>
    </div>
    `;
  });
}

function filterProducts(category) {
  showProducts(category);
}

function searchProducts() {
  const input = document.getElementById('search').value.toLowerCase();
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.filter(p => p.name.toLowerCase().includes(input))
  .forEach(item => {
    container.innerHTML += `
    <div class="product">
      <div class="bestseller">🔥 Trending</div>
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <div class="rating">${item.rating}</div>
        <div>
          <span class="price">${item.price}</span>
          <span class="original-price">${item.original}</span>
        </div>
        <a href="${item.link}" target="_blank">Buy Now</a>
      </div>
    </div>
    `;
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Fake Sales Notification
const names = ["John", "Emily", "Michael", "Sarah", "Daniel", "Sophia"];
const productsNames = products.map(p => p.name);

function randomSale() {
  const name = names[Math.floor(Math.random() * names.length)];
  const product = productsNames[Math.floor(Math.random() * productsNames.length)];
  const popup = document.getElementById('sales-notification');
  popup.innerText = `${name} just bought ${product} 🎉`;
  popup.style.display = "block";
  setTimeout(() => popup.style.display = "none", 5000);
}

setInterval(randomSale, 12000); // Every 12 seconds

window.onload = () => showProducts('all');
