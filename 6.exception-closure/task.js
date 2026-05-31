function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (Number.isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}


const parsedValue = parseCount('42.2');
console.log(typeof parsedValue); // number

const invalidValue = validateCount('string');
console.log(invalidValue.message); 

class Triangle {
    constructor(a, b, c) {
        // Проверка неравенства треугольника: сумма двух сторон должна быть больше третьей
        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        // Вычисление площади по формуле Герона
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        // Округление до 3 знаков после запятой и приведение к числу
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}

const triangle = getTriangle(3, 4, 5);
console.log(triangle.perimeter); // 12
console.log(triangle.area);      // 6

const invalidTriangle = getTriangle(1, 2, 3);
console.log(invalidTriangle); 
console.log(invalidTriangle.perimeter); 
console.log(invalidTriangle.area);      

console.log(invalidTriangle.a, invalidTriangle.b);