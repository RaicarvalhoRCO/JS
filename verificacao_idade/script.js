function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.getElementById('res')
        if (fano.value.length == 0 || Number(fano.value) > ano){
            alert('ERRO')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >=0 && idade <10){
                    //Criança
                    img.setAttribute('src', 'assets/bebe-H.png')
                } else if (idade < 21){
                    //JOvem
                    img.setAttribute('src', 'assets/jovem-H.png')
                } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'assets/adulto-H.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'assets/idoso-H.png')
                }
            }else if (fsex[1].checked){
                genero = 'Mulher'
                if(idade >=0 && idade <10){
                    //Criança
                    img.setAttribute('src', 'assets/bebe-M.png')
                } else if (idade < 21){
                    //JOvem
                    img.setAttribute('src', 'assets/jovem-M.png')
                } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'assets/adulto-M.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'assets/idoso-M.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `${genero} ${idade} anos`
            res.appendChild(img)
        }
}