let matriz = [
    [1, -2, -3],
    [4, -5, 6],
    [-7, 8, 9]
];

const somaPositivos = matriz.reduce((acc, linha) => {
    return acc + linha.reduce((linhaAcc, num) => {
        return num > 0 ? linhaAcc + num : linhaAcc;
    }, 0);
}, 0);

console.log(somaPositivos);
