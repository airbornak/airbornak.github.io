                        let result = document.getElementById("resultDisplay");
            
            
            
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
                 if(result.value.length===0)
                  {
                  result.value ="";
               }
               else{
                  
                  result.value=eval((result.value).replace('÷','/').replace('×','*'));
                  
               }
               }
               catch(error)
               {
                 result.value= "ERROR";
                 
                
                 
               }
            }
            function deleteAll(){
              
               result.value = "";
             
            }
            
            function deleteLast(){
               
               result.value= result.value.slice(0,-1);
            }
     