
const calculateEngravingPrice = function(message, pricePerWord){
    const text = message.split(" ");
    const count = text.length;
    const result = count*pricePerWord;
    console.log(result);
    return result;
}

   calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10);
   calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',20,);
   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);