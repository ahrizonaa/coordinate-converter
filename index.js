exports.RelativePoint = class RelativePoint {
	x;
	y;
	w;
	h;
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	static FromCartesian(x, y, w, h) {
		if (!w || !h) {
			throw new Error(
				'Cannot convert Cartesian coordiante to Relative coordiate without plane dimensions'
			);
		}
		let xr = w / 2 + x;
		let yr = h / 2 - y;
		return new RelativePoint(xr, yr, w, h);
	}
	static FromCartesianPoint(p) {
		let xr = p.w / 2 + p.x;
		let yr = p.h / 2 - p.y;
		return new RelativePoint(xr, yr, p.w, p.h);
	}

	ToCartesian() {
		if (!this.w || !this.h) {
			throw new Error(
				'Cannot convert Relative coordiante to Cartesian coordinate without plane dimensions'
			);
		}
		let xe = (this.w / 2 - this.x) * -1;
		let ye = this.h / 2 - this.y;
		return new CartesianPoint(xe, ye, this.w, this.h);
	}
};

exports.CartesianPoint = class CartesianPoint {
	x;
	y;
	w;
	h;
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	static FromRelative(x, y, w, h) {
		if (!w || !h) {
			throw new Error(
				'Cannot convert Relative coordinate to Cartesian coordinate without plane dimensions'
			);
		}
		let xe = (w / 2 - x) * -1;
		let ye = h / 2 - y;
		return new CartesianPoint(xe, ye, w, h);
	}
	static FromRelativePoint(p) {
		let xe = p.w / 2 + p.x;
		let ye = p.h / 2 - p.y;
		return new CartesianPoint(xe, ye, p.w, p.h);
	}

	ToRelative() {
		if (!this.w || !this.h) {
			throw new Error(
				'Cannot convert Cartesian coordinate to Relative coordinate without plane dimensions'
			);
		}
		let xr = this.w / 2 + this.x;
		let yr = this.h / 2 - this.y;
		return new RelativePoint(xr, yr, this.w, this.h);
	}
};
