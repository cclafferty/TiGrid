/**
 * TiGridCoordinate adds some sugar to TiGrid
 * 
 * @argument _args Object
 */
function TiGridCoordinate (/*Object*/ _args) {
	this.bottom = _args.bottom;
	this.top = _args.bottom + _args.height;
	this.left = _args.left;
	this.right = _args.left + _args.width;
	this.height = _args.height;
	this.width = _args.width;
}

/**
 * Set the size and position of a view to the 
 * confines and locaiton of a grid coordinate
 * 
 * @argument view TiView
 */
TiGridCoordinate.prototype.position = function (/*TiView*/ view) {
	view.bottom = this.bottom;
	view.left = this.left;
	view.height = this.height;
	view.width = this.width;
};

/**
 * TiGrid is a simple function to assist
 * with evenly distributed positioning of elements
 * 
 * @argument _args Object 
 *  cols: Number of grid columns, 
 *  rows: Number of grid rows, 
 *  width: Width of the grid
 *  height: Height of the grid
 *  margin: Amount of space to leave on all sides
 * }
 */
function TiGrid(/*Object*/ _args) {
	_args = _args || {};
	
	this.cols = _args.cols || 1;
	this.rows = _args.rows || 1;
	this.width = _args.width || 0;
	this.height = _args.height || 0;
	this.margin = _args.margin || 0;
	
	// Rows, cols, height and width are all required
	if (this.cols < 1 || this.rows < 1 || this.width < 1 || this.height < 1) {
		throw new Error('Incorrect parameters: cols, rows, width and height should be defined and greater than zero');
	}
}

/**
 * Get the position and size of elements using grid coordinates
 * 
 * @argument x Int	Horizontal cell location starting at 0
 * @argument y Int	Vertical cell location starting at 0
 * @argument _args Object
 *  colspan: Number of cells the position stretches horizontally
 *  rowspan: Number of cells the position stretches vertically
 */
TiGrid.prototype.coord = function (x, y, /*Object*/ _args) {
	_args = _args || {};
	
	var colspan = _args.colspan || 1,
		rowspan = _args.rowspan || 1;
	
	// x and y must be within their bounds
	if (x < 0 || x > this.cols || y < 0 || y > this.rows) {
		throw new Error('Incorrect paramaters: x or y out of bounds');
	}
	
	// colspan and rowspan must be within their bounds
	if (rowspan < 1 || rowspan > (this.rows - 1) || colspan < 1 || colspan > (this.cols - 1)) {
		throw new Error('Incorrect paramaters: colspan or rowspan out of bounds');
	}
	
	// Finally return the position they were after
	return new TiGridCoordinate({
		bottom: (y * (this.height / this.rows) + this.margin),
		left: (x * (this.width / this.cols) + this.margin),
		height: (rowspan * Math.ceil(this.height / this.rows)) - (this.margin * 2),
		width: (colspan * Math.ceil(this.width / this.cols)) - (this.margin * 2)
	});
};

// Set our module exports
module.exports = TiGrid;