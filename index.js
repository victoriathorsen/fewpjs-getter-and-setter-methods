class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference() {
        return 2*3.14*this.radius
    }

    get area() {
        return 3.14 * (this.radius**2)
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / 2 / 3.14
    }
}