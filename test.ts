let i=0;
let j=0;
let total=0;
function matrix_elements_sum(matrix: any){
    for(i=0;i<matrix.length;i++){
        for (j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0 && (i+1) < matrix.length){
                matrix[i+1][j]=0;
            }
            total+=matrix[i][j]
        }
    }
    return total
}

let matrix = [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]];
console.log(matrix_elements_sum(matrix))