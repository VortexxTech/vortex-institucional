const inputZona = document.querySelector("#select_zone");
const inputBairro = document.querySelector("#select_neighbourhood");
const inputComercio = document.querySelector("#select_business");
const btnCheckRegion = document.querySelector("#btn-check-region");
const inputsError = document.querySelector(".inputs-error");

window.addEventListener("load", () => {
    inputZona.value = "#";
    inputBairro.value = "#";
    inputComercio.value = "#";
});

inputZona.addEventListener("change", event => showOptions(event.target.value));

const bairrosLeste = [
    { value: "tatuape", option: "Tatuapé" },
    { value: "analia-franco", option: "Jardim Anália Franco" },
    { value: "mooca", option: "Mooca" },
    { value: "vila-prudente", option: "Vila Prudente" },
    { value: "vila-carrao", option: "Vila Carrão" }
];

const bairrosOeste = [
    { value: "jardins", option: "Jardins" },
    { value: "pinheiros", option: "Pinheiros" },
    { value: "vila-madalena", option: "Vila Madalena" },
    { value: "perdizes", option: "Perdizes" },
    { value: "higienopolis", option: "Higienópolis" }
];

const bairrosNorte = [
    { value: "santana", option: "Santana" },
    { value: "tucuruvi", option: "Tucuruvi" },
    { value: "agua-fria", option: "Água Fria" },
    { value: "mandaqui", option: "Mandaqui" },
    { value: "jardim-franca", option: "Jardim Franca" }
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
    } else if(zona === "sul") {
        inputBairro.innerHTML = `
            <option value="#">Escolha um bairro</option>
            ${createListOptions(bairrosSul)}
        `;
    } else {
        inputBairro.innerHTML = `
            <option value="#">Escolha um bairro</option>
        `
    }
}


btnCheckRegion.addEventListener("click", verifyInputs);

async function verifyInputs() {
    if(inputBairro.value != "#" && inputZona != "#" && inputComercio != "#") {
        inputsError.textContent = "";
        const { lat, lng } = await searchCoordenatesLocation(inputBairro.value);
        await renderNewMap(lat, lng);
    } else {
        inputsError.textContent = "Todas as opções devem ser escolhidas!";
    }
}

let map;
// Initialize and add the map
async function initialMap() {
    // The location of Uluru
    const positionInitial = { lat: -23.558042, lng: -46.661806 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
    // The map, centered at Uluru
    map = new Map(document.getElementById("google-maps"), {
        zoom: 18,
        center: positionInitial,
        mapId: "initial-map",
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });
    
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map,
        position: positionInitial,
        title: "SPTECH",
    });
}
initialMap();


async function searchCoordenatesLocation(location) {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}+SP&key=AIzaSyAZ1fxZbFbVn-_kYwARcjaZ3HAWiH6FDPA`);
    const data = await res.json();
    console.log("depois de buscar as coords com base no texto do input: ");
    console.log(data);
    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;
    
    return { lat, lng };
}

async function renderNewMap(lat, lng) {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    let positionCenter = new google.maps.LatLng(lat, lng);
    
    map = new Map(document.getElementById("google-maps"), {
        center: positionCenter,
        zoom: 11,
        mapId: "re-render-map",
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });
    nearbySearch(lat, lng);
}

async function nearbySearch(lat, lng) {
    //@ts-ignore
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary(
        "places",
    );
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    // Restrict within the map viewport.
    let center = new google.maps.LatLng(lat, lng);
    const request = {
        // required parameters
        fields: ["displayName", "location", "businessStatus"],
        locationRestriction: {
            center: center,
            radius: 1000,
        },
        // optional parameters
        includedPrimaryTypes: [inputComercio.value],
        maxResultCount: 10,
        rankPreference: SearchNearbyRankPreference.POPULARITY,
        language: "en-US",
        region: "us",
    };

    //@ts-ignore
    console.log("antes da função searchNearby")
    const { places } = await Place.searchNearby(request);
    console.log("depois da função searchNearby")
    
    if (places.length) {
        console.log(places);
        
        const { LatLngBounds } = await google.maps.importLibrary("core");
        const bounds = new LatLngBounds();
        
        // Loop through and get all the results.
        places.forEach((place) => {
            const markerView = new AdvancedMarkerElement({
                map,
                position: place.location,
                title: place.displayName,
            });
            
            bounds.extend(place.location);
            console.log(place);
        });
        map.fitBounds(bounds);
    } else {
        console.log("No results");
    }
}

function redirecionar() {
    window.location.href = "./login.html";
}

function logout() {
    sessionStorage.clear();
}