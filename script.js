function abrirPopup() {
    document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}
  
  // Evento de clique no botão
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('Clique').addEventListener('click', abrirPopup);
  });