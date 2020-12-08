const formatString = function(string){

    let elements = string.slice(0,40);
    if(string.length>40){
        elements = elements+"...";
    }
    return elements;
    
} 
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

