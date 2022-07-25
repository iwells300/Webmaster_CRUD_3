let servicios=document.querySelectorAll('.icono--taller');
let titulo=document.querySelector(".serviciosTaller");

let contador=0;

function s1(){
servicios[contador].style.color="yellow";
servicios[contador].classList.add("icono--parpadea");

if(contador==0){
    titulo.textContent="Normal";
}
if(contador==1){
    titulo.textContent="Taller mecanico";
}
if(contador==2){
    titulo.textContent="Service tecnico";
}

for (let i=0;i<3;i++){  
    if (i!=contador){
        servicios[i].style.color="white";        
        servicios[i].classList.remove("icono--parpadea");
    }    
}

contador++;
if (contador==3){
    contador=0;
}
}

setInterval(s1,5000);


