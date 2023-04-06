function calcular(){
    
    let botao = document.getElementsByClassName('botao')
    let peso = document.getElementById('ipeso')
    let altura = document.getElementById('ialtura')
    let resultado = document.getElementById('res')

    resultado.innerHTML = 'Seu IMC é :'
    if(peso.value.length == '0' || altura.value.length == '0'){

        window.alert('informe os dados corretamente!')
         
        resultado.innerHTML += 'informe os campos corretamente'

    }else{

        let ms = Number(peso.value)
        let alt = Number(altura.value)
        let imc = ms / (alt * 2)

        resultado.innerHTML += ` ${imc.toFixed(1)} , parabéns`

        /*window.alert(`seu imc é: ${imc.toFixed(1)}`)*/

        
    }

}