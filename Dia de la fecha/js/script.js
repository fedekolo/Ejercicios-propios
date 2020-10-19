function resultado() {
    // obtengo los elementos del html
    let dia = document.querySelector("#dia");
    let mes = document.querySelector("#mes");
    let año = document.querySelector("#año");
    let contenedorResultado = document.querySelector("#contenedor-resultado");

    let valorDia = parseInt(dia.value);
    let valorMes = parseInt(mes.value);
    let valorAño = parseInt(año.value);
    let resultadoDia;
    let impresionResultado;

    // ALERTAS
    
    // año fuera de rango
    let alertaError1;
    if (1700 > valorAño || valorAño > 2299 || !valorAño) {
        alertaError1 = "El año ingresado no se encuentra entre el 1700 y el 2299";
        impresionResultado = alertaError1;
    } else {
        alertaError1 = "";
    }
    
    // dia no correspondiente al mes
    let alertaError2;
    if (valorMes===2 || valorMes===4 || valorMes===6 || valorMes===9 || valorMes===11) {
        if (valorDia===31 && 1700 <= valorAño && valorAño <= 2299) {
            alertaError2 = "Este mes no cuenta con 31 dias";
            impresionResultado = alertaError2;
        }
    } else {
        alertaError2 = "";
    }
    
    // VARIABLE A: siglos
    let variableA;
    
    if (1700 <= valorAño && valorAño <= 1799) {
        variableA = 5;
    }
    
    else if (1800 <= valorAño && valorAño <= 1899) {
        variableA = 3;
    }
    
    else if (1900 <= valorAño && valorAño <= 1999) {
        variableA = 1;
    }
    
    else if (2000 <= valorAño && valorAño <= 2099) {
        variableA = 0;
    }
    
    else if (2100 <= valorAño && valorAño <= 2199) {
        variableA =-2;
    }
    
    else if (2200 <= valorAño && valorAño <= 2299) {
        variableA = -4;
    }

    // VARIABLE B: años
    let variableB = parseInt(año.value.substring(2))*1.25;

    // VARIABLE C: años bisiestos
    let variableC = 0; 

    if (valorMes===1 || valorMes===2) {
        if (parseInt(año.value.substring(2)) == 00) {
            if (año.value%400===0) {
               variableC = -1; 
            }
        } else {
            if (parseInt(año.value.substring(2))%4===0) {
                variableC = -1;
            }
        } 
    }

    // alerta por dia erroneo en febrero por ser año no bisiesto
        let alertaError3;
        if (valorMes===2 && 1700 <= valorAño && valorAño <= 2299) {
            if (variableC===-1) {
                if (valorDia===30) {
                    alertaError3 = "Este mes no cuenta con 30 dias";
                    impresionResultado = alertaError3;
                }
            } else if (variableC===0) {
                if (valorDia===30) {
                    alertaError3 = "Este mes no cuenta con 30 dias";
                    impresionResultado = alertaError3;
                } else if (valorDia===29) {
                    alertaError3 = "Este mes no cuenta con 29 dias";
                    impresionResultado = alertaError3;
                }
            }
        } else {
            alertaError3 = "";
        }    

    // VARIABLE D: meses
    let variableD;

    if (valorMes===1 || valorMes===10) {
        variableD = 6;
    } else if (valorMes===2 || valorMes===3 || valorMes===11) {
        variableD = 2;
    } else if (valorMes===4 || valorMes===7) {
        variableD = 5;
    } else if (valorMes===5) {
        variableD = 0;
    } else if (valorMes===6) {
        variableD = 3;
    } else if (valorMes===8) {
        variableD = 1;
    } else if (valorMes===9 || valorMes===12) {
        variableD = 4
    }

    // VARIABLE E: dia
    let variableE = valorDia;

    // CALCULO
    let resultadoVariables = variableA+variableB+variableC+variableD+variableE;

    while (resultadoVariables > 6) {
        resultadoVariables = parseInt(resultadoVariables-7);
    }

    // RESULTADO
    if (resultadoVariables===1) {
        resultadoDia = "Lunes";
    } else if (resultadoVariables===2) {
        resultadoDia = "Martes";
    } else if (resultadoVariables===3) {
        resultadoDia = "Miércoles";
    } else if (resultadoVariables===4) {
        resultadoDia = "Jueves";
    } else if (resultadoVariables===5) {
        resultadoDia = "Viernes";
    } else if (resultadoVariables===6) {
        resultadoDia = "Sábado";
    } else if (resultadoVariables===0) {
        resultadoDia = "Domingo";
    }

    // resultado correcto en caso de no haber alertas
    if (!alertaError1 && !alertaError2 && !alertaError3) {
        impresionResultado = resultadoDia;
    } 

    // IMPRESION DE RESULTADO O ALERTA
    contenedorResultado.textContent = impresionResultado;

}

// BOTON RESULTADO
let btnResultado = document.querySelector("#btn-resultado");
btnResultado.addEventListener("click", resultado);
