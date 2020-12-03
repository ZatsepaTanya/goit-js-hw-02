const findLongestWord = function(string){
let words = string.split(" ");
let longestWord = words[0];
for (let i=1; i<words.length; i+=1){
     if( longestWord.length<words[i].length){
        longestWord = words[i];
    }   
}
console.log(longestWord); 
return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');