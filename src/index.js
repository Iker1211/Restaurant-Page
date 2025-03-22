import "./styles.css";
import { first_load } from "./initial-page-load";
import { btn_animation } from "./btn-animation"; 
import { welcome_message } from "./welcome-message";
import { menu } from "./menu"; 
import { about } from "./about";

const buttons = document.getElementsByTagName("button");
export const content = document.getElementById("content");

Array.from(buttons).forEach((button, index)  => {
    button.addEventListener("click", function(event) {

        if (index === 0) {
            content.innerHTML = "";
            welcome_message();
        }
        if (index === 1) {
            content.innerHTML = "";
            menu();
        }
        if (index === 2) {
            content.innerHTML = "";
            about();
        }
    });
});

first_load;
btn_animation();