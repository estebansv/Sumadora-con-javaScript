const txtn1 = document.getElementById('n1')
const txtn2 = document.getElementById('n2')
const resultado = document.getElementById('resp')
const btn = document.getElementById('calcular')
const deleted = document.getElementById('borrar')
btn.addEventListener('click',sumadora)  //realiza el evento click y la funcion seleccionada
deleted.addEventListener('click',borradoTotal)

function sumadora (){
      const op1 =parseFloat(txtn1.value)
      const op2 =parseFloat(txtn2.value)
      let resp = op1 + op2
      resultado.innerText=resp
      resultado.style='color:green'
}





      function borradoTotal() {
            document.getElementById('n2').value =""
            document.getElementById('n1').value =""
            document.getElementById('resp')
            resp.textContent ="--"  //retorna el valor por defecto al especificado "--"
            
           
      }

