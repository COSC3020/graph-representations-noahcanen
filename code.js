function convertToAdjList(adjMatrix) {
    length = adjMatrix.length
    AdjList = new Array(length)
    for(let x = 0 ; x < length ; x++){
        edges = []
        for(let y = 0 ; y < length ; y++){
            if(adjMatrix[x][y] >= 1){
                edges.push(y)
            }
        }
        AdjList[x] =edges
    }
    return AdjList;
}
function convertToadjMatrix(AdjList){
    length = AdjList.length
    adjMatrix = Array.from(Array(length), ()=>Array(length).fill(0))
    for(let x = 0 ; x < length ; x++){
        for(let y of AdjList[x]){
            adjMatrix [x][y] = 1
        }
    }
    return adjMatrix;
}
