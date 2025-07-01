// Add this at the top of your script.js
window.addEventListener('load', function() {
    // Hide loader
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 500);
    
    // Initialize products after page loads
    setTimeout(() => showProducts('all'), 300);
});

// Update your showProducts function to add sequential delays
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
