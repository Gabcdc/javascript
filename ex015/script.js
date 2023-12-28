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
                img.src='imagens/foto-bebe-m.png'
            //    Crinaça
            }else if(idade < 21){
                // Jovem

            }else if(idade >21 && idade < 60 ){
                // Adulto
            }else{
                // Idoso
            }
        }
        else if(fsex[1].checked){
            gênero = 'Mulher'
        }
        
        res.innerHTML = `Você é ${gênero} com ${idade} anos `
    }
    
   

}