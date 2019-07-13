function MatrixModel () {
    BaseModel.call(this);
    this.attributes = {
        grid: JSON.parse(localStorage.getItem('matrix')) || [
            ['1', '2', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['3', '4', '', '']
        ],
        width: 4,
        height: 4
    };

    var instance = this;
    MatrixModel = function () {
        return instance;
    };
    !localStorage.getItem('matrix') && this.initialAction();
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;



MatrixModel.prototype.displayActionResults = function (key) {
// if(key === 'up') {
//   var matrix = [];
//   for(var i = 0; i < this.attributes.grid.length; i += 1) {
//     var row = [];
//     for(var j = 0; j < this.attributes.grid[i].length; j += 1) {
//       row.push(this.attributes.grid[i][j]);
//     }
//     matrix.push(row);
//   }
//   console.log(this.attributes.grid, matrix);
// }
// console.log(this.rotate(this.attributes.grid)); 
  var i, j, grid = this.attributes.grid, left, right;
//   var newGrid = this.rotate(grid);
  for(i = 0; i < grid.length; i += 1) {
    left = [];
    right = [];
    for (j = 0; j < grid[i].length; j += 1) {
      grid[i][j].length ? left.push(grid[i][j]) : right.push(grid[i][j]);
    }
    
    if (key === 'left') {
        grid[i] = left.concat(right);
    } else if (key === 'right') {
        grid[i] = right.concat(left);
    } else if (key === 'up') {
        // // var newGrid = this.rotate(grid);
        // console.log(newGrid);
        // newGrid[i] = left.concat(right);
        // // this.rotate(newGrid);
    } else if (key === 'down') {
        // this.rotate(grid);
        // grid[i] = right.concat(left);
        // this.rotate(grid);
    }
  }
  this.publish('changeData');

  return 50;
};




MatrixModel.prototype.initialAction = function () {
    this.attributes.grid[this.randomCellPosition()][this.randomCellPosition()] = '2';
    this.transformArrayToMatrix(this.randomCellPositionExceptExisting()); // Function Composition
    this.publish('changeData');
};  

MatrixModel.prototype.randomCellPositionExceptExisting = function() {
    var flattenArray = this.attributes.grid.flat(),
        randomNumber = this.randomCellPosition();
    if(flattenArray[randomNumber].length) {
      return this.randomCellPositionExceptExisting();
    } else {
      flattenArray[randomNumber] = this.randomCellValue();
    }
    return flattenArray;
};
  

MatrixModel.prototype.transformArrayToMatrix = function(array) {
    var matrix = [], i, size = array.length;
    for(i = 0; i < size; i += 4) {
      matrix.push(array.slice(i, i + 4));
    }
    this.attributes.grid = matrix;
    localStorage.setItem('matrix', JSON.stringify(this.attributes.grid));
    return this.attributes.grid;
};
  
  
MatrixModel.prototype.randomCellValue = function() {
    return Math.random() < 0.5 ? '2' : '4';
};
  
MatrixModel.prototype.randomCellPosition = function() {
    return Math.floor(Math.random() * 4);
};
   
MatrixModel.prototype.beginNewGame = function () {
    var matrix = this.attributes.grid,
        size = matrix.length, i;
    for (i = 0; i < size; i += 1) {
        matrix[i].fill('');
    }
    localStorage.removeItem('matrix');
    this.initialAction();
    this.publish('changeData');
};

MatrixModel.prototype.calculate = function(array) {
    // ...
    return array;
};
 



MatrixModel.prototype.rotate = function(b) {
    console.log(b);
    for (var d = b.length, a = 0; a < d; a += 1) {
        for (var c = a + 1; c < d; c += 1) {
            var e = b[a][c];
            b[a][c] = b[c][a];
            b[c][a] = e;
        }
    }
    // console.log(typeof(b.join('\n')));
    this.attributes.grid = b;
    return this.attributes.grid;
};


// function rotate(b) {
//     for (var d = b.length, a = 0; a < d; a += 1) {
//         for (var c = a + 1; c < d; c += 1) {
//             var e = b[a][c];
//             b[a][c] = b[c][a];
//             b[c][a] = e;
//         }
//     }
//     return b.join('\n');
// }   
// var a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    
// console.log(rotate(a));
// console.log(rotate(a));
// console.log(rotate(a));
// console.log(rotate(a));


