2. 

var pesokg = prompt(parseInt("Ingrese su peso en kg: "));
var altura = prompt(parseFloat("Ingrese su estatura: "));

if(pesokg > 0, altura > 0){
    imc = pesokg / altura;
    console.log(imc)
}