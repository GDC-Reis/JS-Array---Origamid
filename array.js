// Array
// Arrays armazenam uma coleção de elementos.
// Estes podem ser string, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azull', preco: 2000}], function andar(nome){console.log(`${nome} andou`)}];

dados[2]('Ford');
dados[1][2].cor; //Azul



// Construção de Arrays
// Todo array herda os métodos e propriedades do protótipo do construtor Array.

const carros = new Array ('Ford', 'Mustang', 'Honda');

carros[1]; // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11


// Array.from()
// Array.from() é um método utilizado para transformar array-like objects, em uma array

let li = document.querySelector('li'); // NodeList
li = Array.from(li); // Array

const carros1 = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4,
}

const carrosArray = Array.from(carros1);


// Array.isArray()
// Verifica se o valor passado é uma array e retorna um valor booleano

Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true


// Array.of, Array() e new Array()
// Verifica se o valor passado é uma "Array" e retorna um valor booleano.
// A palavra chave new é necessária para utilizar o construtor "Array".

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,] -> Cria uma array vazia com 5 itens 
Array(5); // [,,,,] -> Cria uma array vazia com 5 itens 
Array(1,2,3,4); // [1,2,3,4]



// Propriedades e Métodos do Prototype
// "[].length" retorna o tamanho do array.

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2



// Métodos Modificados [].sort()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). 
// Além de retornarem um valor, eles modificam a array original. 
// '[].sort()' organiza a pelo unicode.

instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', 'Violão'];

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1,12,21,32,33,43,8] -> alinha o primeiro caracter (1, 12, 2, 21, 32, 33, 43, 8)



// [].unshift() e [].push()
// '[].unshift()' adiciona elementos ao início da array e retorna o length da mesma.
// '[].push()' adiciona elementos ao final da array e retorna o length da mesma.

const carros2 = ['Ford', 'Fiat', 'VW'];

carros2.unshift('Honda', 'Kia'); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];



// [].shift() e [].pop()
// '[].shift()' remove o primeiro elemento da array e retorna o mesmo.
// '[].pop()' remove o último elemento da array e retorna o mesmo.

const carros3 = ['Ford', 'Fiat', 'VW'];

const primeiroCarro = carros.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];



// [].splice()
// "[].splice(index, remover, item1, item2, ...)" adiciona valores na array a partir do index.
// Remove a quantidade de itens que for passar no segundo parâmetro (retorna esses itens).

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros4.splice(1, 0, 'Kia', 'Mustang'); // []
carros4; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda'];

carros4.splice(3, 2, 'Ferrari'); // ['Fiat, 'VW'];
carros4; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda'];



// [].copyWithin()
// "[].copyWithin(alvo, inicio, final)" a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia.
// Caso omita os valores de início e final, ele irá utilizar como inicio o "0" e o final o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2'];

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']



// [].fill()
// "[].fill(valor, inicio, final)" preenche a array com o valor, do início até o fim

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana'];

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2); // Começa do item 2 do array
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3); // Começa do item 1 e vai até o item 3
// ['Item1', 'Banana', 'Banana', 'Item4']