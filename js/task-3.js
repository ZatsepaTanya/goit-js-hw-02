const findLongestWord = function(string){
let words = string.split(" ");
// console.log(words);
let longestWord = words[0];
// let sizeWord = longestWord.length;
for (let i=1; i<words.length; i+=1){
    // longestWord = words[i];
    let sizeWord = longestWord.length;
    if( sizeWord<words[i].length){
        longestWord = words;
        // return longestWord;
    }
    // return longestWord;

    // console.log(longestWord);
    console.log(sizeWord);
   
    
}
// console.log(longestWord);
    // console.log(sizeWord);
   
// return longestWord;
}
// console.log(longestWord);
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

findLongestWord('The quick brown fox jumped over the lazy dog');

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'