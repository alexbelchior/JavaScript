var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i<pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if(peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
  }
  if(altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
    tdImc.textContent = "Altura Inválida";
    alturaEhValida = false;
  }

  if(alturaEhValida && pesoEhValido){//verificar se a altura e peso são true
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);//limita para exibir até duas casas decimais
  }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();//Elimina o comportamento padrão do botão que está dentro do form de recarregar a página.
  console.log("Fui clicado!");
});
