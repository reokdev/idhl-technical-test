export function setupHeader() {
    const cartButtons = document.querySelectorAll('.header__cart-button');
    const cartCloseButton = document.querySelector('.cart__close');
    const cart = document.querySelector('.cart');
    let isCartOpen = false;

    const openCart = async () => {
        if (isCartOpen) return;
        
        cart.classList.add('is-open', 'is-loading');
        document.body.style.overflow = 'hidden';
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        cart.classList.remove('is-loading');
        isCartOpen = true;
    };

    const closeCart = () => {
        if (!isCartOpen) return;
        isCartOpen = false;
        cart.classList.remove('is-open');
        document.body.style.overflow = '';
    };

    cartButtons.forEach(button => {
        button.addEventListener('click', openCart);
    });

    cartCloseButton.addEventListener('click', closeCart);
} 