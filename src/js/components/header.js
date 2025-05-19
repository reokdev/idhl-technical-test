export function setupHeader() {
    const cartButtons = document.querySelectorAll(".header__cart-button");
    const cartCloseButton = document.querySelector(".cart__close");
    const cart = document.querySelector(".cart");
    const addToBagButton = document.querySelector(".button--primary");
    let isCartOpen = false;

    const backdrop = document.createElement("div");
    backdrop.className = "cart-backdrop";
    document.body.appendChild(backdrop);

    const openCart = async () => {
        if (isCartOpen) return;

        cart.classList.add("is-open", "is-loading");
        backdrop.classList.add("is-visible");
        document.body.style.overflow = "hidden";

        await new Promise((resolve) => setTimeout(resolve, 1000));

        cart.classList.remove("is-loading");
        isCartOpen = true;
    };

    const closeCart = () => {
        if (!isCartOpen) return;
        isCartOpen = false;
        cart.classList.remove("is-open");
        backdrop.classList.remove("is-visible");
        document.body.style.overflow = "";
    };

    cartButtons.forEach((button) => {
        button.addEventListener("click", openCart);
    });

    addToBagButton.addEventListener("click", openCart);
    cartCloseButton.addEventListener("click", closeCart);
    backdrop.addEventListener("click", closeCart);
}
