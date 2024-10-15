var input_nome = document.querySelector("#ipt_nome");
var input_email = document.querySelector("#ipt_email");
var input_senha = document.querySelector("#ipt_senha");
var btn_login = document.querySelector(".btn-login");


function registrar() {
  var nome = input_nome.value;
  var email = input_email.value;
  var senha = input_senha.value;
  var numeros = "0123456789"
  var validacao_numero = false;
  var caracteres_especiais = "!@#$%^&*.";
  var validacao_especial = false
  var email_arroba = email.indexOf('@');

  if (nome == "" || email == "" || senha == "") {

    alert("Preencha todos os campos para continuar");

  }

  for (var index = 0; index < senha.length; index++) {
    if (numeros.indexOf(senha[index]) !== -1) {
      validacao_numero = true;
      break;
    }
  }

  for (var i = 0; i < senha.length; i++) {
    if (caracteres_especiais.indexOf(senha[i]) !== -1) {
      validacao_especial = true;
      break;
    }
  }

  if (senha.length < 8 || validacao_numero == false || validacao_especial == false) {

    alert("Senha inválida! A senha deve conter pelo menos 8 carateres, sendo pelo menos 1 número e 1 caractere especial");

  } else if (email_arroba < 0) {

    alert("Email inválido")

  } else {

    
    fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeServer: nome,
      emailServer: email,
      senhaServer: senha
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);
  
      if (resposta.ok) {
        setTimeout(() => {
          window.location = "./login.html";
        }, "2000");
  
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
    
  }
}
