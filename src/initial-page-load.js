import { welcome_message} from "./welcome-message";


const first_load =  document.addEventListener("DOMContentLoaded", (event) => {
welcome_message();
});

export { first_load };