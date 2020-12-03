const formatString = function(string){
    const elements = string.split('');
    if ( elements.length <= 40 ) {
        console.log(string);
    }
    else{
        elements.splice(40);
        elements.push("...");
        const result = elements.join('');
        console.log(result);
    }
} 
formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');



