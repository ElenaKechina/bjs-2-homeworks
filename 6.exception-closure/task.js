const parseCount = (value) => {
  const valueInt = parseInt(value, 10);
  if (isNaN(valueInt)) {
    throw new Error('Невалидное значение');
  }
  return valueInt;
};

const validateCount = (value) => {
  try {
    return parseCount(value);
  } catch (err) {
    return err;
  }
};

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    const p = this.getPerimeter() / 2;
    return +(
      (p * (p - this.a) * (p - this.b) * (p - this.c)) **
      (1 / 2)
    ).toFixed(3);
  }
}

const getTriangle = (a, b, c) => {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return {
      getArea() {
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
};
