// بيانات المنتجات المميزة
const featuredProducts = [
    {
        id: 1,
        name: "زيت الأركان النقي",
        price: 120,
        image: "images/products/argan-oil-bottle.jpg",
        category: "argan-oil"
    },
    {
        id: 2,
        name: "الغاسول المغربي الأصلي",
        price: 45,
        image: "images/products/ghassoul-powder.jpg",
        category: "ghassoul"
    },
    {
        id: 3,
        name: "ماء الورد الطبيعي",
        price: 60,
        image: "images/products/rose-water-bottle.jpg",
        category: "rose-water"
    },
    {
        id: 4,
        name: "حناء مغربية عالية الجودة",
        price: 30,
        image: "images/products/henna-powder.jpg",
        category: "henna"
    }
];

// عرض المنتجات المميزة
function displayFeaturedProducts() {
    const productsGrid = document.querySelector('.products-grid');
    
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price} درهم</p>
                <button class="add-to-cart" data-id="${product.id}">إضافة إلى السلة</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    
    // إضافة حدث للنقر على أزرار "إضافة إلى السلة"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            const product = featuredProducts.find(p => p.id == productId);
            addToCart(product);
        });
    });
});

// دالة إضافة المنتج إلى السلة
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`تمت إضافة ${product.name} إلى سلة التسوق`);
}
