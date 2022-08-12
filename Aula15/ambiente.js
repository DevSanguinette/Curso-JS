let num = [5, 8, 2, 9]
//acrescenta um espaço e um indice a mais no array
num[3] = 3
//acrescenta um indice a mais na ultima lina de um array
num.push(1)
//para saber o comprimento de um array - Não usa parenteses porque não é um método é um atributo
num.length
//é um método interno e coloca os números em ordem crescente
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
