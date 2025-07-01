const products = [
    // Home Decor
    {
        id: 1,
        name: "Modern Ceramic Flower Vase",
        category: "home-decor",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.5,
        img: "vase.jpg",
        link: "https://amzn.to/3I8fYXJ"
    },
    {
        id: 2,
        name: "Luxury Wall Mounted LED Mirror",
        category: "home-decor",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        img: "led-mirror.jpg",
        link: "https://amzn.to/44chrox"
    },
    {
        id: 3,
        name: "Portable Humidifier Diffuser",
        category: "home-decor",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.3,
        img: "humidifier.jpg",
        link: "https://amzn.to/44FgMvQ"
    },
    {
        id: 4,
        name: "Wall Mounted Wooden Shelves",
        category: "home-decor",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        img: "wooden-shelves.jpg",
        link: "https://amzn.to/4exwJYo"
    },
    {
        id: 5,
        name: "Abstract Canvas Wall Art",
        category: "home-decor",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.4,
        img: "canvas-art.jpg",
        link: "https://amzn.to/44vS3ZH"
    },

    // Fashion
    {
        id: 6,
        name: "Trendy Crossbody Bag",
        category: "fashion",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.6,
        img: "crossbody-bag.jpg",
        link: "https://amzn.to/40kF8Zx"
    },
    {
        id: 7,
        name: "Premium Women's Watch",
        category: "fashion",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.5,
        img: "womens-watch.jpg",
        link: "https://amzn.to/44bp52u"
    },
    {
        id: 8,
        name: "Unisex Oversized Hoodie",
        category: "fashion",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.7,
        img: "hoodie.jpg",
        link: "https://amzn.to/3ImMMfu"
    },
    {
        id: 9,
        name: "Casual Sneakers",
        category: "fashion",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.4,
        img: "sneakers.jpg",
        link: "https://amzn.to/3TO5Ndh"
    },
    {
        id: 10,
        name: "Smart Touch Winter Gloves",
        category: "fashion",
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.3,
        img: "gloves.jpg",
        link: "https://amzn.to/4lEgkUx"
    },

    // Gadgets
    {
        id: 11,
        name: "Wireless Bluetooth Earbuds",
        category: "gadgets",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        img: "earbuds.jpg",
        link: "https://amzn.to/4l04MuG"
    },
    {
        id: 12,
        name: "Mini Portable Projector",
        category: "gadgets",
        price: 129.99,
        originalPrice: 149.99,
        rating: 4.5,
        img: "projector.jpg",
        link: "https://amzn.to/45KslD5"
    },
    {
        id: 13,
        name: "Smart LED Touch Lamp",
        category: "gadgets",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.6,
        img: "touch-lamp.jpg",
        link: "https://amzn.to/3TQsmhu"
    },
    {
        id: 14,
        name: "Wireless Fast Charging Pad",
        category: "gadgets",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.4,
        img: "charging-pad.jpg",
        link: "https://amzn.to/44nxnmv"
    },
    {
        id: 15,
        name: "Compact Power Bank",
        category: "gadgets",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.7,
        img: "powerbank.jpg",
        link: "https://amzn.to/46oiLWB"
    },

    // Kitchen
    {
        id: 16,
        name: "Portable Blender Bottle",
        category: "kitchen",
        price: 24.99,
        originalPrice: 29.99,
        rating: 4.5,
        img: "blender.jpg",
        link: "https://amzn.to/4ntg7VG"
    },
    {
        id: 17,
        name: "Electric Milk Frother",
        category: "kitchen",
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.3,
        img: "milk-frother.jpg",
        link: "https://amzn.to/4nshJz7"
    },
    {
        id: 18,
        name: "Silicone Cooking Utensils",
        category: "kitchen",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        img: "utensils.jpg",
        link: "https://amzn.to/4epqwO0"
    },
    {
        id: 19,
        name: "Digital Kitchen Scale",
        category: "kitchen",
        price: 15.99,
        originalPrice: 19.99,
        rating: 4.6,
        img: "kitchen-scale.jpg",
        link: "https://amzn.to/44hWeIk"
    },
    {
        id: 20,
        name: "Non-stick Frying Pan",
        category: "kitchen",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.5,
        img: "frying-pan.jpg",
        link: "https://amzn.to/44m2dvW"
    },

    // Beauty
    {
        id: 21,
        name: "LED Vanity Mirror",
        category: "beauty",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.7,
        img: "vanity-mirror.jpg",
        link: "https://amzn.to/46jamDW"
    },
    {
        id: 22,
        name: "Electric Facial Cleanser",
        category: "beauty",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.4,
        img: "facial-brush.jpg",
        link: "https://amzn.to/46kEZsy"
    },
    {
        id: 23,
        name: "Hair Straightener Brush",
        category: "beauty",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.6,
        img: "hair-brush.jpg",
        link: "https://amzn.to/45LbkIZ"
    },
    {
        id: 24,
        name: "Essential Oil Diffuser",
        category: "beauty",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.5,
        img: "oil-diffuser.jpg",
        link: "https://amzn.to/4kgYwgQ"
    },
    {
        id: 25,
        name: "Mini Skincare Fridge",
        category: "beauty",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.3,
        img: "skincare-fridge.jpg",
        link: "https://amzn.to/4l8OD6r"
    }
];

function showProducts(filtered) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    
    products.filter(item => filtered === 'all' || item.category === filtered)
    .forEach(item => {
        const starRating = '⭐'.repeat(Math.round(item.rating)) + '☆'.repeat(5 - Math.round(item.rating));
        container.innerHTML += `
        <div class="product">
            <img src="${item.img}" alt="${item.name}">
            <div class="info">
                <h3>${item.name}</h3>
                <div class="rating">${starRating}</div>
                <div>
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <span class="original-price">$${item.originalPrice.toFixed(2)}</span>
                </div>
                <a href="${item.link}" target="_blank">View Product</a>
            </div>
        </div>
        `;
    });
}

function filterProducts(category) {
    showProducts(category);
}

window.onload = () => showProducts('all');
