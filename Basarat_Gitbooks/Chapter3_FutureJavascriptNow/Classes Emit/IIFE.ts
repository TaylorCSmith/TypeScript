// IIFE capturing base class as a variable _super...

var Point3D = (function (_super) {
    _extends(Point3D, _super);
    function Point3D(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    Point3D.prototype.add = function(point) {
        var point2D = _super.prototype.add.call(this, point); 
        return new Point3D(point2D.x, point2D.y, this.z + point2D.z);
    };
    return Point3D;

})(Point);

var _extends = this._extends || function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function _() {this.constructor = d;}
    _.prototype = b.prototype;
    d.prototype = new _();
};



// prototyping significance 

function Animal () {}
Animal.prototype.walk = function () { console.log('walk')};

function Bird() {}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function() {console.log('fly')}

var bird = new Bird(); 
bird.walk(); 
bird.fly(); 