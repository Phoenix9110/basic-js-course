

const Cuadrado = (lado) =>{
    const perimetro = lado * 4;
    const area = lado * lado;
    const perimetroText = `El perímetro del cuadrado es: ${perimetro} cm`;
    const areaText = `El área del cuadrado es: ${area} cm\u00B2`;
    alert(`${perimetroText}\n${areaText}`);
}
const Triangulo = (lado1, lado2, base, altura) =>{
    const perimetro = lado1 + lado2 + base;
    const area = (altura * base) / 2;
    const perimetroText = `El perímetro del triángulo es: ${perimetro} cm`;
    const areaText = `El área del triángulo es: ${area} cm\u00B2`;
    alert(`${perimetroText}\n${areaText}`);
}

const Circulo = (radio) =>{
    const diametro = radio * 2;
    const PI = Math.ceil(Math.PI);
    const perimetro = diametro * PI;
    const area = PI * (radio * radio);
    const perimetroText = `El perímetro del circulo es: ${perimetro} cm`;
    const areaText = `El área del circulo es: ${area} cm\u00B2`;
    alert(`${perimetroText}\n${areaText}`);
}

// Cuadrado(5);
// Triangulo(5, 6, 7, 8);

const getCirculo = () =>{
    const radio = document.getElementById("circle_size").value;
    Circulo(radio);
}
const getTriangulo = () =>{
    const lado1 = document.getElementById("triangle_size").value;
    const lado2 = document.getElementById("triangle_size2").value;
    const base = document.getElementById("triangle_base").value;
    const altura = document.getElementById("triangle_height").value;
    Triangulo(lado1, lado2, base, altura);
}
const getCuadrado = () =>{
    const lado = document.getElementById("square_size").value;
    Circulo(lado);
}