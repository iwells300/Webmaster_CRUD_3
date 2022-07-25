const tiles='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var myMap = L.map("map", {center: [-34.464665,-58.523472-0.003], zoom: 17, zoomControl: false});

L.tileLayer(tiles,{
    maxZoom:20
}).addTo(myMap);

let iconMarker=L.icon({
    iconUrl:'ImagenesS1/concesionario-mark.png',
    iconSize:[60,60],
    iconAnchor:[30,60]
})

let marcador=L.marker([-34.464665,-58.523472],{icon:iconMarker}).addTo(myMap);

L.tileLayer(tiles, {foo: 'bar', attribution: '<p>openstreetmap.org</p>'}).addTo(myMap);
var padding=L.point(-400,0);

function reeplazarTexto(direccionLocal,telefonoLocal,emailLocal){
    direccion.textContent=direccionLocal;
    telefono.textContent=telefonoLocal;
    email.textContent=emailLocal;
}

function cambiarImagen(nuevaImagen){
    foto.setAttribute("style","background-image: url('"+nuevaImagen+"')");
}

function mapa(x,y){
    myMap.setView([x,y-0.003],17);  
    let marcador=L.marker([x,y],{icon:iconMarker}).addTo(myMap);
}

const seleccionProvincia=(event)=>{    
    provincia=event.target.classList[2];
    switch(provincia){
        case "bs":            
            mapa(-34.464665,-58.523472);
            reeplazarTexto("Av. Centenario 1480","+54 (011) 4469-4755","silver-central@info.com");
            cambiarImagen("/ImagenesS1/concesionarioBs.jpg");
            break;
        case "mdz":
            mapa(-32.889994,-68.843142);            
            reeplazarTexto("Patricias Mendocinas 1062","+54 (0261) 487-4753","silver-mendoza@info.com")
            cambiarImagen("/ImagenesS1/concesionarioMdz.jpg");
            break;
        case "sla":
            mapa(-24.775797,-65.414320);            
            reeplazarTexto("O'Higgins 937","+54 (0387) 431 1568","silver-salta@info.com");
            cambiarImagen("/ImagenesS1/concesionarioSla.jpg");
            break;
        default:
            mapa(-34.464665,-58.523472);
            break;
    }
}
    
var provincias=document.getElementsByName("radioProvincia");
var direccion=document.getElementById("direccion");
var telefono=document.getElementById("telefono");
var email=document.getElementById("email");
var foto=document.querySelector(".contacto-img");

for(sucursal of provincias){    
     sucursal.addEventListener("change",seleccionProvincia);
 }

