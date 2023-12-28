/* #ffcf62 cor manhã
   #FEB000 cor tarde
   #0C1220 cor noite 

*/

function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var saudacao = window.document.getElementById('saudacao')
var data = new Date()
 var hora = data .getHours()

msg.innerHTML = `Agora são ${hora} horas `
    
if (hora > 0 && hora  < 12){
    saudacao.innerHTML= 'Bom dia'
    window.document.body.style.backgroundColor= '#ffcf62'
    img.src='imagens/foto-manhã.png'
}

else if (hora >= 12 && hora < 18){
    saudacao.innerHTML= 'Boa Tarde'
    window.document.body.style.backgroundColor='#FEB000'
    img.src='imagens/foto-tarde.png'
}
else{
    saudacao.innerHTML= 'Boa Noite'
    window.document.body.style.backgroundColor='#0C1220'
    img.src='imagens/foto-noite.png'
}
}