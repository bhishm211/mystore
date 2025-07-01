// Product data
const products = [
    // Home Decor
    {
        name: "Modern Ceramic Flower Vase",
        img: "vase.jpg",
        price: "$19.99",
        original: "$29.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "home",
        link: "https://amzn.to/3I8fYXJ"
    },
    {
        name: "Luxury Wall Mounted LED Mirror",
        img: "led-mirror.jpg",
        price: "$49.99",
        original: "$79.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "home",
        link: "https://amzn.to/44chrox"
    },
    {
        name: "Portable Humidifier Diffuser",
        img: "humidifier.jpg",
        price: "$24.99",
        original: "$39.99",
        rating: "⭐⭐⭐⭐",
        category: "home",
        link: "https://amzn.to/44FgMvQ"
    },
    {
        name: "Wall Mounted Wooden Shelves",
        img: "wooden-shelves.jpg",
        price: "$34.99",
        original: "$59.99",
        rating: "⭐⭐⭐⭐",
        category: "home",
        link: "https://amzn.to/4exwJYo"
    },
    {
        name: "Abstract Canvas Wall Art",
        img: "canvas-art.jpg",
        price: "$29.99",
        original: "$49.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "home",
        link: "https://amzn.to/44vS3ZH"
    },

    // Fashion
    {
        name: "Trendy Crossbody Bag",
        img: "crossbody-bag.jpg",
        price: "$19.99",
        original: "$39.99",
        rating: "⭐⭐⭐⭐",
        category: "fashion",
        link: "https://amzn.to/40kF8Zx"
    },
    {
        name: "Premium Women's Watch",
        img: "womens-watch.jpg",
        price: "$29.99",
        original: "$59.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "fashion",
        link: "https://amzn.to/44bp52u"
    },
    {
        name: "Unisex Oversized Hoodie",
        img: "hoodie.jpg",
        price: "$34.99",
        original: "$69.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "fashion",
        link: "https://amzn.to/3ImMMfu"
    },
    {
        name: "Casual Sneakers",
        img: "sneakers.jpg",
        price: "$39.99",
        original: "$79.99",
        rating: "⭐⭐⭐⭐",
        category: "fashion",
        link: "https://amzn.to/3TO5Ndh"
    },
    {
        name: "Smart Touch Winter Gloves",
        img: "gloves.jpg",
        price: "$14.99",
        original: "$29.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "fashion",
        link: "https://amzn.to/4lEgkUx"
    },

    // Gadgets
    {
        name: "Wireless Bluetooth Earbuds",
        img: "earbuds.jpg",
        price: "$24.99",
        original: "$49.99",
        rating: "⭐⭐⭐⭐",
        category: "gadgets",
        link: "https://amzn.to/4l04MuG"
    },
    {
        name: "Mini Portable Projector",
        img: "projector.jpg",
        price: "$89.99",
        original: "$149.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "gadgets",
        link: "https://amzn.to/45KslD5"
    },
    {
        name: "Smart LED Touch Lamp",
        img: "touch-lamp.jpg",
        price: "$19.99",
        original: "$34.99",
        rating: "⭐⭐⭐⭐",
        category: "gadgets",
        link: "https://amzn.to/3TQsmhu"
    },
    {
        name: "Wireless Fast Charging Pad",
        img: "charging-pad.jpg",
        price: "$14.99",
        original: "$24.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "gadgets",
        link: "https://amzn.to/44nxnmv"
    },
    {
        name: "Compact Power Bank 20000mAh",
        img: "powerbank.jpg",
        price: "$29.99",
        original: "$49.99",
        rating: "⭐⭐⭐⭐",
        category: "gadgets",
        link: "https://amzn.to/46oiLWB"
    },

    // Kitchen
    {
        name: "Portable Blender Bottle",
        img: "blender.jpg",
        price: "$19.99",
        original: "$34.99",
        rating: "⭐⭐⭐⭐",
        category: "kitchen",
        link: "https://amzn.to/4ntg7VG"
    },
    {
        name: "Electric Milk Frother",
        img: "milk-frother.jpg",
        price: "$9.99",
        original: "$19.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "kitchen",
        link: "https://amzn.to/4nshJz7"
    },
    {
        name: "Silicone Cooking Utensils Set",
        img: "utensils.jpg",
        price: "$24.99",
        original: "$44.99",
        rating: "⭐⭐⭐⭐",
        category: "kitchen",
        link: "https://amzn.to/4epqwO0"
    },
    {
        name: "Digital Kitchen Scale",
        img: "kitchen-scale.jpg",
        price: "$14.99",
        original: "$29.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "kitchen",
        link: "https://amzn.to/44hWeIk"
    },
    {
        name: "Non-stick Frying Pan with Lid",
        img: "frying-pan.jpg",
        price: "$29.99",
        original: "$49.99",
        rating: "⭐⭐⭐⭐",
        category: "kitchen",
        link: "https://amzn.to/44m2dvW"
    },

    // Beauty
    {
        name: "LED Vanity Mirror",
        img: "vanity-mirror.jpg",
        price: "$39.99",
        original: "$69.99",
        rating: "⭐⭐⭐⭐",
        category: "beauty",
        link: "https://amzn.to/46jamDW"
    },
    {
        name: "Electric Facial Cleanser Brush",
        img: "facial-brush.jpg",
        price: "$24.99",
        original: "$39.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "beauty",
        link: "https://amzn.to/46kEZsy"
    },
    {
        name: "Portable Hair Straightener Brush",
        img: "hair-brush.jpg",
        price: "$29.99",
        original: "$59.99",
        rating: "⭐⭐⭐⭐",
        category: "beauty",
        link: "https://amzn.to/45LbkIZ"
    },
    {
        name: "Essential Oil Diffuser",
        img: "oil-diffuser.jpg",
        price: "$19.99",
        original: "$34.99",
        rating: "⭐⭐⭐⭐⭐",
        category: "beauty",
        link: "https://amzn.to/4kgYwgQ"
    },
    {
        name: "Mini Skincare Fridge",
        img: "skincare-fridge.jpg",
        price: "$49.99",
        original: "$79.99",
        rating: "⭐⭐⭐⭐",
        category: "beauty",
        link: "https://amzn.to/4l8OD6r"
    }
];

