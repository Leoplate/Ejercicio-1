const vec = [1,2,3,4,5,6,7,8,9];
const vec2 = []
let conta = 0
vec.filter( n => n % 2 == 0).map(n => conta = conta + n );
console.log(conta);
console.log("Hola Leo");