const string = 'Web Development Tutorial ';


function longestString(string){
    const ar = string.split(" ");
    

let longest = 0;
let longest_word = null;
for (let i = 0; i < ar.length; i++)
   
   if (longest < ar[i].length) {
     longest = ar[i].length
     longest_word = ar[i]
   }
        return longest_word
   
   }

console.log(longestString('Web Development Tutorial '));
