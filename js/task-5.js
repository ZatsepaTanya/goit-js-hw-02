const checkForSpam = function(message){

    const word1 = "spam";
    const word2 = "sale";
    let result = false;
    for( const word of words){
        console.log(word);
        if(word1===word || word2===word){
            result = true;
            break;

        }
    }
console.log(result);
}
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('[SPAM] How to earn fast money?');


// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
//  Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово 
//  то функция возвращает true, если запрещенных слов нет функция возвращает false. 
//  Слова в строке могут быть в произвольном регистре.


// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true