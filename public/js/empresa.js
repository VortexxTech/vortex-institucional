var input_nome = document.querySelector("#ipt_nome");
var input_cnpj = document.querySelector("#ipt_email");
var input_cep = document.querySelector("#ipt_cep");
var input_cidade = document.querySelector("#ipt_cidade");
var input_bairro = document.querySelector("#ipt_bairro");
var input_numero = document.querySelector("#ipt_numero");
var input_senha = document.querySelector("#ipt_senha");
var btn_login = document.querySelector(".btn_login");


function registrarEmp() {
  var nome = input_nome.value;
  var cnpj = input_cnpj.value;
  var cep = input_cep.value;
  var cidade = input_cidade.value;
  var bairro = input_bairro.value;
  var numero = input_numero.value;
  var senha = input_senha.value;
  var numeros = "0123456789"
  var validacao_numero = false;
  var caracteres_especiais = "!@#$%^&*.";
  var validacao_especial = false

  if (nome == "" || cnpj == "" || cep == "" || cidade == ""
    || bairro == "" || numero == "" || senha == ""
  ) {
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

  } else {
    fetch("/empresa/cadastrarEmp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nome,
        cnpjServer: cnpj,
        cepServer: cep,
        cidadeServer: cidade,
        bairroServer: bairro,
        numeroServer: numero,
        senhaServer: senha
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          setTimeout(() => {
            window.location = "./dashboard.html";
          }, "2000");

        } else {
          throw "Houve um erro ao tentar realizar o cadastro da empresa!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
}

function login() {
  var cnpj = input_cpnj.value;
  var senha = input_senha.value;

  fetch("/empresa/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cnpjServer: cnpj,
      senhaServer: senha
    })
  }).then(function (resposta) {

    if (resposta.ok) {
      console.log(resposta);
      resposta.json().then(empresa => {
        sessionStorage.CNPJ_EMPRESA = email;
        sessionStorage.NOME_EMPRESA = empresa[0].nomeEmpresa;
        sessionStorage.ID_EMPRESA = empresa[0].idEmpresa;
      });

      window.location = "./gerenciamento.html"
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