import React from 'react';
import Solve from './Solve';
import Display from './Display';

function App() {

  var board = [[0,0,0,0,0,3,0,2,7],
                 [0,0,0,0,6,7,0,0,0],
                 [0,9,0,5,0,0,0,8,3],
                 [6,0,9,4,3,0,0,0,0],
                 [0,5,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,2,5,0],
                 [0,8,0,0,4,0,0,0,0],
                 [0,3,7,0,0,2,0,9,0],
                 [9,0,2,0,0,0,0,6,0]]

  var solution = false;

  return (
    <div>
      <Display board = {board} />
      <button onClick = {solution}>
        Solution
      </button>
      <Solve board = {board} />
    </div>
    
  );
}



export default App;
