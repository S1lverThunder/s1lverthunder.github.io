const CALCULAR = document.getElementById('calcular');
const HOLLYDAY = document.getElementById('hollyday'); 
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

function calcHollyday(peso){
    SC = ( (peso * 4) + 7) / (peso + 90);
    if (HOLLYDAY.value == 0){
        return SC*1500;
    }
    else{
        return SC*2000;
    }
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = 0;
        if (DATO > 30){
            flujo = calcHollyday(DATO);
        }
        else{
            flujo = calcFlujo(DATO);
        }
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

HOLLYDAY.addEventListener('click', () => {
    if(HOLLYDAY.value == 0){
        HOLLYDAY.style.backgroundColor = "#9E768F";
        HOLLYDAY.innerHTML = "2000";
        HOLLYDAY.value = 1;
    }
    else{
        HOLLYDAY.style.backgroundColor = "#9FA4C4";
        HOLLYDAY.innerHTML = "1500";
        HOLLYDAY.value = 0;
    }
})