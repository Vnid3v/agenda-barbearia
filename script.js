console.log("Sistema da barbearia carregado!");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    
    console.log(nome);
});
