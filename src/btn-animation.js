const buttons = document.getElementsByTagName("button");

const btn_animation = () => {

    const obj = Object.assign({}, buttons);

    console.log(obj);

    let activeButton = null;

    for (const key in obj) { 
        if (obj.hasOwnProperty(key)) {
            const btn = obj[key];
            btn.addEventListener('click', (event) => {
                if ( activeButton && activeButton !== btn) {
                    activeButton.style.height = '';
                    activeButton.style.fontSize = '';
                    activeButton.style.transform = '';   
                }

                if (btn === activeButton) {
                    btn.style.height = '';
                    btn.style.fontSize = '';
                    btn.style.transform = '';
                    activeButton = null;
                } else { 
                    btn.style.height = '3rem';
                    btn.style.fontSize = 'clamp(1rem, 4vw, 1.25rem )';
                    btn.style.transform = 'rotate(-2deg)';
                    activeButton = btn;
                }
            });
        }
    }

};

export { btn_animation };