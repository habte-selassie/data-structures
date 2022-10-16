         
         
         let num;
          let divisor = 0;

          function primeChecker(num){  
               for(i=2; i<num; i++) {
               if(num%i === 0) {
                 divisor++;

                }
              }

         if(divisor === 0)
            console.log("is a Prime Number");
            else
             console.log("is not a Prime Number");
    
               }

            primeChecker(9);
