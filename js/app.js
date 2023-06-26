// Globals
const form_input_email = document.querySelector('#email');
const form_btn_submit = document.querySelector('.form__btn-submit');
const form_mensaje = document.querySelector('.form__mensaje');
const mensaje_success = document.querySelector('#mensaje-success');
const card_form = document.querySelector('#card-form');
const card_success = document.querySelector('#card-success');
const dismiss = document.querySelector('#dismiss');

form_input_email.addEventListener('change', (e) => {
    // console.log(e.target.value);
    // validarEmail(e.target.value);
});

form_btn_submit.addEventListener('click', () => {
    const info = form_input_email.value;
    validarEmail(info);
});

const validarEmail = (email) => {
    if(email === ''){
        imprimirMensaje('This field is required!', 'error');
        return;
    }
    if(!email.includes('@')){
        imprimirMensaje('Valid email required','error');
        return;
    }
    imprimirMensaje('OK', 'success');
    suscrito(email);
}

const imprimirMensaje = (mensaje, tipo) => {
    if(tipo === 'error'){
        form_mensaje.textContent = mensaje;
        form_mensaje.classList.add('form__mensaje--error');
        form_input_email.classList.add('form__input--error');
        form_input_email.classList.remove('form__input--success');
    }else{
        form_mensaje.classList.remove('form__mensaje--error');
        form_input_email.classList.remove('form__input--error');
        form_input_email.classList.add('form__input--success');
    }
}

const suscrito = (email) => {
    card_form.classList.add('card--none');
    card_success.classList.add('card__success--block');
    mensaje_success.textContent = email;
}

dismiss.addEventListener('click', () => {
    form_input_email.value = '';
    form_input_email.classList.remove('form__input--success');
    card_form.classList.remove('card--none');
    card_success.classList.remove('card__success--block');
});