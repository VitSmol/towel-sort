
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    let result = [];
    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 1) {
                result.push(matrix[i].sort().reverse())
            } else {
                result.push(matrix[i].sort((a,b) => a - b));
            }
        }
        return result.flat()
    }
}
