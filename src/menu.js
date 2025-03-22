import { content } from "./index";

import godfood from "./assets/god_food2.jpg";
import spaghetti from "./assets/spaghetti_celeste.jpg";
import spartan_soup from "./assets/spartan_soup.jpg";
import japanese_breakfast from "./assets/japanese_breakfast.jpg";

const menu = () => {

    const container = document.createElement("div");
    container.id = "container_menu";

    const images = [
        { src: godfood, alt: "God Food" },
        { src: spaghetti, alt: "Spaghetti Celeste" },
        { src: spartan_soup, alt: "Spartan Soup" },
        { src: japanese_breakfast, alt: "Japanese Breakfast" }
    ];

    images.forEach(imageData => {
        const image = document.createElement("img");

        image.src = imageData.src;
        image.alt = imageData.alt;

        const title = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("h4");
        const comer = document.createElement("button");
        comer.classList.add("comer");
        comer.textContent = "¡Tengo hambre!";

        if (image.src === godfood) {
            title.textContent = "Panacea";
            description.textContent = "Sólo disponible para negros saqueadores";
            price.textContent = " Price : $999 ";
        };
        if (image.src === spaghetti) {
            title.textContent = "Spaguetti Estelar";
            description.textContent = "Carbohidratos para 8 años";
            price.textContent = " Price : $50 ";
        };
        if (image.src === spartan_soup) {
            title.textContent = "Sopa espartana";
            description.textContent = "Con esta ganas una marathon";
            price.textContent = " Price : $80 ";
        };
        if (image.src === japanese_breakfast) {
            title.textContent = "Desayuno japonés";
            description.textContent = "Ni los japoneses pueden con esto";
            price.textContent = " Price : $20 ";
        };

        const cart = document.createElement("div");
        cart.classList.add("cart");

        cart.appendChild(image);
        cart.appendChild(title);
        cart.appendChild(description);
        cart.appendChild(price);
        cart.appendChild(comer);
        container.appendChild(cart);
    });

    content.appendChild(container);
};

export { menu };

