console.log("Sistema da barbearia carregado!");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    const servico = document.querySelector("#servico").value;
    const servicoTexto = document.querySelector("#servico").selectedOptions[0].text;
    const data = document.querySelector("#data").value;
    const partesData = data.split("-");
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
    const horario = document.querySelector("#horario").value;
    
    console.log("Nome:", nome);
    console.log("Serviço:", servico);
    console.log("Data:", data);
    console.log("Horário:", horario);

    const listaAgendamentos = document.querySelector("#lista-agendamentos");

const novoAgendamento = document.createElement("p");

novoAgendamento.textContent = `${nome} - ${servicoTexto} - ${dataFormatada} às ${horario}`;

listaAgendamentos.appendChild(novoAgendamento);
    
});
