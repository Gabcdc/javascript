function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('numb')
    var res = document.getElementById('res')
    var rano = Number(fano.value)
    

    if (rano == 0 || rano > ano){
        window.alert(' [ERRO]verifique os dados e tente nomvamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - rano
        var gênero = ''
        var img = document.getElementById('foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                res.innerHTML = `Você é bebê homem com ${idade} ano `
                img.src='imagens/foto-bebe-m.png'
            //    Crinaça
            }else if(idade < 21){
                res.innerHTML = `Você é um home jovem com ${idade} anos `
                // Jovem
                img.src='imagens/foto-jovem-m.png'

            }else if(idade >21 && idade < 60 ){
                res.innerHTML = `Você é um adulto homem com ${idade} anos `
                // Adulto
                img.src='imagens/foto-adulto-m.png'
            }else{
                res.innerHTML = `Você é um senhor com ${idade} anos `
                // Idoso
                img.src='imagens/foto-idoso-m.png'
            }
        }
        else if(fsex[1].checked){
            gênero = 'Mulher'
            
            if(idade > 0 && idade <= 10){
                img.src='imagens/foto-bebe-f.png'
                res.innerHTML = `Você é um bebê mulher com ${idade} ano `
                // criança
            }
            else if(idade < 21 ){
                res.innerHTML = `Você é uma muher jovem com ${idade} anos `
                img.src='imagens/foto-jovem-f.png'
                // jovem

            }else if(idade > 21 && idade < 60 ){
                res.innerHTML = `Você é uma mulher adulta  com ${idade} anos `
                img.src='imagens/foto-adulto-f.png'
                // adulto
            }else{
                res.innerHTML = `Você é uma senhara com ${idade} anos `
                img.src='imagens/foto-idosa-f.png'
                // velho

            }
        }
        res.style.textAlign='center'
        
    }
    
   

}