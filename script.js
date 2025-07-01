const products = [
    // 🏠 Home Decor
    {
        category: "home",
        name: "Modern Ceramic Flower Vase",
        description: "Stylish centerpiece for living room.",
        image: "https://m.media-amazon.com/images/I/61CQ0DMUzxL._AC_SL1500_.jpg",
        link: "https://amzn.to/3I8fYXJ"
    },
    {
        category: "home",
        name: "Luxury Wall Mounted LED Mirror",
        description: "Elegant touch LED mirror.",
        image: "https://m.media-amazon.com/images/I/61quGvSbs3L._AC_SL1500_.jpg",
        link: "https://amzn.to/44chrox"
    },
    {
        category: "home",
        name: "Portable Humidifier Diffuser",
        description: "Aroma diffuser for fresh environment.",
        image: "https://m.media-amazon.com/images/I/61SeSV9Bf3L._AC_SL1500_.jpg",
        link: "https://amzn.to/44FgMvQ"
    },
    {
        category: "home",
        name: "Wall Mounted Wooden Shelves (Set of 3)",
        description: "Minimalist decor solution.",
        image: "https://m.media-amazon.com/images/I/71hPq1zlmBL._AC_SL1500_.jpg",
        link: "https://amzn.to/4exwJYo"
    },
    {
        category: "home",
        name: "Abstract Canvas Wall Art",
        description: "Perfect for modern wall styling.",
        image: "https://m.media-amazon.com/images/I/71xyT3uVRLL._AC_SL1500_.jpg",
        link: "https://amzn.to/44vS3ZH"
    },

    // 👗 Fashion
    {
        category: "fashion",
        name: "Trendy Crossbody Bag for Women",
        description: "Lightweight and fashionable.",
        image: "https://m.media-amazon.com/images/I/71N8NWr6yqL._AC_SL1500_.jpg",
        link: "https://amzn.to/40kF8Zx"
    },
    {
        category: "fashion",
        name: "Premium Women's Analog Watch",
        description: "Stylish leather strap design.",
        image: "https://m.media-amazon.com/images/I/71JLdDrZg2L._AC_SL1500_.jpg",
        link: "https://amzn.to/44bp52u"
    },
    {
        category: "fashion",
        name: "Unisex Oversized Hoodie",
        description: "Soft, cozy, and trendy for all seasons.",
        image: "https://m.media-amazon.com/images/I/61H8P4S0SJL._AC_SL1500_.jpg",
        link: "https://amzn.to/3ImMMfu"
    },
    {
        category: "fashion",
        name: "Casual Sneakers for Men & Women",
        description: "Comfortable and versatile.",
        image: "https://m.media-amazon.com/images/I/71s5o5L+50L._AC_SL1500_.jpg",
        link: "https://amzn.to/3TO5Ndh"
    },
    {
        category: "fashion",
        name: "Smart Touch Winter Gloves",
        description: "Touchscreen compatible.",
        image: "https://m.media-amazon.com/images/I/61SGdlo2TxL._AC_SL1500_.jpg",
        link: "https://amzn.to/4lEgkUx"
    },

    // 🔌 Gadgets
    {
        category: "gadgets",
        name: "Wireless Bluetooth Earbuds",
        description: "Noise-cancelling with long battery.",
        image: "https://m.media-amazon.com/images/I/51JfOD9UcBL._AC_SL1500_.jpg",
        link: "https://amzn.to/4l04MuG"
    },
    {
        category: "gadgets",
        name: "Mini Portable Projector",
        description: "Home theatre experience anywhere.",
        image: "https://m.media-amazon.com/images/I/61qby-5GPrL._AC_SL1500_.jpg",
        link: "https://amzn.to/45KslD5"
    },
    {
        category: "gadgets",
        name: "Smart LED Touch Lamp",
        description: "Multiple colors with dimmable light.",
        image: "https://m.media-amazon.com/images/I/61K5nC+I3BL._AC_SL1500_.jpg",
        link: "https://amzn.to/3TQsmhu"
    },
    {
        category: "gadgets",
        name: "Wireless Fast Charging Pad",
        description: "Qi-compatible charging.",
        image: "https://m.media-amazon.com/images/I/61F1V1w6LTL._AC_SL1500_.jpg",
        link: "https://amzn.to/44nxnmv"
    },
    {
        category: "gadgets",
        name: "Compact Power Bank 20000mAh",
        description: "Fast charging for phones.",
        image: "https://m.media-amazon.com/images/I/71u4N4NRp7L._AC_SL1500_.jpg",
        link: "https://amzn.to/46oiLWB"
    },

    // 🍳 Kitchen Essentials
    {
        category: "kitchen",
        name: "Portable Blender Bottle",
        description: "Blend smoothies on the go.",
        image: "https://m.media-amazon.com/images/I/61c-KlgaYIL._AC_SL1500_.jpg",
        link: "https://amzn.to/4ntg7VG"
    },
    {
        category: "kitchen",
        name: "Electric Milk Frother",
        description: "Make perfect cappuccinos & lattes.",
        image: "https://m.media-amazon.com/images/I/61rUguhzPtL._AC_SL1500_.jpg",
        link: "https://amzn.to/4nshJz7"
    },
    {
        category: "kitchen",
        name: "Silicone Cooking Utensils Set (11 pcs)",
        description: "Heat-resistant and durable.",
        image: "https://m.media-amazon.com/images/I/81Acn05Fh3L._AC_SL1500_.jpg",
        link: "https://amzn.to/4epqwO0"
    },
    {
        category: "kitchen",
        name: "Digital Kitchen Scale",
        description: "Accurate measurement for recipes.",
        image: "https://m.media-amazon.com/images/I/61mOon2Nl+L._AC_SL1500_.jpg",
        link: "https://amzn.to/44hWeIk"
    },
    {
        category: "kitchen",
        name: "Non-stick Frying Pan with Lid",
        description: "Multipurpose cookware.",
        image: "https://m.media-amazon.com/images/I/71wWftuwUYL._AC_SL1500_.jpg",
        link: "https://amzn.to/44m2dvW"
    },

    // 💄 Beauty & Personal Care
    {
        category: "beauty",
        name: "LED Vanity Mirror with Lights",
        description: "Hollywood-style for perfect makeup.",
        image: "https://m.media-amazon.com/images/I/61mp0cbCyuL._AC_SL1500_.jpg",
        link: "https://amzn.to/46jamDW"
    },
    {
        category: "beauty",
        name: "Electric Facial Cleanser Brush",
        description: "Gentle deep clean for skin.",
        image: "https://m.media-amazon.com/images/I/61Sz5bHVWjL._AC_SL1500_.jpg",
        link: "https://amzn.to/46kEZsy"
    },
    {
        category: "beauty",
        name: "Portable Hair Straightener Brush",
        description: "Compact & travel friendly.",
        image: "https://m.media-amazon.com/images/I/61e9nA7vq-L._AC_SL1500_.jpg",
        link: "https://amzn.to/45LbkIZ"
    },
    {
        category: "beauty",
        name: "Essential Oil Diffuser with LED Lights",
        description: "Relaxing aromatherapy.",
        image: "https://m.media-amazon.com/images/I/61Atv0f2ljL._AC_SL1500_.jpg",
        link: "https://amzn.to/4kgYwgQ"
    },
    {
        category: "beauty",
        name: "Mini Skincare Fridge",
        description: "Keep cosmetics fresh & cool.",
        image: "https://m.media-amazon.com/images/I/61TPp-fpq4L._AC_SL1500_.jpg",
        link: "https://amzn.to/4l8OD6r"
    }
];

// Function to Display Products
function displayProducts(filter) {
    const container = document.getElementById('product-container');
    container.innerHTML = "";

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = "product";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank" class="btn">Buy Now</a>
            </div>
        `;
        container.appendChild(div);
    });
}

// Filter Function
function filterProducts(category) {
    displayProducts(category);
}

// On Load Show All
window.onload = () => {
    displayProducts('all');
};
