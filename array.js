let array = [12,2,34,23,1]
let encontrado = false;
let n = prompt("Ingrese un # para buscar")
    
    for (let i=0;i <array.length; i++ )
   {
       
       if(n == array[i]){
           encontrado =true;
          
           } 
       
   }
   if(encontrado){
       document.write(`El ${n} existe.`)
       
   }else{
    document.write('repet')
   }
