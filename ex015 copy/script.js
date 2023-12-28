function Verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('numb')
var msg = window.document.getElementById('msg')
var fan= Number(fano.value)



if(fan == 0 || fan > ano ){
    window.alert('[ERRO]')
}else{
var fsex = window.document.getElementsByName('radsex')
var idade  = ano - fan
var img = window.document.getElementById('foto')
var gênero=''
if(fsex[0].checked){
    gênero ='homem'
    if (idade > 0 && idade <=10 ){
        img.src='imagens/foto-bebe-m.png'
    }else if(idade <= 21 ){
        img.src='imagens/foto-jovem-m.png'
    }else if(idade >21 &&  idade <= 65 ){
        img.src='imagens/foto-adulto-m.png'
    }else{
        img.src='imagens/foto-idoso-m.png'
    }
}
else if (fsex[1].checked){
    gênero = 'Mulher'
    if (idade > 0 && idade <=10 ){
        img.src='imagens/foto-bebe-f.png'
    }else if(idade <= 21 ){
        img.src='imagens/foto-jovem-f.png'
    }else if(idade >21 &&  idade <= 65 ){
        img.src='imagens/foto-adulto-f.png'
    }else{
        img.src='imagens/foto-idosa-f.png'
    }

}
msg.innerHTML = `Voce tem ${idade} voce é ${gênero} `
}
}