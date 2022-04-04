function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade Calculada> ${idade}`
        //O comando acima é para testar se realmente está fazendo a subtração do Ano digitado com o Ano atual e mostrando a idade na tela.
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 3){
                //bebê
                img.setAttribute('src', 'foto-bebe-homem.png' )
            }
            else if (idade < 10){
                //criança
                img.setAttribute('src', 'foto-criança-homem.png' )
            }
            else if
            (idade < 17){
                //jovem
                img.setAttribute('src', 'foto-adolescente-homem.png' )
            }
            else if
            (idade < 30){
                //adulto
                img.setAttribute('src', 'foto-adulto-homem.png' )
            }
            else if
            (idade < 50){
                //adulto 2.0
                img.setAttribute('src', 'foto-adulto2-homem.png' )
            }
            else if
            (idade < 100){
                //idoso
                img.setAttribute('src', 'foto-idoso-homem.png' )
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 3){
                //bebê
                img.setAttribute('src', 'foto-bebe-mulher.png' )
            }
            else if (idade < 10){
                //criança
                img.setAttribute('src', 'foto-criança-mulher.png' )
            }         
            else if
            (idade < 17){
                //jovem
                img.setAttribute('src', 'foto-adolescente-mulher.png' )
            }
            else if
            (idade < 30){
                //adulto
                img.setAttribute('src', 'foto-adulta-mulher.png' )
            }
            else if
            (idade < 50){
                //adulto 2.0
                img.setAttribute('src', 'foto-adulta2-mulher.png' )
            }
            else if
            (idade < 100){
                //idoso
                img.setAttribute('src', 'foto-idosa-mulher.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}