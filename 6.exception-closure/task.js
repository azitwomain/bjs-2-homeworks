function parseCount(parseNum) {
    let count = Number.parseFloat(parseNum);
    if (Number.isNaN(count)) {
        throw new Error("Невалидное значение")
    } else {
        return count;
    }
}
function validateCount(parseNum) {
    try {
        return parseCount(parseNum);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }

    }
    get perimeter() {
        return this.perimeter = a + b + c
    }
    get area() {
        const p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {

    try {
        return abcTriangle = new Triangle(a, b, c)
    } catch (error) {
        abcTriangle.perimeter = "Ошибка! Треугольник не существует"
        abcTriangle.area = "Ошибка! Треугольник не существует"
        return abcTriangle
    }
}