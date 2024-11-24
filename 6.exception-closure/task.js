function parseCount(parseCount) {
    let count = Number.parseFloat(parseCount);
    if (count === NaN) {
        throw new Error("Невалидное значение")
    } else {
        return count;
    }
}
function validateCount(parseCount) {
    try {
        return parseCount(parseCount);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        let a = a;
        let b = b;
        let c = c;
        this.perimeter = 0;
        this.area = 0;
        if (a + b < c || a + c < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }

    }
    get perimeter() {
        return this.perimeter = a + b + c
    }
    get area() {
        const p = perimeter / 2;
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