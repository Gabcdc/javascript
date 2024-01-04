let num = document.getElementById('txtn')
let lista =  window.document.getElementById('txtv')
let res = window.document.getElementById('res')
let valores = []


function isnumero(n){
if (Number(n) >= 1 && Number(n)<= 100 ) {
    return true
} else {
    return false
}


}


function inLista(n, l){
if(l.indexOf(Number(n)) != -1){
    return true
} else {
    return false
}

}


function adicionar(){
    if(isnumero(num.value) && ! inLista(num.value, valores))  {
        valores.push(Number(num.value))
        let iten = document.createElement('option')
        iten.text = `Valor ${num.value} adicionado`
        lista.appendChild(iten)
        res.innerHTML = ''
        
    } 
else {
    window.alert('Valor inválido ou já encontrado na lista')
}
num.value = ''
num.focus()
} 
function finalizar() {
    if (valores.length == 0 ){ 
        window.alert('Adicione valores para a analize entre 1 e 100 !')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0 
        for (let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior){
                maior = valores[pos] 
            }

            if (valores[pos] < menor){
                menor = valores[pos]
            }
           
    }
        
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} númros cadastrados </p>`
        res.innerHTML += `<p>O maior valor encontrado na sua lista foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor encontrado na sua lista foi ${menor}</p>`
        res.innerHTML += `<p>A soma desses números selecionados é ${soma}</p>`
        res.innerHTML += `<p>a média desses númros é  ${media}</p>`
    }
}