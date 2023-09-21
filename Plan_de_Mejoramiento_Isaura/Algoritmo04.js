4. 

var valor_cam = 35000
var valor_panta = 75000
var celular = 900000


if(valor_cam >0 && valor_panta >0){
    subtotal = valor_cam + valor_panta
    console.log("este es el subtotal de la compra: " + subtotal)
}

if(valor_cam >0 && valor_panta >0){
    descuentoropa = subtotal * 0.14
    total_des = subtotal - descuentoropa
    console.log("este es el descuento de la compra: " + descuentoropa)
    console.log("este es el total con el descuento: " + total_des)
}

if(valor_cam >0 && valor_panta >0 && celular>0){
    total_todo = total_des + celular
    console.log("este el total de todas las compras: "+ total_todo)
}
