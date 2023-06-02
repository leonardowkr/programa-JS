function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data = new Date()
    var hora=data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora>=0 && hora<12)
    {
        img.src = '../fotos/manha-pq.png'
        document.body.style.background='#D6C5B3'
        //BOM DIA
    }
    else if(hora>=12 && hora<18)
    {
        document.body.style.background=' #E0957E';
        img.src = '../fotos/tarde-pq.png'
        //BOA TARDE
    }
    else{
        document.body.style.background='#3A2C43'
        img.src = '../fotos/noite-pq.png'
        //BOA NOITE
    }
}