# TiGrid, a Titanium module to evenly position elements
TiGrid makes positioning Views and Buttons in Titanium easy.

## How to get started
Download the module somewhere into your `Resources` directory. e.g. `Resources/lib` and then require it from within your app. 

```javascript    
// Include TiGrid
var TiGrid = require('lib/TiGrid/TiGrid');
```

### Create a new grid.
Create a new grid object as you would any other javascript object. Be sure to set its `height`, `width`, `cols` and `rows` attributes, these are required. 
Optionally you can include a `margin` parameter when making your grid to space your elements apart.

```javascript
// Make a new grid with the dimensions we want
var grid = new TiGrid({
    height: 240,
    width: 320,
    cols: 4,
    rows: 5,
    margin: 4
});
```

### Coordinates within the grid
You may position anything within the grid by referencing some `x,y` coordinates from the grid. e.g.

|  -  |  -  |  -  |  B  |
| --- | --- | --- | --- |
|  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |
|  -  |  -  |  -  |  -  |
|  A  |  -  |  -  |  -  |

Here `A is 0,0` and `B is 3,4`

Now, to retrieve a cells information from within the grid call the `grid.coord` method whilst passing in your x,y coordinates. This will return an object with height, width, left and bottom attributes, not overly usefull. 
With coordinates set, extend your call to include the `position` method and it will fill the cell at those coordinates with a view, perfectly positioned and sized.

```javascript
var myView = Ti.UI.createView();
grid.coord(0,0).position(myView);
```    

`myView` will be positioned to the lower left of the grid (`A` in our previous example). It's height and width will be set to fit neatly into that grid coordinate.

### colspan and rowspan
Since its unlikely you'll want everything the same size within your grid you can use the `colspan` and `rowspan` parameters to position your views into larger areas whilst still respecting any margins you've set.

```javascript
var myView = Ti.UI.createView();
// myView's height will stretch over 2 rows
grid.coord(0,0,{rowspan: 2}).position(myView);

// Or have your view stretch 2 columns and 2 rows
grid.coord(0,0,{rowspan: 2, colspan: 2}).position(myView);
```

## Disclaimer
To keep people from coming after me: Use at your own risk blah blah, etc, etc. 

### Why?
I was working on another project which required a evenly laid out array of elements. I usually like to keep my code clean and the maths used to layout elements just bloated my code (I'm open to suggestions on this). Also maybe someone else will find this usefull. 