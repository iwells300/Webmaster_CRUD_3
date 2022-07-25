function cambiaFoto(modelo,event){
    let nombre=event.target.innerHTML; 
    let fotoAuto=document.querySelector('.coloresAuto--div__foto');
    fotoAuto.setAttribute("src", "ImagenesS1/"+modelo.toLowerCase()+"/"+nombre+".jpg");
    seleccionarDes('.coloresAuto--txt__c',event.target);    
}

const cambiaColorFondo=(event)=>{
    let claseElemento=event.target.classList.item(0);     
    if(claseElemento=="display-6"){
        elemento=event.target.parentElement;        
    }else{
        elemento=event.target;        
    }
    let nombre=elemento.firstElementChild.innerHTML;     
    switch(nombre){
        case "Focus":            
            const focus=new autoSeleccionado(nombre);
            focus.generadorUno();
            break;
        case "Fiesta":
            const fiesta=new autoSeleccionado(nombre);
            fiesta.generadorUno();
            break;
        case "F-150":
            const f150=new autoSeleccionado("F150");
            f150.generadorUno();
            break;
        case "Ecosport":
            window.open("error404.html");
            break;
        case "Mustang":
            window.open("error404.html");
            break;
        case "Ranger":
            const ranger=new autoSeleccionado(nombre);
            ranger.generadorUno();
            break;
        default:
            alert("ninguno");
    }
}

let autos=document.querySelectorAll('.tarjeta');

for(auto of autos){    
    auto.addEventListener("click",cambiaColorFondo);
}

class autoSeleccionado{
    constructor(modelo){
        this.modelo=modelo;        
        this.coloresDisponibles=[];
        switch(modelo){
            case "Focus":
                this.colorFondoFoto="white";            
                this.coloresDisponibles=[
                    "Azul Aurora",
                    "Blanco Oxford",
                    "Cafayate",
                    "Gris Magnetic",
                    "Gris Mercurio",
                    "Gris Tectonic",
                    "Negro Perlado",
                    "Plata Metalizada",
                    "Rojo Bari"
                ]
                break;
            case "Fiesta":
                this.colorFondoFoto="#563994";   
                this.coloresDisponibles=[
                    "Gris Plata",
                    "Rojo Rubi",
                    "Azul Mediterraneo",
                    "Rojo Sport",
                    "Blanco Oxford",
                    "Negro Perlado"
                ]
                break;
            case "Ranger":
                this.colorFondoFoto="#d6dde3";   
                this.coloresDisponibles=[
                    "Azul Belice",
                    "Plata Metalizada",
                    "Rojo Bari",
                    "Gris Magnetic",
                    "Blanco Oxford",
                    "Negro Perlado"
                ]
                break;
            case "F150":
                this.colorFondoFoto="#dfe1e3";   
                this.coloresDisponibles=[
                    "Blanco Metalico",
                    "Rojo Racing",                    
                    "Negro Ebony"
                ]
                break;
            default:
                alert("ninguno");
        }
    }

    colocarNombre(){
        let nombreAuto=document.querySelector(".tarjetaDescripcion--Titulo");
        nombreAuto.style.color="#003478";
        nombreAuto.style.padding="2vw";
        nombreAuto.textContent="Ford "+this.modelo; 
             
    }

    colocarColores(){
        let fotoAuto=document.querySelector('.coloresAuto--div__foto');
        let contenedorFoto=document.querySelector(".coloresAuto--div");
        let coloresAuto=document.querySelector('.coloresAuto--txt__colores');
        let coloresExistentes=document.querySelectorAll(".coloresAuto--txt__c");

        for(let coloresViejos of coloresExistentes){    
            coloresAuto.removeChild(coloresViejos);
        }

        for (let colores of this.coloresDisponibles){            
            let colorItem=document.createElement("DIV");
            let textoItem=document.createTextNode(colores);
            colorItem.classList.add("coloresAuto--txt__c");
            colorItem.style.backgroundColor=coloresHexa(colores);
            colorItem.style.color="white";
            let f1=colores.search("Blanco");
            let f2=colores.search("Gris Plata");
            if (f1>=0 || f2>=0){
                colorItem.style.color="black";
            }       
            colorItem.appendChild(textoItem);
            coloresAuto.appendChild(colorItem);
        }
        
        fotoAuto.setAttribute("src", "ImagenesS1/"+this.modelo.toLowerCase()+"/"+this.coloresDisponibles[0]+".jpg");
        contenedorFoto.style.backgroundColor=this.colorFondoFoto;

        let listaColores=document.querySelectorAll('.coloresAuto--txt__c');

        for(let color of listaColores){    
            color.addEventListener("click",cambiaFoto.bind(this,this.modelo));
        }
    }

