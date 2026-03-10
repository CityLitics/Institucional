const email = document.querySelector("#redefinirSenha");
const btn = document.querySelector("#botaoEnviar");

email.addEventListener("input", () => {
    if (email.value.length >= 10 && email.value.includes("@") && (email.value.includes(".com") || email.value.includes(".br") || email.value.includes(".net") || email.value.includes(".org")) ) {
        btn.style.backgroundColor = "#4CAF50";
    }
})

let emailSalvo = sessionStorage.getItem("email");

function validarEmail () {
    if (email.value == emailSalvo) {
        alert('Email correto');

        setInterval(() => {
            location.href = "login.html";
        }, 2500);
    } else {
        alert("Email não encontrado");
    }
}

btn.addEventListener('click', validarEmail);