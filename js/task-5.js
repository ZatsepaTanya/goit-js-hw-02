const checkForSpam = function(message){
    console.log(message.toLowerCase().includes("spam")|| message.toLowerCase().includes("sale"));
  
}
checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('[SPAM] How to earn fast money?');

