6. 

var num_identificador = prompt(parseInt("Digite el Identificador del regalo: "));

if(num_identificador >= 10){
    if(num_identificador % 2 != 0)
    console.log("El regalo Corresponde a una niña ")
}else{if(num_identificador >= 100){
    if(num_identificador % 2 ===0){
        console.log("El regalo Corresponde a un niño")
    }
}
}
