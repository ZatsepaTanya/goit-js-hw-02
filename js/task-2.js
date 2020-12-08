
const calculateEngravingPrice = function(message, pricePerWord){
    const text = message.split(" ");
    const count = text.length;
    const result = count*pricePerWord;
    return result;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); 

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); 

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); 

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); 

