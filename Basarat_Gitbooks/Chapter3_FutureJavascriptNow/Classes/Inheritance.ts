// Inheritance

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {    // must call parent constructor from class constructor
        super(x, y);                                  // the 'super' call must include all parameters from parent
        this.z = z;
    }
    add (point: Point3D) {      // parent 'add' was overwritten by just doing this
        var point2D = super.add(point); 
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}