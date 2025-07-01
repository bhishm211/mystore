const products = [
    // Home Decor
    {
        name: "Modern Ceramic Flower Vase", 
        img: "https://m.media-amazon.com/images/I/71eZbM7ADEL._AC_SL1500_.jpg", 
        price: "$39.99", 
        original: "$49.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "home", 
        link: "https://amzn.to/3I8fYXJ"
    },
    {
        name: "Luxury Wall Mounted LED Mirror", 
        img: "https://m.media-amazon.com/images/I/71F4+QpMfWL._AC_SL1500_.jpg", 
        price: "$129.99", 
        original: "$159.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "home", 
        link: "https://amzn.to/44chrox"
    },
    {
        name: "Portable Humidifier Diffuser", 
        img: "https://m.media-amazon.com/images/I/61U9OcC1QlL._AC_SL1500_.jpg", 
        price: "$29.99", 
        original: "$39.99", 
        rating: "⭐⭐⭐⭐", 
        category: "home", 
        link: "https://amzn.to/44FgMvQ"
    },
    {
        name: "Wall Mounted Wooden Shelves", 
        img: "https://m.media-amazon.com/images/I/61a+J0Ka0xL._AC_SL1500_.jpg", 
        price: "$59.99", 
        original: "$79.99", 
        rating: "⭐⭐⭐⭐", 
        category: "home", 
        link: "https://amzn.to/4exwJYo"
    },
    {
        name: "Abstract Canvas Wall Art", 
        img: "https://m.media-amazon.com/images/I/81fL8Hgip-L._AC_SL1500_.jpg", 
        price: "$79.99", 
        original: "$99.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "home", 
        link: "https://amzn.to/44vS3ZH"
    },

    // Fashion
    {
        name: "Trendy Crossbody Bag", 
        img: "https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SL1500_.jpg", 
        price: "$39.99", 
        original: "$49.99", 
        rating: "⭐⭐⭐⭐", 
        category: "fashion", 
        link: "https://amzn.to/40kF8Zx"
    },
    {
        name: "Premium Women's Watch", 
        img: "https://m.media-amazon.com/images/I/61Qw1YtXJVL._AC_SL1500_.jpg", 
        price: "$59.99", 
        original: "$79.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "fashion", 
        link: "https://amzn.to/44bp52u"
    },
    {
        name: "Unisex Oversized Hoodie", 
        img: "https://m.media-amazon.com/images/I/71X7I7a1mSL._AC_SL1500_.jpg", 
        price: "$34.99", 
        original: "$44.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "fashion", 
        link: "https://amzn.to/3ImMMfu"
    },
    {
        name: "Casual Sneakers", 
        img: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SL1500_.jpg", 
        price: "$49.99", 
        original: "$59.99", 
        rating: "⭐⭐⭐⭐", 
        category: "fashion", 
        link: "https://amzn.to/3TO5Ndh"
    },
    {
        name: "Smart Touch Winter Gloves", 
        img: "https://m.media-amazon.com/images/I/71N-9h0f8JL._AC_SL1500_.jpg", 
        price: "$19.99", 
        original: "$24.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "fashion", 
        link: "https://amzn.to/4lEgkUx"
    },

    // Gadgets
    {
        name: "Wireless Bluetooth Earbuds", 
        img: "https://m.media-amazon.com/images/I/61U9OcC1QlL._AC_SL1500_.jpg", 
        price: "$89.99", 
        original: "$119.99", 
        rating: "⭐⭐⭐⭐", 
        category: "gadgets", 
        link: "https://amzn.to/4l04MuG"
    },
    {
        name: "Mini Portable Projector", 
        img: "https://m.media-amazon.com/images/I/71F4+QpMfWL._AC_SL1500_.jpg", 
        price: "$129.99", 
        original: "$149.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "gadgets", 
        link: "https://amzn.to/45KslD5"
    },
    {
        name: "Smart LED Touch Lamp", 
        img: "https://m.media-amazon.com/images/I/71eZbM7ADEL._AC_SL1500_.jpg", 
        price: "$39.99", 
        original: "$49.99", 
        rating: "⭐⭐⭐⭐", 
        category: "gadgets", 
        link: "https://amzn.to/3TQsmhu"
    },
    {
        name: "Wireless Fast Charging Pad", 
        img: "https://m.media-amazon.com/images/I/61a+J0Ka0xL._AC_SL1500_.jpg", 
        price: "$29.99", 
        original: "$39.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "gadgets", 
        link: "https://amzn.to/44nxnmv"
    },
    {
        name: "Compact Power Bank 20000mAh", 
        img: "https://m.media-amazon.com/images/I/81fL8Hgip-L._AC_SL1500_.jpg", 
        price: "$49.99", 
        original: "$59.99", 
        rating: "⭐⭐⭐⭐", 
        category: "gadgets", 
        link: "https://amzn.to/46oiLWB"
    },

    // Kitchen
    {
        name: "Portable Blender Bottle", 
        img: "https://m.media-amazon.com/images/I/71N-9h0f8JL._AC_SL1500_.jpg", 
        price: "$24.99", 
        original: "$29.99", 
        rating: "⭐⭐⭐⭐", 
        category: "kitchen", 
        link: "https://amzn.to/4ntg7VG"
    },
    {
        name: "Electric Milk Frother", 
        img: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SL1500_.jpg", 
        price: "$19.99", 
        original: "$24.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "kitchen", 
        link: "https://amzn.to/4nshJz7"
    },
    {
        name: "Silicone Cooking Utensils Set", 
        img: "https://m.media-amazon.com/images/I/71X7I7a1mSL._AC_SL1500_.jpg", 
        price: "$29.99", 
        original: "$39.99", 
        rating: "⭐⭐⭐⭐", 
        category: "kitchen", 
        link: "https://amzn.to/4epqwO0"
    },
    {
        name: "Digital Kitchen Scale", 
        img: "https://m.media-amazon.com/images/I/61Qw1YtXJVL._AC_SL1500_.jpg", 
        price: "$15.99", 
        original: "$19.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "kitchen", 
        link: "https://amzn.to/44hWeIk"
    },
    {
        name: "Non-stick Frying Pan with Lid", 
        img: "https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SL1500_.jpg", 
        price: "$39.99", 
        original: "$49.99", 
        rating: "⭐⭐⭐⭐", 
        category: "kitchen", 
        link: "https://amzn.to/44m2dvW"
    },

    // Beauty
    {
        name: "LED Vanity Mirror", 
        img: "https://m.media-amazon.com/images/I/71F4+QpMfWL._AC_SL1500_.jpg", 
        price: "$59.99", 
        original: "$79.99", 
        rating: "⭐⭐⭐⭐", 
        category: "beauty", 
        link: "https://amzn.to/46jamDW"
    },
    {
        name: "Electric Facial Cleanser Brush", 
        img: "https://m.media-amazon.com/images/I/71eZbM7ADEL._AC_SL1500_.jpg", 
        price: "$39.99", 
        original: "$49.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "beauty", 
        link: "https://amzn.to/46kEZsy"
    },
    {
        name: "Portable Hair Straightener Brush", 
        img: "https://m.media-amazon.com/images/I/61a+J0Ka0xL._AC_SL1500_.jpg", 
        price: "$49.99", 
        original: "$59.99", 
        rating: "⭐⭐⭐⭐", 
        category: "beauty", 
        link: "https://amzn.to/45LbkIZ"
    },
    {
        name: "Essential Oil Diffuser", 
        img: "https://m.media-amazon.com/images/I/81fL8Hgip-L._AC_SL1500_.jpg", 
        price: "$29.99", 
        original: "$39.99", 
        rating: "⭐⭐⭐⭐⭐", 
        category: "beauty", 
        link: "https://amzn.to/4kgYwgQ"
    },
    {
        name: "Mini Skincare Fridge", 
        img: "https://m.media-amazon.com/images/I/61U9OcC1QlL._AC_SL1500_.jpg", 
        price: "$69.99", 
        original: "$89.99", 
        rating: "⭐⭐⭐⭐", 
        category: "beauty", 
        link: "https://amzn.to/4l8OD6r"
    }
];

function showProducts(filtered) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    products.filter(item => filtered === 'all' || item.category === filtered)
    .forEach(item => {
        container.innerHTML += `
        <div class="product">
            <img src="${item.img}" alt="${item.name}">
            <div class="info">
                <h3>${item.name}</h3>
                <div class="rating">${item.rating}</div>
                <div>
                    <span class="price">${item.price}</span>
                    <span class="original-price">${item.original}</span>
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
