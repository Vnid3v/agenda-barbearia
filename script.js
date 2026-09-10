console.log("Sistema da barbearia carregado!");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    const servico = document.querySelector("#servico").value;
    const data = document.querySelector("#data").value;
    const horario = document.querySelector("#horario").value;
    
    console.log("Nome:", nome);
    console.log("Serviço:", servico);
    console.log("Data:", data);
    console.log("Horário:", horario);
});
