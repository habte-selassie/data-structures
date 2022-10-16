const string = 'the quick brown fox abebe'
const letters = string.split("");


let count = 0;

function counting(string,letter){
for (let i = 0; i < letters.length; i++) 
    if (letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u'  ) {
       count = count+1;
    }
    console.log(`${count}`);
}

counting(string);