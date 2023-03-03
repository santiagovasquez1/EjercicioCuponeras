window.addEventListener('load', ()=>{
    const display = document.querySelector('.display');
    const keypadButtons = document.getElementsByClassName('button');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) =>{
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })

});

function calculadora(button, display){
    switch (button.innerHTML) {
        case "Borrar":
            borrar(display);
            break;
        case "Continuar":
            borrar(display);
            break;
        case "Cancelar":
            borrar(display);
            break;    
        default:
            actualizar(display, button);
            break;
    }
}

function actualizar(display, button){
    if (display.innerHTML == '0'){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
 }

function borrar(display){
   display.innerHTML = '0';
}