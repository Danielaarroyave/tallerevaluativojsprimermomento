let opcion;
let contadorOpcion1 = 0;
let contadorOpcion2 = 0;
let contadorOpcion3 = 0;
let contadorOpcion4 = 0;
let contadorOpcion5 = 0;
let contadorOpcion6 = 0;

while (opcion !== 0) {
    opcion = parseInt(prompt('Menú de opcones para tus  ejercicios: \n 1.Ingresar tres números por teclado y ordenarlos de menor a mayor y de mayor a menor \n 2.Realizar un algoritmo que calcule el a rea de una circunferencia \n 3. Conocer qué tipo de triángulo es ingresando por teclado cada uno de sus lados \n 4. Ingresar dos números por teclado y saber si un número es amigo del otro \n 5. Ingresar un valor de compra y una cantidad (la cantidad equivale al mismo producto) y mostrar por consola el valor de la compra \n 6. Ingresar 4 notas de un estudiante y saber si ganó o perdió la materia \n 0. Salir '));

    // 1. Ingresar tres números por teclado y ordenarlos de menor a mayor y de mayor a menor
    // a. Solo hacer uso de las estructuras vistas en clase (no u�lizar métodos del lenguaje)

    if (opcion === 1) {
        const numeroUno = prompt("Ingrese el primer  numero")
        const numeroDos = prompt("Ingrese el segundo numero")
        const numeroTres = prompt("Ingrese el tercer numero")

        function numeroMayor() {

            if (numeroUno > numeroDos && numeroUno > numeroTres) {
                if (numeroDos > numeroTres) {
                    console.log(numeroUno + (" ") + numeroDos + (" ") + numeroTres);
                }
                else {
                    console.log(numeroUno + (" ") + numeroTres + (" ") + numeroDos);
                }
            }


            //Acá verificamos el # 2//
            if (numeroDos > numeroUno && numeroDos > numeroTres) {
                if (numeroUno > numeroTres) {
                    console.log(numeroDos + (" ") + numeroUno + (" ") + numeroTres);
                }
                else {
                    console.log(numeroDos + (" ") + numeroTres + (" ") + numeroUno);
                }
            }

            //Acá verificamos el # 3//

            if (numeroTres > numeroDos && numeroTres > numeroUno) {
                if (numeroUno > numeroDos) {
                    console.log(numeroTres + (" ") + numeroUno + (" ") + numeroDos);
                }
                else {
                    console.log(numeroTres + (" ") + numeroDos + (" ") + numeroUno);
                }
            }
        }

        //Acá verificamos de menor a mayor
        function numeroMenor() {



            if (numeroUno < numeroDos && numeroUno < numeroTres) {
                if (numeroDos < numeroTres) {
                    console.log(numeroUno + (" ") + numeroDos + (" ") + numeroTres);
                }
                else {
                    console.log(numeroUno + (" ") + numeroTres + (" ") + numeroDos);
                }
            }


            //Acá verificamos el # 2//
            if (numeroDos <= numeroUno && numeroDos <= numeroTres) {
                if (numeroUno <= numeroTres) {
                    console.log(numeroDos + (" ") + numeroUno + (" ") + numeroTres);
                }
                else {
                    console.log(numeroDos + (" ") + numeroTres + (" ") + numeroUno);
                }
            }


            if (numeroTres <= numeroDos && numeroTres <= numeroUno) {
                if (numeroUno <= numeroDos) {
                    console.log(numeroTres + (" ") + numeroUno + (" ") + numeroDos);
                }
                else {
                    console.log(numeroTres + (" ") + numeroDos + (" ") + numeroUno);
                }
            }
        }

    

        console.log(numeroMayor())
        console.log(numeroMenor());
        contadorOpcion1++; //contador 1

} else if (opcion === 2) {
    let radio = parseFloat(prompt("Ingrese el radio del circulo:"))




    function area(radio) {

        let pi = 3.1416

        return pi * radio ** 2;

    }


    console.log(`El área de una circunferencia cuyo radio es ${radio} es: ${area(radio)}`);
    contadorOpcion2++; //contador 2

    // 3. Realizar un algoritmo que permita ingresar los tres lados de un triángulo y mostrar que tipo de triangulo es
    // a. Escaleno: todos sus lados son diferentes
    // b. Isósceles: dos de sus lados son iguales y otro diferente
    // c. Equilátero: todos sus lados son iguales
}else if (opcion === 3) {
    let ladoUno = Number(prompt('Ingresa el valor del primer lado'))
    let ladoDos = Number(prompt('Ingresa el valor del segundo lado'))
    let ladoTres = Number(prompt('Ingresa el valor del tercer lado'))


    if (ladoUno != ladoDos && ladoUno != ladoTres && ladoDos != ladoTres) {
        console.log(`El triangulo es un escaleno `);

    } else if (ladoUno === ladoDos || ladoUno === ladoTres || ladoDos === ladoTres) {
        console.log(`El triangulo es un isósceles`);

    } else if (ladoUno === ladoDos && ladoUno === ladoTres && ladoDos === ladoTres) {
        console.log(`El triangulo es un equilátero`);
    } else {
        console.log('no ingreso los valores correctos');
    }
    contadorOpcion3++; //contador 3

}else if (opcion === 4) {
    let x = parseInt(prompt('Digite el valor de x: '));
    let divisores_n1 = [1]
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            divisores_n1.push(i)
        }
        else if (divisores_n1.length < 2) {
            divisores_n1.push(x)
        }

    }
    let suma_d1 = divisores_n1.reduce((a, b) => a + b)
    console.log(`Los divisores de ${x} son: ${divisores_n1} y su suma es: ${suma_d1} `)




    // //Valor de y
    let y = parseInt(prompt('Digite el valor de y: '));
    let divisores_n2 = [1]
    for (let i = 2; i < y; i++) {
        if (y % i == 0) {
            divisores_n2.push(i)
        } else if (divisores_n2.length < 2) {
            divisores_n2.push(x)
        }

    }
    let suma_d2 = divisores_n2.reduce((a, b) => a + b)
    console.log(`Los divisores de ${y} son: ${divisores_n2} y su suma es: ${suma_d2} `)


    // //comprobación si son o no números amigos
    if (suma_d1 == y && suma_d2 == x) {
        console.log(`${x} y ${y} son números amigos`)
    } else {
        console.log(`${x} y ${y} no son números amigos`)
    }
    contadorOpcion4++; //contador 4




}