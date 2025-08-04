//const calc = require('./Calculadora')
//const calc2 = require('./Calculadora01')
import { obterInfoSistema } from './TesteOS.js'
const info = obterInfoSistema();

/*console.log("Soma: ", calc.somar(2,3))
console.log("Subtração: ", calc2.subtrair(2,3))
console.log("Multiplicação: ", calc.multiplicar(2,3))
console.log("Divisão: ", calc2.dividir(2,3))*/

console.log("OS: ")
console.table(info)