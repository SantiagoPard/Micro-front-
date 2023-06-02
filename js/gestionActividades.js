let url = new URLSearchParams(window.location.search);
let codigoEst = url.get("codigo");
console.log(codigoEst)

let eliminarActividad = () => { };

$(document).ready(function () {
    actualizar();
    function actualizar() {
        $.ajax({
            method: 'get',
            url: 'http://localhost:8000/actividades/' + codigoEst
        }).done(reload = (response) => {
            const dataJson = JSON.parse(response);
            const actividades = dataJson.data;
            const estudiante = dataJson.data2;
            const table = document.getElementById('actividadesTb');
            const tbody = table.getElementsByTagName('tbody')[0];
            const h1 = document.getElementById('code');
            const a = document.getElementById('registrarActividad');

            let html = '';
            let cont = 1;

            let codigo = 'Estudiante: ' + estudiante.codigo;
            codigo += '<br>' + 'Nombre Completo: ' + estudiante.nombres
            codigo += ' ' + estudiante.apellidos + '<br>';

            let suma = 0;

            actividades.forEach(actividades => {
                html += '<tr>';
                html += '   <td>' + cont + '</td>';
                html += '   <td>' + actividades.descripcion + '</td>';
                html += '   <td>' + actividades.nota + '</td>';
                html += '<td>';
                html += ' <a href="html/modificarActividad.html?id=' + actividades.id + '&codigo=' + estudiante.codigo + '" >Modificar</a>';
                html += '</td>';
                html += '<td>';
                html += '<button type="button" onclick="eliminarActividad(' + actividades.id + ')">Eliminar</button>';
                html += '</td>';
                html += '</tr>';
                cont++;
                nota = parseFloat(actividades.nota);
                suma += nota;
            });

            tbody.innerHTML = html;
            h1.innerHTML = codigo;
            a.setAttribute('href', '../html/registrarActividad.html?codigo=' + estudiante.codigo);

            if (suma == 0) {

                $("#alert").html('todavia no se a ingresado una actividad');
                $("#promedio").html('');

            } else if (suma != 0) {

                let promedio = suma / (cont - 1);

                if (promedio >= 3) {

                    $("#promedio").html('<font color="green">' + 'felicidades ' + promedio.toFixed(2) + '</font>');

                } else if (promedio < 3) {

                    $("#promedio").html('<font color="red">' + 'sera para la proxima ' + promedio.toFixed(2) + '</font>');

                }
            }
        }).fail((error) => {
            console.error(error);
        });
    }

    eliminarActividad = function (posicionArray) {
        id = posicionArray;

        $.ajax({
            url: `http://localhost:8000/actividades/${id}`,
            method: 'delete'
        }).done(response => {
            const dataJson = JSON.parse(response);
            const msg = dataJson.data;
            alert(msg);
            actualizar();
        });
    }
})