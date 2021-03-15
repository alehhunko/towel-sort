
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( !Array.isArray(matrix) ){
    return [];}
  else { 
    for (let i=0; i<matrix.length; i++){
      if(i%2===1) {        
      let t=matrix[i].reverse()
      matrix.splice(i, 1, t);}
    }
  }
  return matrix.flat();
}