var saida = document.getElementById("text");
var num = 0;
var op = "";
function Exibir(button){
    saida.value += button.value;
}
function Operacao(button){
    num = parseFloat(saida.value);
    op = button.value
    Limpar();
}
function Resultado(igual, ) {
    if (igual.value == "=") {
        var numeroTela  = parseFloat(saida.value);
        switch (op) {
            case "+":
                saida.value = num + numeroTela;
                break;
            case "-":
                saida.value = num - numeroTela;
                break;
            case "x":
                saida.value = num * numeroTela;
                break;
            case "/":
                saida.value = num / numeroTela;
                break;   
        }
    } 
    
}
function Limpar(){
    saida.value = "";
}