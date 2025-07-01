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
    // ... other products
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
