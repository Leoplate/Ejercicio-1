const vec = [2, 9, 3, 34, 14]

// Los voy a iterar y mostrar en pantalla
vec.forEach( num => console.log(num));

console.log('')

// Como voy a Filtar los numeros pares
const vecFiltrado = vec.filter( num => num % 2 == 0 )
console.log(vecFiltrado)

console.log('')

// Para transformar
const vecTransformado = vec.map ( num => num * 2 )
console.log(vecTransformado)

console.log('')

// Utilizar un reductor
console.log( vec.reduce( (a,b)  => a + b, 10))

