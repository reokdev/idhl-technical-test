export function setupHeader() {
    const cartButton = document.querySelector('.header__cart-button');

    cartButton.addEventListener('click', () => {
        const cart = document.querySelector('.cart');
        cart.classList.toggle('is-open');
    });
} 