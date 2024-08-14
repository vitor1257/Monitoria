function diagonalDifference(arr) {
    let soma = 0;
    let aux1 = 0;
    let aux2 = 0;
    
    for(let i = 0; i < arr.length; i++){
        aux1 += arr[i][i]
    }
    for(let i = 0; i < arr.length; i++){
        aux2 += arr [i][arr.length - 1 - i];
    }
    soma = Math.abs(aux1 - aux2);
    return soma;
}
