const { RelativePoint, CartesianPoint } = require('coordinate-converter');

let viewport = {
	width: 500,
	height: 500
};

let topRightQuadrant = new RelativePoint(
	375,
	125,
	viewport.width,
	viewport.height
);

console.log(topRightQuadrant, topRightQuadrant.ToCartesian());
// RelativePoint { x: 375, y: 125, w: 500, h: 500 } CartesianPoint { x: 125, y: 125, w: 500, h: 500 }

viewport.width = 1920;
viewport.height = 1080;

let bottomLeftMargin = new CartesianPoint(
	-940,
	-520,
	viewport.width,
	viewport.height
);

console.log(bottomLeftMargin, bottomLeftMargin.ToRelative());
// CartesianPoint { x: -940, y: -520, w: 1920, h: 1080 } RelativePoint { x: 20, y: 1060, w: 1920, h: 1080 }
