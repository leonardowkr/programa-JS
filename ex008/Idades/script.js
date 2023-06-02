function verificar()
{
    var data=new Date()
    var ano=data.getFullYear()
    var fano=window.document.getElementById('txtano')
    var res=window.document.querySelector('p#res')
    idade=ano-fano
    if(fano.value.length ==0 || Number(fano.value)>ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade=ano - Number(fano.value)
        var genero = ''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<=10)
                {
                    img.setAttribute('src','../fotos/pq-menino.png')
                    //Criança
                }
                else if(idade<22)
                {
                    img.setAttribute('src','../fotos/jovemmenino.png')
                    //jovem
                }
                else if(idade<55)
                {
                    img.setAttribute('src','../fotos/adulto.png')
                    //adulto
                }
                else{
                    img.setAttribute('src','../fotos/idoso.png')
                    //idoso
                }
        }
        else if(fsex[1].checked)
        {
            genero='Mulher'
            if(idade>=0 && idade<=10)
                {
                    img.setAttribute('src','../fotos/pq-menina.png')
                    //Criança
                }
                else if(idade<22)
                {
                    img.setAttribute('src','../fotos/jovemmenina.png')
                    //jovem
                }
                else if(idade<55)
                {
                    img.setAttribute('src','../fotos/adulta.png')
                    //adulto
                }
                else{
                    img.setAttribute('src','../fotos/idosa.png')
                    //idoso
                }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
        
    }
}