class ProductManager {
    constructor() {
        this.products = products;
        this.container = document.getElementById('products');
        this.renderedProducts = new Map();
        this.initializeTemplates();
    }

    initializeTemplates() {
        this.templates = {
            product: this.createTemplate(`
                <div class="product">
                    <img src="{{img}}" alt="{{name}}">
                    <div class="product-info">
                        <h3>{{name}}</h3>
                        <div class="rating">{{rating}}</div>
                        <div class="price-section">
                            <span class="price">{{price}}</span>
                            <span class="original-price">{{original}}</span>
                        </div>
                        <a href="{{link}}" class="btn" target="_blank">View Product</a>
                    </div>
                </div>
            `)
        };
    }

    createTemplate(templateString) {
        const template = document.createElement('template');
        template.innerHTML = templateString;
        return template;
    }

    renderProduct(product) {
        if (this.renderedProducts.has(product.name)) {
            return this.renderedProducts.get(product.name);
        }

        const clone = this.templates.product.content.cloneNode(true);
        const elements = {
            img: clone.querySelector('img'),
            name: clone.querySelector('h3'),
            rating: clone.querySelector('.rating'),
            price: clone.querySelector('.price'),
            original: clone.querySelector('.original-price'),
            link: clone.querySelector('a')
        };

        elements.img.src = product.img;
        elements.img.alt = product.name;
        elements.name.textContent = product.name;
        elements.rating.textContent = product.rating;
        elements.price.textContent = product.price;
        elements.original.textContent = product.original;
        elements.link.href = product.link;

        this.renderedProducts.set(product.name, clone);
        return clone;
    }

    filterAndRender(category) {
        const filteredProducts = this.products.filter(
            item => category === 'all' || item.category === category
        );

        this.container.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'empty-message';
            emptyMessage.textContent = 'No products found in this category.';
            this.container.appendChild(emptyMessage);
            return;
        }

        filteredProducts.forEach(product => {
            this.container.appendChild(this.renderProduct(product));
        });
    }
}

// Initialize the application
const manager = new ProductManager();

function filterProducts(category) {
    manager.filterAndRender(category);
}

window.onload = () => {
    filterProducts('all');
};
