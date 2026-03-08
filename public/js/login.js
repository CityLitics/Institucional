const olhoAberto = document.querySelector("#olhoAberto");
const olhoFechado = document.querySelector("#olhoFechado");
const senha = document.querySelector("#senha");

olhoAberto.addEventListener("click", () => {
    senha.type = "text";
    olhoAberto.style.display = "none";
    olhoFechado.style.display = "inline";
});

olhoFechado.addEventListener("click", () => {
    senha.type = "password";
    olhoFechado.style.display = "none";
    olhoAberto.style.display = "inline";
});