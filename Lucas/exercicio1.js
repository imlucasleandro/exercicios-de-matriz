// criar uma função
let soma = 0
function somaMatris(matriz) {
    for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz.length; j++) {
                soma += matriz[i][j]
                
            }
        }
    return soma 
}
let matriz = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ] 
let resultado = somaMatris(matriz)
console.log(resultado)