function Controller() {
    this.matrixModel = new MatrixModel();
    // this.summaryModel = new SummaryModel();
}

Controller.prototype.onKeyPress = function () {
    var key;
    switch (event.keyCode) {
        case 38:
            key = 'up';
            break;
        case 40:
            key = 'down';
            break;
        case 37:
            key = 'left';
            break;
        case 39:
            key = 'right';
            break;
        default:
            return false;
    }
    this.matrixModel.showAction(key);
};

Controller.prototype.onClickNewGame = function () {
    this.matrixModel.beginNewGame();
};