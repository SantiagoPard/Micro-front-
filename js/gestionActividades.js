let url = new URLSearchParams(window.location.search);
let codigoEst = url.get("codigo");
console.log(codigoEst)

let eliminarActividad = () => { };

$(document).ready(function () {
  actualizar();
   function actualizar(){
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
            let html = '';
            let cont = 1;
            let codigo = 'Estudiante: ' + estudiante.codigo;
            codigo += '<br>' + 'Nombre Completo: ' + estudiante.nombres
            codigo += ' ' + estudiante.apellidos + '<br>';
            actividades.forEach(actividades => {
                html += '<tr>';
                html += '   <td>' + cont + '</td>';
                html += '   <td>' + actividades.descripcion + '</td>';
                html += '   <td>' + actividades.nota + '</td>';
                html += '<td>';
                html += ' <a href="html/modificarEstudiante.html?codigo=' + actividades.id + '" >Modificar</a>';
                html += '</td>';
                html += '<td>';
                html += '<button type="button" onclick="eliminarActividad(' + actividades.id + ')">Eliminar</button>';
                html += '</td>';
                html += '</tr>';
                cont++;
            });
            tbody.innerHTML = html;
            h1.innerHTML = codigo;
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