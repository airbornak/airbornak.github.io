            let result = document.getElementById("resultDisplay");
            result.value=" ";
            
            
            function displayButton(element){
               if(result.value === "ERROR")
               {
               result.value =element;
              
               }
               else{
                     result.value +=element;
              
               }
            }
            
            function equalButton(){
               try{
                  if(result.value==undefined)
{
result.value= 0;
return;
}
 result.value=eval(result.value);
               }
               catch(error)
               {
                 result.value= "ERROR";
                 
                
                 
               }
            }
            function deleteAll(){
              
               result.value = " ";
             
            }
            function deleteLast(){
               
               result.value= result.value.slice(0,-1);
            }
            