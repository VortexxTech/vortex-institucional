function redirecionar() {
    window.location.href = "./login.html";
}

function logout() {
    sessionStorage.clear();
}

// Initialize and add the map
let map;
async function initMap() {

    // The location of Uluru
    const position = { lat: -23.557577, lng: -46.686329 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("google-maps"), {
    zoom: 15,
    center: position,
    mapId: "testeing",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
    });
}

initMap();