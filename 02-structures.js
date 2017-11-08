/*
 *
 * Lección 04: JS Foundations
 * Objetos y comparadores
 *
 */

var compare = (a, b) => {
	if (a != b){
		return false;
	}else{
		return true; 
	}
}
 console.log (compare(3,3));
module.exports = compare;
