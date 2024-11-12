function parseCount(parseCount) {
    let count;
    try {
        count = Number.parseFloat(parseCount);
    } catch (error) {
        console.error("Невалидное значение")
    }
    return count;
}
function validateCount(parseCount) {
    let count;
    try {
        count = parseCount(parseCount);
    } catch (error) {
        return error;
    }
    return count;
}

class Triangle {
    constructor(a, b, c) {
        this.perimeter = 0;
        this.area = 0;
        try {
            if (a + b < c || a + c < b || c + b < a) {
                throw new Error("Треугольник с такими сторонами не существует")
            }
        } catch {
            console.error("Треугольник с такими сторонами не существует")
        }
    }
    get perimeter() {
        return this._perimeter = a + b + c
    }
    get area() {
        const p = (a + b + c) / 2;
        return this._area = Number(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    const abcTriangle = new Triangle(4, 4, 4)
    try {
        return abcTriangle
    } catch (error) {
        abcTriangle.perimeter = "Ошибка! Треугольник не существует"
        abcTriangle.area = "Ошибка! Треугольник не существует"
        return abcTriangle
    }
}