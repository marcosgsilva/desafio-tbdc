/*
 * Existe um array com alguns números. Todos os números são iguais, exceto um. Tente encontrar!
 *
 * Exemplo
 *   acharNumeroUnico([1, 1, 1, 2, 1, 1]) === 2
 *   acharNumeroUnico([0, 0, 0.55, 0, 0]) === 0.55
 *
 * É garantido que o array contém pelo menos 3 números.
 */

const repetidos = (array) =>{
    const naoRepetidos = [];
    array.filter(function(value, index, self){
        if(array.indexOf(value)!==0){
            naoRepetidos.push(value)
        }
    });
    return naoRepetidos[0];
    
}

export const  acharNumeroUnico= (array)=> {
    if(array.length>=3){
        let itensRepetidos = repetidos(array);
        return itensRepetidos;
    }
}

