function MatrixModel () {
    BaseModel.call(this);
    this.attributes = {
        grid: [
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
    // this.initialAction();
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

// MatrixModel.prototype.initialAction = function () {
//     // this.attributes.grid[this.randomCellPosition()][this.randomCellPosition()] = '2';
//     this.randomCellPositionExceptExisting();
//     this.publish('changeData');
// };

// MatrixModel.prototype.randomCellPositionExceptExisting = function() {
//     var flattenArray = this.attributes.grid.flat(),
//         arrayIndex = [], i, size = flattenArray.length, newArr = [];
  
//     flattenArray[Math.floor(Math.random() * 16)] = '2';
//     flattenArray.forEach(function (value, index) {
//       if(!value.length) {
//         arrayIndex.push(index);
//       }
//     });
//     var random = Math.floor(Math.random() * arrayIndex.length);
//     flattenArray[random] = this.randomCellValue();
  
//     for(i = 0; i < size; i += 4) {
//       newArr.push(flattenArray.slice(i, i + 4))
//     }
//     this.attributes.grid = newArr;
//     return this.attributes.grid;
// };
  
// MatrixModel.prototype.randomCellValue = function() {
//     return Math.random() < 0.8 ? '2' : '4';
// };
  
// MatrixModel.prototype.randomCellPosition = function() {
//     return Math.floor(Math.random() * 4);
// };
  
// MatrixModel.prototype.displayActionResults = function (key) {
//     this.publish('changeData');
// };
MatrixModel.prototype.reset = function () {
    var matrix = this.attributes.grid;
    for (var i = 0; i < this.attributes.grid.length; i += 1) {
        matrix[i].fill('');
    }
};
  
MatrixModel.prototype.beginNewGame = function () {
    this.reset();
    this.publish('changeData');
};
  

MatrixModel.prototype.showAction = function (key) {
    // if (key === 'left') {
    //     this.attributes.grid[0][0] = 2;
    // } else if (key === 'right') {
    //     console.log('tiriu');
    // }
};