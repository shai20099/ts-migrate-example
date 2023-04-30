// wrong-type-assignment
let age = 17;

age = "seventeen";

// assign-to-const
const color = "blue";

color = "red";

// add-conversions
function sum(a, b) {
  return a + b;
}

// declare-missing-class-properties
class Point {
  distance(point) {
    const dx = this.x - point.x;
    const dy = this.y - point.y;

    return Math.hypot(dx, dy);
  }
}
