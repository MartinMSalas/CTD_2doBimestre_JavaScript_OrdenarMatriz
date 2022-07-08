
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }]
const matrizCuentas =
    [[
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 9360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }],[
            {
                titular: "Arlene Barr2",
                estaHabilitada: false,
                saldo: 25.40,
                edadTitular: 33,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Roslyn Torres2",
                estaHabilitada: false,
                saldo: 329.45,
                edadTitular: 27,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Cleo Lopez2",
                estaHabilitada: true,
                saldo: 13.19,
                edadTitular: 34,
                tipoCuenta: "corriente"
            },
            {
                titular: "Daniel Malone2",
                estaHabilitada: false,
                saldo: 627.12,
                edadTitular: 30,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Ethel Leon2",
                estaHabilitada: true,
                saldo: 116.52,
                edadTitular: 34,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Harding Mitchell2",
                estaHabilitada: true,
                saldo: 108.68,
                edadTitular: 25,
                tipoCuenta: "corriente"
            }
        ]]
        
const ordenarMatriz = (array) => {
    
    let auxiliar = {};
    let cantidadElementos=0;
    let cantELementosXFila =[];
    let cantELementosAcumuladosXFila =[];
    // Necesito saber cuantos elementos tengos 
    for (let l = 0; l < array.length; l++) {
        cantELementosXFila.push(array[l].length);
        for (let m = 0; m < array[l].length; m++) {            
            cantidadElementos++;                        
        }
        cantELementosAcumuladosXFila.push(cantidadElementos);       
    }
    console.log(`Tengo ${cantidadElementos} elementos en la matriz`);
    console.log(`Tengo ${cantELementosAcumuladosXFila} elementos acumulados por fila`);

    for (let k = 0; k< cantidadElementos ;k++){

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                    
                // console.log(`El saldo en este punto es ${array[i][j].saldo}`)
                if (j+1 < Object.keys(array[i]).length){            //uso object.keys porque no entraba con array[i].length
                    // console.log(` y el saldo siguiente ${array[i][j+1].saldo}`)
                    
                    if (array[i][j].saldo > array[i][j+1].saldo){
                        // console.log(`intercambio intercolumna `)
                        auxiliar = array[i][j];
                        array[i][j] = array[i][j+1];
                        array[i][j+1] = auxiliar;
                        // [array[i][j],array[i][j+1]] =[array[i][j+1],array[i][j]];
                        // posFilasColumn = [i,j];
                        
                    }
            
                }
                else if (j+1 == Object.keys(array[i]).length){
                    if (i+1< Object.keys(array).length){
                        // console.log(` y el saldo siguiente ${array[i+1][0]}`)
                        if (array[i][j].saldo > array[i+1][0].saldo){
                            // console.log(`Intercambio Interfilas`)
                            auxiliar =  array[i][j];
                            array[i][j] = array[i+1][0];
                            array[i+1][0] = auxiliar;
                        }
                    }
                }
            }
        }
    }
    console.log(cantELementosXFila);
    return array;
}

console.log("-------------------------------------------------------------------------------");
console.log(ordenarMatriz(matrizCuentas));


const numerosEnteros = [
[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15],
[16,17,100,19,20],
[21,22,23,24,25]
];

const mayorMatriz = (array) => {
    let auxiliar = 0;
    for (let i= 0; i<array.length -1; i++) {
        for (let j= 0; j<array.length -1; j++)
        {
            if (array[i][j] > auxiliar){
                auxiliar = array[i][j];
            }
        }
}
return auxiliar;
};

// console.log(mayorMatriz(numerosEnteros));

function ordenarFila(arrayOrden){
    for(let i=0; i<arrayOrden.length -1; i++){
        for (let j=0; j<arrayOrden.length -1 -i; j++){
            if (arrayOrden[j] > arrayOrden[j + 1]){

                [arrayOrden[j],arrayOrden[j+1]] =[arrayOrden[j+1],arrayOrden[j]]

            }
        }
    }
    return arrayOrden;
};

// console.log(ordenarFila(numerosEnteros[3]));

function mayorSaldo (array3){
    let auxiliar2 = array3[0];
    for (let i = 0; i<array3.length -1; i++){
        if(array3[i].saldo > auxiliar2.saldo){
            auxiliar2 = array3[i];
        }
    }
return auxiliar2;
};

// console.log(mayorSaldo(arrayCuentas));