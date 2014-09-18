/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  //+1 to where we want it to
  //0 if total = 1 already

  for(var i = 0; i < n; i++){
    var row = [];
    for(var j = 0; j<n; j++){
      if(i === j){
        row.push(1);
      }else{
        row.push(0);
      }
    }
    solution.push(row);
  }
  return solution;
  //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var base = this.findNRooksSolution(n)// give an array [[1,0,0],[0,1,0],[0,0,1]]
  var antibase = base.reverse();
  var solution = [base, antibase];
  var solutionCount;

  if(n===1 || n===2){
    return solutionCount=n;
  }else{
  var permutate = function(arr){
      for(var i = 0; i<n-1; i++){
        var first = arr.shift();
        var res =arr.push(first);
        solution.push(res);
      }
      return solution;
    }
  }
    if(n===3){
      permutate(base);
      permutate(antibase);
    }

    if(n===4 || n ===5 || n===6 ){
      var board = new Board({n:n});
      console.log(board);
      solution = [];

      var recurse = function(roundsToGo, playedSoFar){
        console.log(playedSoFar)
        //base case
        if(roundsToGo === 0){
          for(var i =0; i < n; i++){
            board.attributes[i] = playedSoFar[i];
            console.log(board.attributes[i], 'changed');
          }
          if(!board.hasAnyRooksConflicts()){//dont know how to call function
            solution.push(playedSoFar);
          }
          return;
        }

        //recursive case
        for(var i = 0; i < n; i++){
          var currentPlay = base[i];
          recurse(roundsToGo -1, playedSoFar.concat([currentPlay]));
        }
      }
      recurse(n,[]);
    }
    solutionCount = solution.length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
