function kebabToUpperCase(str) {
    return str.split('-').join('_').toUpperCase();
}


let result = kebabToUpperCase("kebab-case-text");
console.log(result); 
