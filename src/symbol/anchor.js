// @flow

const Point = require('@mapbox/point-geometry');

class Anchor extends Point {
    angle: any;
    segment: number | void;

    constructor(x: number, y: number, angle: number, segment?: number) {
        super(x, y);
        this.angle = angle;
        if (segment !== undefined) {
            this.segment = segment;
        }
    }

    clone() {
        return new Anchor(this.x, this.y, this.angle, this.segment);
    }
}

module.exports = Anchor;
