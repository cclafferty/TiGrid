# TiGrid, a Titanium module to evenly position elements
TiGrid makes positioning Views and Buttons in Titanium easy.

## How to get started
Download the module somewhere into your `Resources` directory. e.g. `Resources/lib` and then require it from within your app. 
    
    // Include TiGrid
    var TiGrid = require('lib/TiGrid/TiGrid');

### Create a new grid.
Optionally you can include a `margin` parameter when making your grid to space your elements apart.

    // Make a new grid with the dimensions we want
    var grid = new TiGrid({
        height: 240,
        width: 320,
        cols: 4,
        rows: 5,
        margin: 4
    });

### Coordinates within the grid
You may position anything within the grid by referencing some `x,y` coordinates from the grid. e.g.
```.___ ___ ___ ___.
   |___|___|___|_B_|
   |___|___|___|___|
   |___|___|___|___|
   |___|___|___|___|
   |_A_|___|___|___|
```

Here `A is 0,0` and `B is 3,4`

Now to position any elements you may have you only need to reference the grid's coordinates and give it a view to position.

    var myView = Ti.UI.createView();
    grid.coord(0,0).position(myView);
    
`myView` will be positioned to the lower left of the grid (`A` in our previous example). It's height and width will be set to fit solely into that grid coordinate.

### colspan and rowspan
Since its unlikely you'll want everything the same size within your grid you can use the `colspan` and `rowspan` parameters to position your views into larger areas whilst still respecting any margins you've set.

    var myView = Ti.UI.createView();
    // myView's height will stretch over 2 rows
    grid.coord(0,0,{rowspan: 2}).position(myView);

    // Or also 2 columns
    grid.coord(0,0,{rowspan: 2, colspan: 2}).position(myView);

## Disclaimer
To keep people from coming after me: Use at your own risk blah blah, etc, etc. 

### Why?
I was working on another project which required a evenly laid out array of elements. I usually like to keep my code clean and the maths used to layout elements just bloated my code (I'm open to suggestions on this). Also maybe someone else will find this usefull. 
