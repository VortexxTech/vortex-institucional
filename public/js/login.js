var input_email = document.querySelector("#ipt_email");
var input_senha = document.querySelector("#ipt_senha");

async function login() {
    var email = input_email.value;
    var senha = input_senha.value;

    const res = await fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    })

    const data = await res.json();

    if (data) {
        console.log(data)
        nome = data[0].nome;
        idUsuario = data[0].idUsuario;

        sessionStorage.setItem("NOME_USUARIO", nome);
        sessionStorage.setItem("ID_USUARIO", idUsuario);
        
        window.location = "./dashboard.html"
    } else {

        console.log("Houve um erro ao tentar realizar o login!");
        alert("Houve um erro ao tentar realizar o login, email e/ou senha inválido(s)!");

        resposta.text().then(texto => {
            console.error(texto);
        });
    }
}