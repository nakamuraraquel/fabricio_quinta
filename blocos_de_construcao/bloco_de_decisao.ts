/* Blocos de decisão/execução condicional
** Autor: Fabrício Galende Marques de Carvalho
*/

/* bloco if-else */
// let a: number;
// let b: number = 1;
// if (b > 0 ){
//     a = 1;
// } else {
//     a = 0;
// }
// console.log(a);

/* bloco switch-case */
let c: number = 10;
// switch (c) {
//     case 10:
//         console.log("c é igual a 10");
//         break;
//     case 11:
//         console.log("c é igual a 11");
//         break;
//     default:
//         console.log("c possui outro valor");
// }

// let escolha: string = "sair";
// switch (escolha) {
//     case "ficar":
//         console.log("eu quero ficar");
//         break;
//     case "sair":
//         console.log("eu quero sair");
//         break;
//     default:
//         console.log("eu sou indeciso e por isso fiz DSM");
// }

let escolha: string = "Raquel";

switch (escolha) {

    case "iterar":
        for(let c: number = 1; c< 10; ++c){
            console.log("valor de c: ", c);
        }
        break;

    case "selecionar":
        let a: number;
        let b: number = 1;
        if (b > 0 ){
            a = 1;
            console.log("x");
        } else {
            a = 0;
            console.log("y");
        }
        break;

    case "sair":
        console.log("Tchau!");
        break;

    case "Raquel":
        console.log("Eu consegui Graças a Deus!");
        break;
 
    default:
        console.log("eu sou indeciso e por isso fiz DSM");
}

/* Usado para definir esse arquivo como um módulo
cujo escopo das variáveis é restrito a ele */

export {}