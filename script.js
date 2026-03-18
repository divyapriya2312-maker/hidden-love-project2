

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";

    index++;

    if (index == slides.length) {
        index = 0;
    }
}

// ✅ correct place
if (slides.length > 0) {
    setInterval(showSlide, 3000);
    showSlide();
}


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;

    cart.forEach(item => {
        count += item.qty;
    });

    let el = document.getElementById("cart-count");

    if (el) {
        el.innerText = count;
    }
}

updateCartCount();


function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

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

    console.log(name + " added");
}