    colocarContenido(){
        const requestURL = 'JsonS1/'+this.modelo.toLowerCase()+'.json';        
        const request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            const jsonModelo = request.response;            
            generadorD3(jsonModelo);
        }

        let d1=document.querySelector('.d1');
        let d2=document.querySelector('.d2');
        let d1viejos=document.querySelector('.d1--img');
        let d2viejos=document.querySelector('.d2--img');        

        d1.removeChild(d1viejos);
        d2.removeChild(d2viejos);        

        let im1 = document.createElement('img');
        let im2 = document.createElement('img');

        im1.setAttribute("src","ImagenesS1/"+this.modelo.toLowerCase()+"/d1.jpg"); 
        im2.setAttribute("src","ImagenesS1/"+this.modelo.toLowerCase()+"/d2.jpg"); 

        im1.classList.add("d1--img");
        im2.classList.add("d2--img");           
           
        d1.appendChild(im1);
        d2.appendChild(im2);
    }

    ampliarDescripcion(){
        let tarjetas=document.querySelectorAll('.tarjeta');
        let tarjetaDescripcion=document.querySelector('.tarjetaDescripcion');
        let tarjetaColores=document.querySelector('.coloresAuto');
        let tarjetaColoresDiv=document.querySelector('.coloresAuto--div');

        for(let tarjeta of tarjetas){
            tarjeta.style.width="20vw";
            tarjeta.style.height="20vh";
            tarjeta.style.margin="0.2em";     
            tarjeta.style.borderRadius="1em";     
        }

        tarjetaDescripcion.style.visibility="visible";
        tarjetaDescripcion.style.height="auto";
        tarjetaColores.style.height="auto";
        tarjetaColoresDiv.style.height="25em";

        document.querySelector(".tarjetaDescripcion--Titulo").scrollIntoView(); 
        
        
    }

    generadorUno(){
        
        this.colocarNombre();
        this.colocarColores();
        this.colocarContenido();
        this.ampliarDescripcion();
       
    }    
}

function generadorD3(jsonObj){    
    let tipoD3= jsonObj['tipoD3'];
    let sectorD3=document.querySelector('.d3');
    const tarjetas = jsonObj['tarjetasD3'];
    let sectorD3Viejo=document.querySelectorAll('.tarjetasD3');

    for (tarjetaVieja of sectorD3Viejo){
        sectorD3.removeChild(tarjetaVieja);
    }

    for (var i = 0; i < tarjetas.length; i++) {

        if(tipoD3=='modelos'){
            const articulo = document.createElement('article');
            const myH2 = document.createElement('h4');
            const lista = document.createElement('ol');            
            
            myH2.textContent = tarjetas[i].titulo;
            articulo.appendChild(myH2);            
            
            for (var m = 0; m < tarjetas[i].contenido.length; m++) {
                const myPara1 = document.createElement('li');                
                myPara1.textContent = tarjetas[i].contenido[m];
                myPara1.setAttribute("style","text-align: justify");            
                lista.appendChild(myPara1);                             
            }

            articulo.appendChild(lista);
            articulo.classList.add("tarjetasD3");       
            sectorD3.appendChild(articulo);
        }else{
            const articulo = document.createElement('article');
            const myH2 = document.createElement('h4');
            const myPara1 = document.createElement('p');
            myH2.textContent = tarjetas[i].titulo;
            myPara1.textContent = tarjetas[i].contenido;
            articulo.classList.add("tarjetasD3");
            articulo.appendChild(myH2);
            articulo.appendChild(myPara1);
            sectorD3.appendChild(articulo);
        }      
    }
}

function seleccionarDes(grupo,atributo){
    let listaColores=document.querySelectorAll(grupo);

    for(let color of listaColores){ 
        
        if(color==atributo){
            color.style.outline="3px solid #003478";
            color.style.fontWeight="900" ;
        } else{
            color.style.outline="1px solid #003478";
            color.style.fontWeight="100" ;
        }
    }
}

function coloresHexa(nombreColor) {
    let diccionarioColores={
        "Blanco Oxford":"#f7f7f7",
        "Azul Aurora":"#1f4494",        
        "Cafayate":"#a92634",
        "Gris Magnetic":"#3a3a3c",
        "Gris Mercurio":"#717578",
        "Gris Tectonic":"#857e74",
        "Negro Perlado":"#1b1e25",
        "Plata Metalizada":"#929398",
        "Rojo Bari":"#dd1d28",
        "Gris Plata":"#cdcdcd",
        "Rojo Rubi":"#99231d",
        "Azul Mediterraneo":"#00617e",
        "Rojo Sport":"#cb0e1b",
        "Azul Belice":"#3266cf",
        "Blanco Metalico":"#dedede",
        "Rojo Racing":"#790208",
        "Negro Ebony":"#0c0c0c"    
    }    
    return diccionarioColores[nombreColor];
}



  
