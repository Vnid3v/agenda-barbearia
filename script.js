console.log("Sistema da barbearia carregado!");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    console.log("O formulário foi enviado!");
});
