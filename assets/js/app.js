console.log("Probando consola");

/* Datos del Usuario */
var NombrePersona = prompt("Ingrese su Nombre");
var CarreraPersona = prompt("Ingrese su Carrera");

/*----------------------------------------*/

/* Datos notas HTML*/
var notahtml1 = prompt("Ingrese nota 1 Html");
var notahtml2 = prompt("Ingrese nota 2 Html");
var notahtml3 = prompt("Ingrese nota 3 Html");

/* Suma Promedio HTML */
var suma_total_html = parseInt(notahtml1) + parseInt(notahtml2) + parseInt(notahtml3);

/* Promedio HTML*/
var promedio1 = suma_total_html / 3;

/*----------------------------------------*/

/* Datos notas CSS*/
var notacss1 = prompt("Ingrese nota 1 Css");
var notacss2 = prompt("Ingrese nota 2 Css");
var notacss3 = prompt("Ingrese nota 3 Css");

/* Suma Promedio CSS */
var suma_total_css = parseInt(notacss1) + parseInt(notacss2) + parseInt(notacss3);

/* Promedio CSS*/
var promedio2 = suma_total_css / 3;

/*----------------------------------------*/


/* Datos Notas js*/
var notajs1 = prompt("Ingrese nota 1 JS");
var notajs2 = prompt("Ingrese nota 2 JS");
var notajs3 = prompt("necesitas obtener un 4.00 en nota 3 JS"); 

/* Suma Promedio JS */
var suma_total_js = parseInt(notajs1) + parseInt(notajs2) + parseInt(notajs3);


/* Promedio js*/
var promedio3 = suma_total_js / 3;

document.write(`
<body>
    <!-- table de notas -->
    <div class="container"> 
        <table class="table caption-top fw-bold">
            <caption>
                <h1 class="fw-bold text-dark">Notas Finales</h1>
                <div class="row">
                    <div class="col fw-bold text-dark">
                        <p class="datopersona">Nombre:</p>
                    </div>
                    <div class="col fw-bold">
                        <p class="datopersona">${NombrePersona}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col fw-bold text-dark">
                        <p class="datopersona">Carrera:</p>
                    </div>
                    <div class="col fw-bold">
                        <p class="datopersona">${CarreraPersona}</p>
                    </div>
                </div>
            </caption>
            <thead class="table-dark">
                <tr>
                    <th scope="col">Ramo</th>
                    <th scope="col">Nota 1</th>
                    <th scope="col">Nota 2</th>
                    <th scope="col">Nota 3</th>
                    <th scope="col">Promedio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">HTML</th>
                    <td>${notahtml1}</td>
                    <td>${notahtml2}</td>
                    <td>${notahtml3}</td>
                    <td>${promedio1}</td>
                </tr>
                <tr>
                    <th scope="row">CSS</th>
                    <td>${notacss1}</td>
                    <td>${notacss2}</td>
                    <td>${notacss3}</td>
                    <td>${promedio2}</td>
                </tr>
                <tr>
                    <th scope="row">JavaScript</th>
                    <td>${notajs1}</td>
                    <td>${notajs2}</td>
                    <td>${notajs3}</td>
                    <td>${promedio3}</td>
                </tr>
            </tbody> 
        </table>
    </div>       
    
`);

document.write(`<div class="ps-5 m-5">
<tfoot>
    <p>Para aprobar el ramo JavaScript con nota ${notajs3} necesitas obtener un 4.00 en la nota 3</p>
</tfoot> 
</div>`);
