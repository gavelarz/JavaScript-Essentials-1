let x3 = 5;
let y = 10;
let z = (x3++ * --y) / 2 + (y %3);
console.log(z);
//Passo a passo: --y vira 9 e usa 9; x3++ usa 5 e depois vira 6; então 5*9=45; 45/2=22.5; y%3 = 9%3 = 0; logo 22.5 + 0 = 22.5.