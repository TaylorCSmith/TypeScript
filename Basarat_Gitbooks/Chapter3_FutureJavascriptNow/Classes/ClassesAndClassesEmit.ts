// classes... including classes emit 

class Point {
    x: number;
    y: number; 
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

// generates the following JS on ES5 emit:

/*
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point; 
})();
*/