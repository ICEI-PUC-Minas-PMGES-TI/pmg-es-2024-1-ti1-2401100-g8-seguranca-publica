function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -14.2350, lng: -51.9253 }, // Centro aproximado do Brasil
        zoom: 4
    });

    window.searchLocation = function () {
        var estado = document.getElementById('estado').value;
        var regiao = document.getElementById('regiao').value;

        var locations = {
            "AC": { lat: -9.0238, lng: -70.8120 },
            "AL": { lat: -9.5713, lng: -36.7820 },
            "AP": { lat: 0.9020, lng: -52.0033 },
            "AM": { lat: -3.4168, lng: -65.8561 },
            "BA": { lat: -12.5797, lng: -41.7007 },
            "CE": { lat: -5.4984, lng: -39.3206 },
            "DF": { lat: -15.8267, lng: -47.9218 },
            "ES": { lat: -19.1834, lng: -40.3089 },
            "GO": { lat: -15.8270, lng: -49.8362 },
            "MA": { lat: -4.9609, lng: -45.2744 },
            "MT": { lat: -12.6819, lng: -56.9211 },
            "MS": { lat: -20.7722, lng: -54.7852 },
            "MG": { lat: -18.5122, lng: -44.5550 },
            "PA": { lat: -3.4168, lng: -52.9601 },
            "PB": { lat: -7.2390, lng: -36.7820 },
            "PR": { lat: -24.0469, lng: -51.2365 },
            "PE": { lat: -8.8137, lng: -36.9541 },
            "PI": { lat: -6.7242, lng: -42.9023 },
            "RJ": { lat: -22.9099, lng: -43.2095 },
            "RN": { lat: -5.4026, lng: -36.9541 },
            "RS": { lat: -30.0346, lng: -51.2177 },
            "RO": { lat: -10.8267, lng: -63.3056 },
            "RR": { lat: 2.7376, lng: -62.0751 },
            "SC": { lat: -27.2423, lng: -50.2189 },
            "SP": { lat: -23.5505, lng: -46.6333 },
            "SE": { lat: -10.5741, lng: -37.3857 },
            "TO": { lat: -10.1753, lng: -48.2982 }
        };

        if (locations[estado]) {
            map.setCenter(locations[estado]);
            map.setZoom(7); // Ajuste o nível de zoom conforme necessário

            // Adicionar pontos aleatórios
            addRandomPoints(map);
        } else {
            alert('Localização não encontrada!');
        }
    };
}

function addRandomPoints(map) {
    // Polígono que delimita o Brasil
    const brazilPolygon = new google.maps.Polygon({
        paths: [
            { lat: 5.27144, lng: -60.5495 },
            { lat: -33.751, lng: -53.373 },
            { lat: -34.016, lng: -54.572 },
            { lat: -33.742, lng: -57.003 },
            { lat: -33.691, lng: -58.474 },
            { lat: -32.829, lng: -58.427 },
            { lat: -32.761, lng: -59.757 },
            { lat: -30.205, lng: -57.373 },
            { lat: -29.668, lng: -56.982 },
            { lat: -28.428, lng: -56.982 },
            { lat: -28.063, lng: -57.625 },
            { lat: -27.615, lng: -57.78 },
            { lat: -26.788, lng: -58.274 },
            { lat: -26.244, lng: -58.228 },
            { lat: -24.546, lng: -57.878 },
            { lat: -23.556, lng: -57.877 },
            { lat: -23.552, lng: -55.611 },
            { lat: -22.282, lng: -55.614 },
            { lat: -22.062, lng: -56.44 },
            { lat: -21.214, lng: -57.833 },
            { lat: -19.517, lng: -57.842 },
            { lat: -18.173, lng: -57.872 },
            { lat: -17.801, lng: -58.173 },
            { lat: -16.918, lng: -58.25 },
            { lat: -16.299, lng: -58.724 },
            { lat: -15.661, lng: -60.149 },
            { lat: -14.996, lng: -60.419 },
            { lat: -14.407, lng: -60.459 },
            { lat: -13.584, lng: -60.544 },
            { lat: -12.949, lng: -60.909 },
            { lat: -12.251, lng: -60.986 },
            { lat: -12.026, lng: -60.754 },
            { lat: -11.189, lng: -61.44 },
            { lat: -10.871, lng: -62.205 },
            { lat: -10.153, lng: -62.433 },
            { lat: -9.522, lng: -62.244 },
            { lat: -8.887, lng: -62.265 },
            { lat: -8.427, lng: -62.075 },
            { lat: -8.136, lng: -61.713 },
            { lat: -7.694, lng: -61.21 },
            { lat: -7.288, lng: -60.546 },
            { lat: -7.193, lng: -60.198 },
            { lat: -6.987, lng: -60.058 },
            { lat: -6.595, lng: -60.108 },
            { lat: -6.141, lng: -59.96 },
            { lat: -5.738, lng: -60.031 },
            { lat: -5.51, lng: -59.813 },
            { lat: -5.218, lng: -59.998 },
            { lat: -4.827, lng: -59.967 },
            { lat: -4.49, lng: -60.142 },
            { lat: -4.151, lng: -60.405 },
            { lat: -3.789, lng: -60.78 },
            { lat: -3.567, lng: -60.802 },
            { lat: -3.255, lng: -60.926 },
            { lat: -2.828, lng: -60.707 },
            { lat: -2.589, lng: -60.95 },
            { lat: -2.194, lng: -60.852 },
            { lat: -1.851, lng: -61.311 },
            { lat: -1.454, lng: -61.086 },
            { lat: -1.233, lng: -61.331 },
            { lat: -0.785, lng: -61.183 },
            { lat: -0.418, lng: -61.291 },
            { lat: -0.095, lng: -61.173 },
            { lat: 0.179, lng: -61.255 },
            { lat: 0.53, lng: -61.196 },
            { lat: 0.702, lng: -61.041 },
            { lat: 1.363, lng: -61.406 },
            { lat: 1.832, lng: -61.262 },
            { lat: 2.13, lng: -61.263 },
            { lat: 2.281, lng: -61.508 },
            { lat: 2.773, lng: -61.392 },
            { lat: 3.037, lng: -61.518 },
            { lat: 3.326, lng: -61.423 },
            { lat: 3.652, lng: -61.514 },
            { lat: 3.72, lng: -61.312 },
            { lat: 4.203, lng: -61.218 },
            { lat: 4.371, lng: -61.36 },
            { lat: 4.853, lng: -61.187 },
            { lat: 5.271, lng: -60.55 },
        ]
    });

    // Função para gerar coordenadas aleatórias dentro dos limites do Brasil
    function getRandomCoordinate() {
        const lat = Math.random() * (5.27 - (-33.75)) + (-33.75); // Latitude entre -33.75 e 5.27
        const lng = Math.random() * (-32.39 - (-73.99)) + (-73.99); // Longitude entre -73.99 e -32.39
        return { lat: lat, lng: lng };
    }

    // Verificar se o ponto está dentro do polígono do Brasil
    function isPointInBrazil(point) {
        return google.maps.geometry.poly.containsLocation(new google.maps.LatLng(point), brazilPolygon);
    }

    // Adicionar 100 pontos aleatórios no mapa
    for (let i = 0; i < 100; i++) {
        let randomCoordinate = getRandomCoordinate();
        while (!isPointInBrazil(randomCoordinate)) {
            randomCoordinate = getRandomCoordinate();
        }
        new google.maps.Marker({
            position: randomCoordinate,
            map: map
        });
    }
}
    