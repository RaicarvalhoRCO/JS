function count(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var count = document.getElementById('count')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        count.innerHTML = 'erro'
        alert('ERRO')
    } else{
        
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido, alterando para 1')
            p = 1
        }
        if(i<=f){
            for(var j=i; j<=f; j+=p){
                count.innerHTML += `${j} `
            }
        }else {
            for(var j=i; j>=f; j-=p){
                count.innerHTML += `${j} `
            }
        }
    }
}

