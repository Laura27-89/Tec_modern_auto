// //Exercise 1
// Implementa una función la cual se comporta como el comando 'uniq-c' de Unix.
// Este comando toma por entrada una secuencia y devuelve otra secuencia en la cual todos 
// los elementos duplicados de manera seguida han sido reducido a una única instancia junto con el 
// número de ocurrencias en la secuencia original.

function uniqC(...values) {
    return getSubArrays(...values).map((subArray) => [...new Set(subArray), subArray.length]);
  }
  
  function getSubArrays(...values) {
    let start = 0;
    let end = 0;
    const subValues = [];
    for (let index = 0; index < values.length; index++) {
      if (values[index] === values[index + 1]) end++;
      else {
        subValues.push(values.slice(start, end + 1));
        start = end + 1;
        end = start;
      }
    }
    return subValues;
  }
console.log(uniqC('a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'b', 'c'));


//Exercise 2
// Para este ejercicio, crearás un método global aplanar. El método recibe cualquier número de 
// argumentos y los aplana en una sola lista. Si alguno de los argumentos que se le pase es una lista, 
// entonces los objetos individuales en la secuencia serán aplanados de forma tal que existan al mismo 
// nivel que los otros elementos. Cualquier secuencia o lista anidada, sin importar el nivel de profundidad, 
// deberá ser aplanado en una sola lista.


[1, [2, 3], 4, 5, [6, [7, [8, [9, [10, [11, [12]]]]]]]];
// Recursividad
function myFlat(values) {
  return values.some(Array.isArray) ? myFlat([...values.flat()]) : values;
}
console.log(myFlat(['a', ['b', 2], 3, null, [[4], ['c']]]));

//Exercise 3
// Dada una lista de palabras y una palabra compuesta meta, tu objetivo es encontrar 
// las dos palabras que combinadas forman la palabra meta, devolviendo ambas palabras en el mismo 
// orden en que aparecen en la lista, y sus respectivos índices en el orden en que deben combinarse 
// para formar la palabra meta. Las palabras en la lista que se recibe pueden repetirse, pero solo habrá 
// un par único conforma la palabra meta. Si no hay palabras en la lista que conformen la palabra meta, 
// puedes devolver null.

let busqueda = (lista,palabra) =>{
    let finalWords = []
    let finalPositions = []
    lista.forEach((elemento,pos) => {
        if(palabra.includes(elemento)){
            let indice=0
            let y = 0
            for (let letra = 0; letra < palabra.length; letra++) {
                if(palabra[letra] == elemento[indice] && palabra[letra+1] == elemento[indice+1]){
                    y=letra                  
                }
                
            }
            let x = {
                posicion: pos,
                prioridad: y
            }
            finalWords.push(elemento)
            finalPositions.push(x)

        }
    })
        let ordenado = finalPositions.sort(function (a, b) {
            return (a.prioridad - b.prioridad)
        })
        let posFinal = ordenado.map(x => {
            return x.posicion
        })
  

        let resultado = []
        finalWords.forEach(e => {
            resultado.push(e)
        })
        resultado.push(posFinal)
        console.log(resultado)
}

busqueda(['bow','crystal','organic','ally','rain','line'], "crystalline")
// ['crystal','line', [1,5]]

busqueda(['bow','crystal','organic','ally','rain','line'], "rainbow")
// ['bow','rain',     [4,0]]

busqueda(['bow','crystal','organic','ally','rain','line'], "organically")
// ['organic','ally', [2,3]]

busqueda(['top','main','tree','ally','fin','line'], "mainline")
// ['main','line',    [1,5]]

busqueda(['top','main','tree','ally','fin','line'], "treetop")
// ['top','tree',     [2,0]]


//Exercise 4
// Se te solicita elevar al cuadrado cada dígito de un número y luego concatenarlos todos juntos.
// Por ejemplo, si tomamos 9119 y llamamos nuestra función con este número, la función debería 
// devolver 811181, porque 9 al cuadrado es 81, 1 al cuadrado es 1, 1 al cuadrado es 1 y 9 al cuadrado es 81

function squareNumbers(number) {
    return Number(('' + number).split('').map(val => val * val).join(''));
 }
 console.log(squareNumbers(9119));