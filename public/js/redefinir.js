const novaSenha = document.querySelector("#redefinirSenha");
const confirmarSenha = document.querySelector("#senha");
const senha = sessionStorage.getItem("senha");
const senhaAtual = document.querySelector("#senhaAtual");
const btn = document.querySelector(".botaoRedefinir");

function validarSenha() {
    if (senha === senhaAtual.value) {
        if (novaSenha.value === confirmarSenha.value) {
            alert("Senha alterada com sucesso!");
        } else {
            alert("As senhas não coincidem!");
        }
    } else {
        alert("Senha atual incorreta!");
    }
}

btn.addEventListener("click", validarSenha);