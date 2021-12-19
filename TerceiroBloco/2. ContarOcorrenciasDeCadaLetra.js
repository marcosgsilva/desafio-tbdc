/*
 * A ideia principal é contar todos os caracteres que ocorrem em uma string. Se você tem uma string como 'aba', o resultado deve ser {'a': 2, 'b': 1}.
 * E se a string estiver vazia? Então, o resultado deve ser um objeto literal vazio, {}.
 *
 * OBS: A string inputada pode ter letras maiusculas e minúsculas, mas o retorno deve ser sempre com as letras minusculas e a contagem é case insensitive
 */

export function contarOcorrenciasDeCadaLetra(string) {
    if(!string) return {};
    string = string.toLowerCase();
    let strings = Array.from(string);
    let objLetrasETotal = [];
    for (let i = 0; i <= strings.length; i++) {
        if (strings[i] !== undefined) {
            objLetrasETotal[strings[i]] = (strings.toString().match(new RegExp(strings[i], "g")) || []).length;
        }
    }
    return Object.assign({}, objLetrasETotal);
}
