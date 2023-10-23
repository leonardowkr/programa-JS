function verifica(){
    var cpf=document.getElementById('cpf');
    var p1=document.getElementsByTagName(p[1]);
    var Arrcpf = Array.from(cpf,mapFunction)
    for (let i = 0; i < 4; i++) {
        document.write(Arrcpf[i]);
    }
}