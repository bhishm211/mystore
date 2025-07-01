const products = [
    // Home Decor
    {
        id: 1,
        name: "Modern Ceramic Flower Vase",
        category: "home-decor",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/3I8fYXJ"
    },
    {
        id: 2,
        name: "Luxury Wall Mounted LED Mirror",
        category: "home-decor",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/44chrox"
    },
    {
        id: 3,
        name: "Portable Humidifier Diffuser",
        category: "home-decor",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/44FgMvQ"
    },
    {
        id: 4,
        name: "Wall Mounted Wooden Shelves",
        category: "home-decor",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4exwJYo"
    },
    {
        id: 5,
        name: "Abstract Canvas Wall Art",
        category: "home-decor",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.4,
        img: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
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
        img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/40kF8Zx"
    },
    {
        id: 7,
        name: "Premium Women's Watch",
        category: "fashion",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/44bp52u"
    },
    {
        id: 8,
        name: "Unisex Oversized Hoodie",
        category: "fashion",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/3ImMMfu"
    },
    {
        id: 9,
        name: "Casual Sneakers",
        category: "fashion",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.4,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/3TO5Ndh"
    },
    {
        id: 10,
        name: "Smart Touch Winter Gloves",
        category: "fashion",
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1600161967180-80dd0ee5c4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
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
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4l04MuG"
    },
    {
        id: 12,
        name: "Mini Portable Projector",
        category: "gadgets",
        price: 129.99,
        originalPrice: 149.99,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/45KslD5"
    },
    {
        id: 13,
        name: "Smart LED Touch Lamp",
        category: "gadgets",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/3TQsmhu"
    },
    {
        id: 14,
        name: "Wireless Fast Charging Pad",
        category: "gadgets",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.4,
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/44nxnmv"
    },
    {
        id: 15,
        name: "Compact Power Bank",
        category: "gadgets",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
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
        img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4ntg7VG"
    },
    {
        id: 17,
        name: "Electric Milk Frother",
        category: "kitchen",
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4nshJz7"
    },
    {
        id: 18,
        name: "Silicone Cooking Utensils",
        category: "kitchen",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4epqwO0"
    },
    {
        id: 19,
        name: "Digital Kitchen Scale",
        category: "kitchen",
        price: 15.99,
        originalPrice: 19.99,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/44hWeIk"
    },
    {
        id: 20,
        name: "Non-stick Frying Pan",
        category: "kitchen",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1556910639-6dd33a27a0f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
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
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/46jamDW"
    },
    {
        id: 22,
        name: "Electric Facial Cleanser",
        category: "beauty",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.4,
        img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/46kEZsy"
    },
    {
        id: 23,
        name: "Hair Straightener Brush",
        category: "beauty",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/45LbkIZ"
    },
    {
        id: 24,
        name: "Essential Oil Diffuser",
        category: "beauty",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4kgYwgQ"
    },
    {
        id: 25,
        name: "Mini Skincare Fridge",
        category: "beauty",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.3,
        img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
        link: "https://amzn.to/4l8OD6r"
    }
];

function showProducts(filtered) {
    const container = document.getElementById('products');
    container.innerHTML = '';

    const filteredProducts = products.filter(item => filtered === 'all' || item.category === filtered);
    
    filteredProducts.forEach((item, index) => {
        const starRating = '⭐'.repeat(Math.round(item.rating)) + '☆'.repeat(5 - Math.round(item.rating));
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.style.animationDelay = `${index * 0.1}s`;
        
        productDiv.innerHTML = `
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
        `;
        
        container.appendChild(productDiv);
    });
}

function filterProducts(category) {
    showProducts(category);
}

window.addEventListener('load', function() {
    // Hide loader
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 500);
    
    // Initialize products after page loads
    setTimeout(() => showProducts('all'), 300);
});
