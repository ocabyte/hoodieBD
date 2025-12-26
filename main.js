// Hoodie Culture - Main JavaScript File
// Comprehensive functionality for e-commerce website

// Global variables
let cart = JSON.parse(localStorage.getItem('hoodieCart')) || [];
let currentFilters = {
    size: [],
    color: [],
    price: 200,
    style: [],
    trend: []
};
let currentSort = 'featured';
let currentView = 'grid';
let products = [];

// Product data
const productData = [
    {
        id: 'hoodie-1',
        name: 'Tie-Dye Hoodie',
        price: 79.99,
        image: 'resources/hoodie-1.jpg',
        description: 'Vibrant tie-dye pattern with sustainable organic cotton blend. Perfect for expressing your unique style while staying comfortable.',
        colors: ['purple', 'pink', 'blue'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        style: 'pullover',
        trend: 'sustainable',
        rating: 4.5,
        inStock: true
    },
    {
        id: 'hoodie-2',
        name: 'White Minimal Hoodie',
        price: 89.99,
        image: 'resources/hoodie-2.jpg',
        description: 'Clean minimalist design with premium cotton blend. Features subtle branding and modern fit.',
        colors: ['white', 'gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        style: 'pullover',
        trend: 'minimalist',
        rating: 4.8,
        inStock: true
    },
    {
        id: 'hoodie-3',
        name: 'Black Streetwear Hoodie',
        price: 89.99,
        image: 'resources/hoodie-3.jpg',
        description: 'Premium cotton blend with minimalist design. Perfect for everyday streetwear styling.',
        colors: ['black', 'gray'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        style: 'pullover',
        trend: 'streetwear',
        rating: 4.6,
        inStock: true
    },
    {
        id: 'hoodie-4',
        name: 'Colorful Tie-Dye Hoodie',
        price: 79.99,
        image: 'resources/hoodie-4.jpg',
        description: 'Bold tie-dye design with sustainable materials. Each piece is unique with vibrant color combinations.',
        colors: ['purple', 'pink', 'blue', 'green'],
        sizes: ['S', 'M', 'L', 'XL'],
        style: 'pullover',
        trend: 'sustainable',
        rating: 4.4,
        inStock: true
    },
    {
        id: 'hoodie-5',
        name: 'White Premium Hoodie',
        price: 99.99,
        image: 'resources/hoodie-5.jpg',
        description: 'Luxury heavyweight hoodie with oversized fit. Features premium fabric and attention to detail.',
        colors: ['white', 'beige'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        style: 'oversized',
        trend: 'luxury',
        rating: 4.9,
        inStock: true
    },
    {
        id: 'hoodie-6',
        name: 'Minimal White Hoodie',
        price: 89.99,
        image: 'resources/hoodie-6.jpg',
        description: 'Clean white hoodie with subtle design elements. Perfect for minimalist streetwear looks.',
        colors: ['white', 'gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        style: 'pullover',
        trend: 'minimalist',
        rating: 4.7,
        inStock: true
    },
    {
        id: 'hoodie-7',
        name: 'Premium Gray Hoodie',
        price: 129.99,
        image: 'resources/hoodie-7.jpg',
        description: 'Heavyweight luxury hoodie with oversized fit. Made from premium cotton blend for ultimate comfort.',
        colors: ['gray', 'black'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        style: 'oversized',
        trend: 'luxury',
        rating: 4.8,
        inStock: true
    },
    {
        id: 'hoodie-8',
        name: 'Techwear Hoodie',
        price: 149.99,
        image: 'resources/hoodie-8.jpg',
        description: 'Utility-focused design with multiple pockets and weather-resistant fabric. Perfect for urban exploration.',
        colors: ['black', 'gray'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        style: 'techwear',
        trend: 'streetwear',
        rating: 4.6,
        inStock: true
    },
    {
        id: 'hoodie-9',
        name: 'Classic White Hoodie',
        price: 84.99,
        image: 'resources/hoodie-9.jpg',
        description: 'Timeless white hoodie with classic fit. Versatile piece for any casual wardrobe.',
        colors: ['white', 'gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        style: 'pullover',
        trend: 'minimalist',
        rating: 4.5,
        inStock: true
    },
    {
        id: 'hoodie-10',
        name: 'Gray Oversized Hoodie',
        price: 94.99,
        image: 'resources/hoodie-10.jpg',
        description: 'Comfortable oversized fit with premium fabric. Perfect for relaxed streetwear styling.',
        colors: ['gray', 'black'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        style: 'oversized',
        trend: 'streetwear',
        rating: 4.7,
        inStock: true
    },
    {
        id: 'hoodie-11',
        name: 'Logo Hoodie',
        price: 94.99,
        image: 'resources/hoodie-11.jpg',
        description: 'Subtle logo design with modern fit. Premium cotton blend for everyday comfort.',
        colors: ['black', 'gray', 'navy'],
        sizes: ['S', 'M', 'L', 'XL'],
        style: 'pullover',
        trend: 'minimalist',
        rating: 4.6,
        inStock: true
    },
    {
        id: 'hoodie-12',
        name: 'Military Green Hoodie',
        price: 94.99,
        image: 'resources/hoodie-12.jpg',
        description: 'Rugged military-inspired design with premium comfort. Durable fabric for active lifestyle.',
        colors: ['green', 'black', 'gray'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        style: 'pullover',
        trend: 'streetwear',
        rating: 4.4,
        inStock: true
    },
    {
        id: 'hoodie-13',
        name: 'Navy Premium Hoodie',
        price: 99.99,
        image: 'resources/hoodie-13.jpg',
        description: 'Classic navy hoodie with modern updates. Premium materials and attention to detail.',
        colors: ['navy', 'black', 'gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        style: 'pullover',
        trend: 'luxury',
        rating: 4.8,
        inStock: true
    },
    {
        id: 'hoodie-14',
        name: 'Urban Tech Hoodie',
        price: 139.99,
        image: 'resources/hoodie-14.jpg',
        description: 'Advanced techwear design with multiple functional features. Weather-resistant and stylish.',
        colors: ['black', 'gray', 'navy'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        style: 'techwear',
        trend: 'streetwear',
        rating: 4.7,
        inStock: true
    },
    {
        id: 'hoodie-15',
        name: 'Street Tech Hoodie',
        price: 149.99,
        image: 'resources/hoodie-15.jpg',
        description: 'Premium techwear hoodie with urban styling. Features advanced fabric technology and utility design.',
        colors: ['black', 'gray'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        style: 'techwear',
        trend: 'luxury',
        rating: 4.9,
        inStock: true
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    products = [...productData];
    updateCartCount();
    initializePage();
    setupScrollReveal();
    setupParticleBackground();
});

// Page initialization
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'products.html':
            initializeProductsPage();
            break;
        case 'cart.html':
            initializeCartPage();
            break;
    }
}

// Homepage initialization
function initializeHomePage() {
    // Setup hero animations
    setupHeroAnimations();
    
    // Initialize featured products
    loadFeaturedProducts();
    
    // Setup newsletter functionality
    setupNewsletter();
}

// Products page initialization
function initializeProductsPage() {
    loadAllProducts();
    setupFilters();
    setupSearch();
    setupQuickView();
}

// Cart page initialization
function initializeCartPage() {
    loadCartItems();
    setupCartSummary();
}

// Cart Management Functions
function addToCart(productId, productName, price, image = null) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image || (product ? product.image : 'resources/hoodie-1.jpg'),
            quantity: 1,
            size: 'M',
            color: 'black'
        });
    }
    
    localStorage.setItem('hoodieCart', JSON.stringify(cart));
    updateCartCount();
    showAddToCartAnimation();
    
    // Show success message
    showNotification(`${productName} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('hoodieCart', JSON.stringify(cart));
    updateCartCount();
    
    // Reload cart page if currently viewing
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
        setupCartSummary();
    }
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('hoodieCart', JSON.stringify(cart));
            updateCartCount();
            
            // Update cart page if currently viewing
            if (window.location.pathname.includes('cart.html')) {
                setupCartSummary();
            }
        }
    }
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    
    cartCountElements.forEach(element => {
        if (cartCount > 0) {
            element.textContent = cartCount;
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
}

function showAddToCartAnimation() {
    const cartIcons = document.querySelectorAll('[data-cart-icon]');
    cartIcons.forEach(icon => {
        icon.style.animation = 'bounce 0.5s ease-in-out';
        setTimeout(() => {
            icon.style.animation = '';
        }, 500);
    });
}

// Product Loading Functions
function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 6);
    // Products are already in HTML for homepage
}

function loadAllProducts() {
    renderProducts(products);
    updateProductCount(products.length);
}

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Animate product cards
    anime({
        targets: '.product-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card card-hover bg-white rounded-2xl shadow-lg overflow-hidden scroll-reveal';
    
    card.innerHTML = `
        <div class="relative group">
            <img src="${product.image}" alt="${product.name}" 
                 class="w-full h-80 object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <button onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')" 
                        class="btn-primary px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Add to Cart
                </button>
                <button onclick="openQuickView('${product.id}')" 
                        class="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h3>
            <p class="text-gray-600 mb-4">${product.description.substring(0, 60)}...</p>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gradient">$${product.price}</span>
                <div class="flex space-x-2">
                    ${product.colors.slice(0, 2).map(color => 
                        `<div class="w-4 h-4 bg-${color === 'white' ? 'gray-100 border border-gray-300' : color === 'navy' ? 'blue-900' : color} rounded-full"></div>`
                    ).join('')}
                </div>
            </div>
            <div class="mt-3 flex items-center">
                <div class="flex text-yellow-400">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span class="ml-2 text-sm text-gray-500">(${product.rating})</span>
            </div>
        </div>
    `;
    
    return card;
}

function updateProductCount(count) {
    const productCountElement = document.getElementById('product-count');
    if (productCountElement) {
        productCountElement.textContent = `Showing ${count} products`;
    }
}

// Filter Functions
function toggleFilter(type, value) {
    if (type === 'size' || type === 'style' || type === 'trend') {
        const index = currentFilters[type].indexOf(value);
        if (index > -1) {
            currentFilters[type].splice(index, 1);
        } else {
            currentFilters[type].push(value);
        }
    } else if (type === 'color') {
        const index = currentFilters.color.indexOf(value);
        if (index > -1) {
            currentFilters.color.splice(index, 1);
        } else {
            currentFilters.color.push(value);
        }
        updateColorSwatches();
    }
    
    applyFilters();
    updateFilterButtons();
}

function updatePriceFilter(value) {
    currentFilters.price = parseInt(value);
    const priceDisplay = document.getElementById('price-display');
    if (priceDisplay) {
        priceDisplay.textContent = `$${value}`;
    }
    applyFilters();
}

function applyFilters() {
    let filteredProducts = products.filter(product => {
        // Size filter
        if (currentFilters.size.length > 0) {
            const hasSize = currentFilters.size.some(size => product.sizes.includes(size));
            if (!hasSize) return false;
        }
        
        // Color filter
        if (currentFilters.color.length > 0) {
            const hasColor = currentFilters.color.some(color => product.colors.includes(color));
            if (!hasColor) return false;
        }
        
        // Price filter
        if (product.price > currentFilters.price) return false;
        
        // Style filter
        if (currentFilters.style.length > 0 && !currentFilters.style.includes(product.style)) {
            return false;
        }
        
        // Trend filter
        if (currentFilters.trend.length > 0 && !currentFilters.trend.includes(product.trend)) {
            return false;
        }
        
        return true;
    });
    
    renderProducts(filteredProducts);
    updateProductCount(filteredProducts.length);
}

function updateFilterButtons() {
    // Update size filter buttons
    document.querySelectorAll('.size-filter').forEach(btn => {
        const size = btn.textContent.trim();
        if (currentFilters.size.includes(size)) {
            btn.classList.add('filter-active');
        } else {
            btn.classList.remove('filter-active');
        }
    });
}

function updateColorSwatches() {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        const color = swatch.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (currentFilters.color.includes(color)) {
            swatch.classList.add('active');
        } else {
            swatch.classList.remove('active');
        }
    });
}

function clearAllFilters() {
    currentFilters = {
        size: [],
        color: [],
        price: 200,
        style: [],
        trend: []
    };
    
    // Reset UI elements
    document.getElementById('price-slider').value = 200;
    document.getElementById('price-display').textContent = '$200';
    
    // Clear checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('filter-active');
    });
    
    // Reset color swatches
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    applyFilters();
}

// Sort Functions
function sortProducts(sortType) {
    currentSort = sortType;
    let sortedProducts = [...products];
    
    switch(sortType) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => b.id.localeCompare(a.id));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Featured - keep original order
            break;
    }
    
    renderProducts(sortedProducts);
}

// Quick View Functions
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;
    
    // Populate modal content
    document.getElementById('modal-main-image').src = product.image;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = `$${product.price}`;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-quantity').textContent = '1';
    
    // Setup add to cart button
    const addToCartBtn = document.getElementById('modal-add-to-cart');
    addToCartBtn.onclick = () => {
        const selectedSize = document.querySelector('.size-btn.selected')?.textContent || 'M';
        const selectedColor = document.querySelector('.color-swatch.active')?.getAttribute('title') || 'black';
        const quantity = parseInt(document.getElementById('modal-quantity').textContent);
        
        addToCart(product.id, product.name, product.price, product.image);
        closeQuickView();
    };
    
    // Show modal
    modal.style.display = 'block';
    
    // Create size chart
    createSizeChart();
    
    // Reset selections
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.color-swatch').forEach(swatch => swatch.classList.remove('active'));
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function selectSize(size) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

function selectColor(color) {
    document.querySelectorAll('.color-swatch').forEach(swatch => swatch.classList.remove('active'));
    event.target.classList.add('active');
}

function updateQuantity(change) {
    const quantityElement = document.getElementById('modal-quantity');
    const currentQuantity = parseInt(quantityElement.textContent);
    const newQuantity = Math.max(1, currentQuantity + change);
    quantityElement.textContent = newQuantity;
}

function createSizeChart() {
    const chartContainer = document.getElementById('size-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    const option = {
        title: {
            text: 'Size Guide',
            textStyle: {
                fontSize: 14,
                color: '#374151'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Chest', 'Length'],
            bottom: 0,
            textStyle: {
                fontSize: 12
            }
        },
        xAxis: {
            type: 'category',
            data: ['S', 'M', 'L', 'XL', 'XXL'],
            axisLabel: {
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            name: 'Inches',
            axisLabel: {
                fontSize: 12
            }
        },
        series: [
            {
                name: 'Chest',
                type: 'line',
                data: [36, 40, 44, 48, 52],
                itemStyle: {
                    color: '#8B9A8B'
                }
            },
            {
                name: 'Length',
                type: 'line',
                data: [26, 27, 28, 29, 30],
                itemStyle: {
                    color: '#2A2A2A'
                }
            }
        ]
    };
    
    chart.setOption(option);
}

// Search Functions
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    
    if (query === '') {
        renderProducts(products);
        updateProductCount(products.length);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.style.toLowerCase().includes(query) ||
        product.trend.toLowerCase().includes(query)
    );
    
    renderProducts(filteredProducts);
    updateProductCount(filteredProducts.length);
}

// Cart Page Functions
function loadCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const emptyCart = document.getElementById('empty-cart');
    
    if (!cartContainer || !emptyCart) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '';
        emptyCart.classList.remove('hidden');
        return;
    }
    
    emptyCart.classList.add('hidden');
    cartContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartContainer.appendChild(cartItem);
    });
}

function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item bg-white rounded-2xl shadow-lg p-6 mb-6';
    
    cartItem.innerHTML = `
        <div class="flex items-center space-x-6">
            <img src="${item.image}" alt="${item.name}" 
                 class="w-24 h-24 object-cover rounded-lg">
            
            <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${item.name}</h3>
                <div class="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>Size: ${item.size}</span>
                    <span>Color: ${item.color}</span>
                </div>
                <p class="text-2xl font-bold text-gradient">$${item.price}</p>
            </div>
            
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})" 
                            class="quantity-btn rounded-l-lg">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                    </button>
                    <span class="w-12 text-center font-semibold">${item.quantity}</span>
                    <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})" 
                            class="quantity-btn rounded-r-lg">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                
                <button onclick="removeFromCart('${item.id}')" 
                        class="text-red-500 hover:text-red-700 p-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    return cartItem;
}

function setupCartSummary() {
    const subtotalElement = document.getElementById('subtotal');
    const itemCountElement = document.getElementById('item-count');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!subtotalElement || !itemCountElement || !taxElement || !totalElement || !checkoutBtn) return;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    itemCountElement.textContent = itemCount;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
    
    checkoutBtn.disabled = cart.length === 0;
}

function applyPromoCode() {
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value.trim().toUpperCase();
    
    // Demo promo codes
    const promoCodes = {
        'WELCOME10': 0.10,
        'STREET20': 0.20,
        'HOODIE15': 0.15
    };
    
    if (promoCodes[promoCode]) {
        const discount = promoCodes[promoCode];
        showNotification(`Promo code applied! ${(discount * 100)}% discount`, 'success');
        promoInput.value = '';
        
        // Update summary with discount
        setupCartSummary();
        
        // Show discount row
        const discountRow = document.getElementById('discount-row');
        const discountElement = document.getElementById('discount');
        if (discountRow && discountElement) {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const discountAmount = subtotal * discount;
            discountElement.textContent = `-$${discountAmount.toFixed(2)}`;
            discountRow.classList.remove('hidden');
        }
    } else {
        showNotification('Invalid promo code', 'error');
    }
}

function proceedToCheckout() {
    if (cart.length === 0) return;
    
    // Demo checkout process
    showNotification('Redirecting to secure checkout...', 'info');
    
    setTimeout(() => {
        alert('Thank you for your interest! This is a demo store. Checkout functionality would be implemented with a payment processor like Stripe.');
    }, 1500);
}

// Animation Functions
function setupHeroAnimations() {
    // Animate hero text
    anime({
        targets: '.color-cycle',
        color: [
            {value: '#8B9A8B'},
            {value: '#2A2A2A'},
            {value: '#6B7B6B'},
            {value: '#8B9A8B'}
        ],
        duration: 4000,
        loop: true,
        easing: 'easeInOutQuad'
    });
    
    // Animate floating elements
    anime({
        targets: '.floating-element',
        translateY: [-20, 20],
        duration: 6000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: anime.stagger(1000)
    });
}

function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

function setupParticleBackground() {
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;
    
    // Create p5.js sketch for particles
    new p5((sketch) => {
        let particles = [];
        
        sketch.setup = () => {
            const canvas = sketch.createCanvas(particleContainer.offsetWidth, particleContainer.offsetHeight);
            canvas.parent(particleContainer);
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: sketch.random(sketch.width),
                    y: sketch.random(sketch.height),
                    vx: sketch.random(-0.5, 0.5),
                    vy: sketch.random(-0.5, 0.5),
                    size: sketch.random(2, 6),
                    opacity: sketch.random(0.1, 0.3)
                });
            }
        };
        
        sketch.draw = () => {
            sketch.clear();
            
            particles.forEach(particle => {
                sketch.fill(255, 255, 255, particle.opacity * 255);
                sketch.noStroke();
                sketch.circle(particle.x, particle.y, particle.size);
                
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = sketch.width;
                if (particle.x > sketch.width) particle.x = 0;
                if (particle.y < 0) particle.y = sketch.height;
                if (particle.y > sketch.height) particle.y = 0;
            });
        };
        
        sketch.windowResized = () => {
            sketch.resizeCanvas(particleContainer.offsetWidth, particleContainer.offsetHeight);
        };
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        type === 'warning' ? 'bg-yellow-500' :
        'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Newsletter Functions
function setupNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('Successfully subscribed to our newsletter!', 'success');
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll Functions
function scrollToTrends() {
    const trendsSection = document.getElementById('trends-section');
    if (trendsSection) {
        trendsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// View Toggle Functions
function toggleView(viewType) {
    currentView = viewType;
    const gridView = document.getElementById('grid-view');
    const listView = document.getElementById('list-view');
    const productsGrid = document.getElementById('products-grid');
    
    if (viewType === 'grid') {
        gridView.classList.add('bg-sage-100', 'text-sage-600');
        gridView.classList.remove('text-gray-400');
        listView.classList.remove('bg-sage-100', 'text-sage-600');
        listView.classList.add('text-gray-400');
        productsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    } else {
        listView.classList.add('bg-sage-100', 'text-sage-600');
        listView.classList.remove('text-gray-400');
        gridView.classList.remove('bg-sage-100', 'text-sage-600');
        gridView.classList.add('text-gray-400');
        productsGrid.className = 'grid grid-cols-1 gap-6';
    }
    
    // Re-render products with new layout
    const currentProducts = getCurrentProducts();
    renderProducts(currentProducts);
}

function getCurrentProducts() {
    // This would return the currently filtered and sorted products
    // For now, return all products
    return products;
}

function loadMoreProducts() {
    // This would implement pagination or infinite scroll
    showNotification('All products loaded!', 'info');
}

// Setup Functions
function setupFilters() {
    // Initialize filter event listeners
    updateFilterButtons();
    updateColorSwatches();
}

function setupQuickView() {
    // Setup quick view modal event listeners
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
        window.onclick = function(event) {
            if (event.target === modal) {
                closeQuickView();
            }
        };
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage
    updateCartCount();
    
    // Setup scroll reveal animations
    setupScrollReveal();
    
    // Initialize page-specific functionality
    initializePage();
    
    // Setup particle background if on homepage
    setupParticleBackground();
});

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleFilter = toggleFilter;
window.updatePriceFilter = updatePriceFilter;
window.clearAllFilters = clearAllFilters;
window.sortProducts = sortProducts;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.selectSize = selectSize;
window.selectColor = selectColor;
window.updateQuantity = updateQuantity;
window.applyPromoCode = applyPromoCode;
window.proceedToCheckout = proceedToCheckout;
window.scrollToTrends = scrollToTrends;
window.toggleView = toggleView;
window.loadMoreProducts = loadMoreProducts;
window.subscribeNewsletter = subscribeNewsletter;