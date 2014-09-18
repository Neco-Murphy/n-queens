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

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var baseArray = this.findNRooksSolution(n)// give an array [[1,0,0],[0,1,0],[0,0,1]] => [0,1,2]
  var base=[];
  for(var i = 0; i < n; i++){
    base.push(i);
  }
  var solution = [];
  var solutionCount;

  if(n===1 || n===2){
    return solutionCount=n;
  }
  var board = new Board({n:n});

  var recurse = function(roundsToGo, playedSoFar){
    //base case
    if(roundsToGo === 0){
      for(var i =0; i < n; i++){
        board.attributes[i] = baseArray[playedSoFar[i]];
      }
      if(!board.hasAnyRooksConflicts()){//dont know how to call function
        solution.push(playedSoFar);
      }
      return;
    }

    //recursive case
    for(var i = 0; i < n; i++){
      var currentPlay = base[i];
      var temp = playedSoFar.concat(currentPlay);
      if(temp.length >= 2 && temp[temp.length-2] === temp[temp.length-1]){
      } else if(temp.length >= 3 && temp[temp.length-3] === temp[temp.length-1]){
      }else if(temp.length >= 4 && temp[temp.length-4] === temp[temp.length-1]){
      }else if(temp.length >= 5 && temp[temp.length-5] === temp[temp.length-1]){
      }else if(temp.length >= 6 && temp[temp.length-6] === temp[temp.length-1]){
      }else if(temp.length >= 7 && temp[temp.length-7] === temp[temp.length-1]){
      }else if(temp.length >= 8 && temp[temp.length-8] === temp[temp.length-1]){
      }else{
        recurse(roundsToGo -1, temp);
      }
    }
  }
  recurse(n,[]);

  solutionCount = solution.length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

    var baseArray = this.findNRooksSolution(n)// give an array [[1,0,0],[0,1,0],[0,0,1]] => [0,1,2]
  var base=[];
  for(var i = 0; i < n; i++){
    base.push(i);
  }
  var solution = [];
  var solutionCount;

  var board = new Board({n:n});

  var recurse = function(roundsToGo, playedSoFar){
    //base case
    if(roundsToGo === 0){
      for(var i =0; i < n; i++){
        board.attributes[i] = baseArray[playedSoFar[i]];
      }
      if(!board.hasAnyQueensConflicts()){//dont know how to call function
        solution.push(playedSoFar);
        return;
      }
      return;
    }
    //recursive case
    for(var i = 0; i < n; i++){
      var currentPlay = base[i];
      var temp = playedSoFar.concat(currentPlay);
      if(temp.length >= 2 && temp[temp.length-2] === temp[temp.length-1]){
      } else if(temp.length >= 3 && temp[temp.length-3] === temp[temp.length-1]){
      }else if(temp.length >= 4 && temp[temp.length-4] === temp[temp.length-1]){
      }else if(temp.length >= 5 && temp[temp.length-5] === temp[temp.length-1]){
      }else if(temp.length >= 6 && temp[temp.length-6] === temp[temp.length-1]){
      }else if(temp.length >= 7 && temp[temp.length-7] === temp[temp.length-1]){
      }else if(temp.length >= 8 && temp[temp.length-8] === temp[temp.length-1]){
      }else{
        recurse(roundsToGo -1, temp);
      }
    }
  }
  if(n === 1){
    return [1];
  }else if(n < 4) {
    return undefined;
  }else{
    recurse(n,[]);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution[0];
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var baseArray = this.findNRooksSolution(n)// give an array [[1,0,0],[0,1,0],[0,0,1]] => [0,1,2]
  var base=[];
  for(var i = 0; i < n; i++){
    base.push(i);
  }
  var solution = [];
  var solutionCount;
  if(n < 2){
    return solutionCount = 1;
  }
  if(n < 4){
    return solutionCount = 0;
  }
  var board = new Board({n:n});

  var recurse = function(roundsToGo, playedSoFar){
    //base case
    if(roundsToGo === 0){
      for(var i =0; i < n; i++){
        board.attributes[i] = baseArray[playedSoFar[i]];
      }
      if(!board.hasAnyQueensConflicts()){//dont know how to call function
        solution.push(playedSoFar);
      }
      return;
    }

    //recursive case
    for(var i = 0; i < n; i++){
      var currentPlay = base[i];
      var temp = playedSoFar.concat(currentPlay);
      if(temp.length >= 2 && temp[temp.length-2] === temp[temp.length-1]){
      } else if(temp.length >= 3 && temp[temp.length-3] === temp[temp.length-1]){
      }else if(temp.length >= 4 && temp[temp.length-4] === temp[temp.length-1]){
      }else if(temp.length >= 5 && temp[temp.length-5] === temp[temp.length-1]){
      }else if(temp.length >= 6 && temp[temp.length-6] === temp[temp.length-1]){
      }else if(temp.length >= 7 && temp[temp.length-7] === temp[temp.length-1]){
      }else if(temp.length >= 8 && temp[temp.length-8] === temp[temp.length-1]){
      }else{
        recurse(roundsToGo -1, temp);
      }
    }
  }
  recurse(n,[]);
  console.log(solution);
  solutionCount = solution.length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
