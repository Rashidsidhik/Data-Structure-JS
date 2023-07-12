var diagonalSum = function (mat) {
    let sum = 0;
    let length = mat.length - 1;
    if (length % 2 == 0) {
        for (let i = 0; i <= length; i++) {
            if (i !== length - i) {
                sum = sum + mat[i][i] + mat[i][length - i]
            }
        }
        sum = sum + mat[Math.floor(length / 2)][Math.floor(length / 2)]
    }else {
        for (let i = 0; i <= length; i++) {
                console.log(mat[i][i], mat[i][length - i])
                sum = sum + mat[i][i] + mat[i][length - i]
        }
    }

    return sum 
};