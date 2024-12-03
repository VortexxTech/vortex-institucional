var input_idUsuario = document.querySelector("#ipt_id_usuario");
var input_cpf = document.querySelector("#ipt_cpf");
var input_cargo = document.querySelector("#ipt_cargo");
var btn_login = document.querySelector(".btn_login");


function cadastroFunc() {
  var idUsuario = input_idUsuario.value;
  var cpf = input_cpf.value;
  var cargo = input_cargo.value;
  var numeros = "0123456789"
  var validacao_numero = false;
  var caracteres_especiais = "!@#$%^&*.-";
  var validacao_especial = false

  if (idUsuario == "" || cpf == "" || cargo == "") {
    alert("Preencha todos os campos para continuar");
  }

  for (var index = 0; index < cpf.length; index++) {
    if (numeros.indexOf(cpf[index]) !== -1) {
      validacao_numero = true;
      break;
    }
  }

  for (var i = 0; i < cpf.length; i++) {
    if (caracteres_especiais.indexOf(cpf[i]) !== -1) {
      validacao_especial = true;
      break;
    }
  }

  if (cpf.length < 12 || validacao_numero == false || validacao_especial == false) {
    alert("cpf inválido! O cpf deve conter pelo menos 12 carateres, sendo pelo menos 1 número e 1 caractere especial");
  } else {

    fetch("/funcionario/cadastrarFunc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuarioServer: idUsuario,
        cpfServer: cpf,
        cargoServer: cargo
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          setTimeout(() => {
            window.location = "./dashboard.html";
          }, "2000");

        } else {
          throw "Houve um erro ao tentar realizar o cadastro do funcionario!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
}

