import { content } from "./index"; 

const welcome_message = () => {

const container = document.createElement("div");
container.id = "text_container";

const title = document.createElement("h1");
title.textContent = "God Food";

const text = document.createElement("p");
text.textContent = "We especialize in food for nutrition and longevity";

document.body.appendChild(container);
container.appendChild(title);
container.appendChild(text);
content.appendChild(container);
};

export { welcome_message };