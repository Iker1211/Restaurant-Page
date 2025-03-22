import { content } from "./index";

const about = () => {
   const container = document.createElement("div");
   container.id = "text_container";
   
   const paragraph = document.createElement("p");
   paragraph.textContent = "We are a team of chefs and nutritionists that have come together to create a new way of eating. We believe that food is the most important aspect of life and that it should be treated as such. Our goal is to provide you with the best food possible, so that you can live a long and healthy life. We hope you enjoy our food as much as we enjoy making it for you.";

   container.appendChild(paragraph);
    content.appendChild(container);
};

export { about };

