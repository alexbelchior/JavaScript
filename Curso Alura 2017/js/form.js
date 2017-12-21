var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();//Elimina o comportamento padrão do botão que está dentro do form de recarregar a página.
  console.log("Fui clicado!");

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemInformacoesDoForm(form);

  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});


function obtemInformacoesDoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //var nomeTd = montaTd(paciente.nome, "info-nome");
  //var pesoTd = montaTd(paciente.peso, "info-peso");
  //var alturaTd = montaTd(paciente.altura, "info-altura");
  //var gorduraTd = montaTd(paciente.gordura, "info-peso");
  //var imcTd = montaTd(paciente.imc, "info-imc");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
