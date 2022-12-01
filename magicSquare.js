function formingMagicSquare(s) {
    // Write your code here
  
 const flattedArr= s.flat()
//magic constant={ n[(n^{2}+1)/2]} I will use this later for generating possible square by myself.
 let magicSquare=[]
    let cost= Infinity
    let possibilities=[]
    const tempPossibilities=[
            [ [ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ] ],
            [ [ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ] ],
            [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ] ],
            [ [ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ] ],
            [ [ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ] ],
            [ [ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ] ],
            [ [ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ] ],
            [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ],
        ];
  
  for(let i=0; i< 8;i++){
    possibilities.push(tempPossibilities[i].flat())
  }
  
  for (let i = 0; i < 8; i++) {
   
   let tempCost=0

    for (let j = 0; j < 9; j++) {
      tempCost+=Math.abs(possibilities[i][j]-flattedArr[j]);
     
      //console.log("temp",tempCost,Math.abs(possibilities[i][j]-flattedArr[j]))
     
  }
    if (tempCost < cost)
 {cost= tempCost;
  magicSquare=possibilities[i]
 //console.log(cost,tempCost,possibilities[i])
 }
    
}
  let newMagicSquare=[]
 
  for( let i=0; i<9;i++){
//console.log(i,magicSquare.slice(i,i+3))
    newMagicSquare.push(magicSquare.slice(i,i+3))
    i=i+2
   
 }
  
  console.log("Magic Square =", newMagicSquare)
  //console.log(newMagicSquare)
 return cost


}
 console.log("minimum cost",formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))