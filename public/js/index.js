const inputZona = document.querySelector("#select_zone");
const inputBairro = document.querySelector("#select_neighbourhood");
const inputComercio = document.querySelector("#select_business");
const btnCheckRegion = document.querySelector("#btn-check-region");

inputZona.addEventListener("change", event => showOptions(event.target.value));

const bairrosLeste = [
    { value: "tatuape", option: "Tatuapé" },
    { value: "analia-franco", option: "Anália Franco" },
    { value: "mooca", option: "Mooca" },
    { value: "vila-prudente", option: "Vila Prudente" },
    { value: "vila-carrao", option: "Vila Carrão" }
];

const bairrosOeste = [
    { value: "jardins", option: "Jardins" },
    { value: "pinheiros", option: "Pinheiros" },
    { value: "vila-madalena", option: "Vila Madalena" },
    { value: "perdizes", option: "Perdizes" },
    { value: "pacaembu", option: "Pacaembu" }
];

const bairrosNorte = [
    { value: "santana", option: "Santana" },
    { value: "tucuruvi", option: "Tucuruvi" },
    { value: "agua-fria", option: "Água Fria" },
    { value: "mandaqui", option: "Mandaqui" },
    { value: "jardim-franca", option: "Jardim França" }
];

const bairrosSul = [
    { value: "itaim-bibi", option: "Itaim Bibi" },
    { value: "moema", option: "Moema" },
    { value: "campo-belo", option: "Campo Belo" },
    { value: "brooklin", option: "Brooklin" },
    { value: "chacara-flora", option: "Chácara Flora" }
];

function createListOptions(list) {
    return list.map(bairro => `<option value="${bairro.value}">${bairro.option}</option>`);
}

function showOptions(zona) {
    console.log(zona)
    if(zona === "leste") {
        inputBairro.innerHTML = `
            <option value="#">Escolha um bairro</option>
            ${createListOptions(bairrosLeste)}
        `;
    } else if(zona === "oeste") {
        inputBairro.innerHTML = `
            <option value="#">Escolha um bairro</option>
            ${createListOptions(bairrosOeste)}
        `;
    } else if(zona === "norte") {
        inputBairro.innerHTML = `
            <option value="#">Escolha um bairro</option>
            ${createListOptions(bairrosNorte)}
        `;
    } else {
        inputBairro.innerHTML = `
            <option value="#">Escolha um bairro</option>
            ${createListOptions(bairrosSul)}
        `;
    }
}

function redirecionar() {
    window.location.href = "./login.html";
}

function logout() {
    sessionStorage.clear();
}