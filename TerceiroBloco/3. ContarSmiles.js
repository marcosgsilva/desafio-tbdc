/*
 * Dado um array como argumento, implemente uma função que deve retornar o número total smiles.
 *
 * Regras para um smile:
 * - Cada smile deve conter um par de olhos válido. Os olhos podem ser marcados como ':' ou ';'
 * - Um smile pode ter nariz, mas não é obrigatório. Os caracteres válidos para um nariz são '-' ou '~'
 * - Todos os smile devem ter uma boca sorridente que deve ser marcada com ')' ou 'D'
 * OBS: Não são permitidos caracteres adicionais, exceto os mencionados.
 *
 * Exemplos válidos de smiles: ':)' ':D' ';-D' ':~)'
 * Smiles inválidos: ';(' ':>' ':}' ':]'
 */

export function contarSmiles(array) {
    const slimesIsValid = [':D',':~)',':~D',':~D',';D',';~D',':)',';-)',';-D'];
    if(array.length===0)  return 0;
    let x=0;
    for(let i= 0; i<=array.length; i++){
        slimesIsValid.filter(function(element){
        if(element===array[i]){
                x++
            }
        })
    }
    return x;

}

