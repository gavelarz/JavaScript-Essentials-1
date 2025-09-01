var idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); 
}

console.log("Fora do bloco:", idade); 
//Com let, a variável idade dentro do bloco é independente da variável fora do bloco (escopo de bloco).Com var, a variável tem escopo de função, e tentar redeclarar idade com var dentro do mesmo escopo gera erro, pois let idade já foi declarada no escopo da função (ou global).Se a declaração let idade = 25; estiver no escopo global e o var idade = 30; dentro do bloco, o var será promovido ao escopo global, causando conflito.