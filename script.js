

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");

    slides[index].style.display = "block";

    index++;
    if (index == slides.length) index = 0;
}

if (slides.length > 0) {
    setInterval(showSlide, 3000);
    showSlide();
}


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;

    cart.forEach(item => count += item.qty);

    let el = document.getElementById("cart-count"); 

    if (el) {
        el.innerText = count;

        el.classList.add("bounce");
        setTimeout(() => el.classList.remove("bounce"), 300);
    }
}

updateCartCount();


function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(
        item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            name,
            price,
            image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    updateProductQty();

    console.log(name + " added");
}

window.onload = function () {
    updateCartCount();
    updateProductQty(); 
};
function updateProductQty() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        let id = "qty-" + item.name.toLowerCase().replace(/[^a-z]/g, "");
        let el = document.getElementById(id);

        if (el) {
            el.innerText = item.qty;
        }
    });
}
function goToProduct(name, price, image, description) {

    const product = {
        name: name,
        price: price,
        image: image,
        description: description
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "product.html";
}


