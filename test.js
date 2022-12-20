var i = 0;
var j = 0;
var total = 0;
function matrixElementsSum(matrix) {
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && (i + 1) < matrix.length) {
                matrix[i + 1][j] = 0;
            }
            total += matrix[i][j];
        }
    }
    return total;
}
var matrix = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));
