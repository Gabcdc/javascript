function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo  = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar! '
        window.alert('digite novamente!')
        
    }
    else{
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Impossivel considerando passoo 1')
            p = 1
        }
        
        
        
        
        if(i < f){
           
        for(let C = i;C <= f; C += p) {

            res.innerHTML += `${C } \u{1F449}`
            
        }
        
    } 
    else {
        if(i < f){
           for(C = i;C >= f;C-=p){
        res.innerHTML += `${C } \u{1F449}`
   
    }
    

} 
        }
    

res.innerHTML += `\u{1F3C1}`
}


}