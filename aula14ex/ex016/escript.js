function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res  = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!!')
    }else{
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <=0){
            window.alert('Passo invalido! Considerando passo 1 ')
            p = 1 
        }

        if(i < f){

            for(var c  = i; c <= f; c += p){
            res.innerHTML +=`  ${c} 👉`
        }
        
    }else{
        for(let c = i; c >=f; c -=p){
            res.innerHTML += `${c} 👉`
        }
    }
    res.innerHTML += "🏳️‍🌈"
    }
}