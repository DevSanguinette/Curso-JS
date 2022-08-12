//criei uma função TABUADA
function tabuada() {
    //criei as variáveis NUM e TAB
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    //criei uma condição da variável NUM se for igual a 0
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    //se a condição for falsa então ele entra no WHILE
    } else {
        let n = Number(num.value)
        let c = 1
            //comando para limpar a tela depois de um cálculo para o próximo ser mostrado
        tab.innerHTML = ''
        while (c <= 10) {
            //adicionando elementos dentro do select no JAVASCRIPT
            //eu tenho que ter OPTION porque dentro do select eu tenho que ter OPÇÕES
            let item = document.createElement('option')
            //a parte de dentro do OPTION
            item.text = `${n} x ${c} = ${n*c}`
            //o OPTION tem que ter VALUE também, serve pra selecionar o item
            item.value = `tab${c}` //pra o JAVASCRIPT não faz tanto sentido, mas pra outras linguagens sim
            //para fazer o cálculo aparecer
            tab.appendChild(item) //adicionar o elemento filho que vai ser o ITEM
            //aqui eu incrementei o valor de C para ele partir do primeiro ao último elemento do cálculo
            c++
        }
    }
    
   
}