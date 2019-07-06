function MatrixModel () {
    BaseModel.call(this);
    this.staticNumber = 2;
    this.attributes = {
        grid: JSON.parse(localStorage.getItem('matrix')) || [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
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



// MatrixModel.prototype.displayActionResults = function (key) {
//     this.publish('changeData');
// };


MatrixModel.prototype.initialConditionsForStaticNumber = function() {
    this.attributes.grid[this.randomCellPosition()][this.randomCellPosition()] = this.staticNumber;
};

MatrixModel.prototype.initialConditionsForRandomNumber = function() {
    this.attributes.grid[this.randomCellPosition()][this.randomCellPosition()] = this.randomCellValue();
}

MatrixModel.prototype.initialAction = function () {
    var firstNumber = this.initialConditionsForStaticNumber(),
        secondNumber = this.initialConditionsForRandomNumber();
   
    
    // this.transformArrayToMatrix(this.randomCellPositionExceptExisting()) ;  //Function composotion
    // this.randomCellPositionExceptExisting();
    this.publish('changeData');
};

MatrixModel.prototype.randomCellPositionExceptExisting = function() {
    var flattenArray = this.attributes.grid.flat(),
        randomNumber = this.randomCellPosition();
    if (flattenArray[randomNumber].length) {
        return this.randomCellPositionExceptExisting();
    } else {
        flattenArray[randomNumber] = this.randomCellValue;
    }
    return flattenArray;
};

MatrixModel.prototype.transformArrayToMatrix = function(array) {
    var matrix = [], i, size = array.length;
    for (i = 0; i < size; i += 4) {
        matrix.push(array.slice(i, i + 4));
    }
    this.attributes.grid = matrix;
    return this.attributes.grid;
};
  
MatrixModel.prototype.randomCellValue = function() {
    return Math.random() < 0.5 ? '2' : '4';
};
  
MatrixModel.prototype.randomCellPosition = function() {
    return Math.floor(Math.random() * 4);
};
  

  
MatrixModel.prototype.beginNewGame = function () {
    // localStorage.removeItem('matrix');
    var matrix = this.attributes.grid,
        size = matrix.length, i;
    for (i = 0; i < size; i += 1) {
        matrix[i].fill('');
    }
    console.log(matrix);
    this.initialAction();
    this.publish('changeData');
};
  