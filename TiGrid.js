/*
 * col, row, width, height, margin
 */
function Grid(/*Object*/ _args) {
	_args = _args || {};
	this.col = _args.col || 0;
	this.row = _args.row || 0;
	this.width = _args.width || 0;
	this.height = _args.height || 0;
	this.margin = _args.margin || 0;
	
	if (this.col === 0 || this.row === 0 || this.width === 0 || this.height === 0) {
		return null;
	}
}

Grid.prototype.position = function (x, y, sizeX, sizeY) {
	sizeX = sizeX || 1;
	sizeY = sizeY || 1;
	
	if (x > this.col || y > this.row) {
		return undefined;
	}
	
	return new GridPosition({
		bottom: (y * (this.height / this.row) + this.margin),
		left: (x * (this.width / this.col) + this.margin),
		height: (sizeY * (this.height / this.row)) - (this.margin * 2),
		width: (sizeX * (this.width / this.col)) - (this.margin * 2)
	});
}

function GridPosition (_args) {
	this.bottom = _args.bottom;
	this.left = _args.left;
	this.height = _args.height;
	this.width = _args.width;
}

GridPosition.prototype.add = function (/*TiView*/ view) {
	view.bottom = this.bottom;
	view.left = this.left;
	view.height = this.height;
	view.width = this.width;
}

module.exports = Grid;