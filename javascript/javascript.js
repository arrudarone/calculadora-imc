function calcular(){
    
    let botao = document.getElementsByClassName('botao')
    let peso = document.getElementById('ipeso')
    let altura = document.getElementById('ialtura')
    let resultado = document.getElementById('res')

    resultado.innerHTML = 'Seu IMC é :'
    if(peso.value.length == '0' || altura.value.length == '0'){

        window.alert('informe os dados corretamente!')
         
        resultado.innerHTML += ' informe os campos corretamente'

    }else{

        let ms = Number(peso.value)
        let alt = Number(altura.value)
        let imc = ms / (alt * 2)
        /*window.alert(`seu imc é: ${imc.toFixed(1)}`)*/

        if(imc <= 18.5){
            resultado.innerHTML += ` ${imc.toFixed(1)} , Você esta abaixo do peso`
        }
        else if( imc <= 24.9){

            resultado.innerHTML += ` ${imc.toFixed(1)} , Você esta com o peso normal`
        }else if( imc <= 29.9){

            resultado.innerHTML += ` ${imc.toFixed(1)} , Você esta com sobrepeso`

        }else if(imc <= 34.9){

            resultado.innerHTML += ` ${imc.toFixed(1)} , Você esta com Obesidade grau 1`

        }else if( imc <= 39.9){

            resultado.innerHTML += ` ${imc.toFixed(1)} , Você esta com Obesidade grau 2`

        }else if( imc > 40){

            resultado.innerHTML += ` ${imc.toFixed(1)} , Você esta com Obesidade grau 3`
        }
        
    }

}