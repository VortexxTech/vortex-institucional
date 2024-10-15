var input_email = document.querySelector("#ipt_email");
var input_senha = document.querySelector("#ipt_senha");

function login() {
    var email = input_email.value;
    var senha = input_senha.value;

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(usuario => {
                sessionStorage.EMAIL_USUARIO = email;
                sessionStorage.NOME_USUARIO = usuario[0].nomeCompleto;
                sessionStorage.ID_USUARIO = usuario[0].idUsuario;
            });
            
            window.location = "./dashboard.html"
        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            alert("Houve um erro ao tentar realizar o login, email e/ou senha inválido(s)!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}