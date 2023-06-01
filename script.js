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

} 