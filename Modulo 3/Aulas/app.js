var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tarefas = JSON.parse(localStorage.getItem("list_tarefas")) || [];

function renderTarefas() {
  listElement.innerHTML = "";

  for (tarefa of tarefas) {
    var tarefasElement = document.createElement("li");
    var tarefasTexto = document.createTextNode(tarefa);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var pos = tarefas.indexOf(tarefa);
    linkElement.setAttribute("onclick", "deleteTarefa(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    tarefasElement.appendChild(tarefasTexto);
    tarefasElement.appendChild(linkElement);
    listElement.appendChild(tarefasElement);
  }
}

renderTarefas();

function addTarefa() {
  var tarefasTexto = inputElement.value;

  tarefas.push(tarefasTexto);
  inputElement.value = "";
  renderTarefas();
  saveToStorage();
}

buttonElement.onclick = addTarefa;

function deleteTarefa(pos) {
  tarefas.splice(pos, 1);
  renderTarefas();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_tarefas", JSON.stringify(tarefas));
}
