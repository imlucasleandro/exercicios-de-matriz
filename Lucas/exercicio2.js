let soma = 0
let soma2 = 0
function somaMatris(matriz, matriz2) {
    for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz.length; j++) {
                soma += matriz[i][j]
                
            }
        }
    return soma 
    
    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2.length; j++) {
            soma += matriz2[i][j]
            
        }
    }
return soma2

let resultado = soma + soma2
}
let matriz = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ] 
let matriz2 = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ]
let resultado = somaMatris(matriz, matriz2)
console.log(resultado)
