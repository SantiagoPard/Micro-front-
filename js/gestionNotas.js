let url = new URLSearchParams(window.location.search);
let codigoEst = url.get("codigo");
console.log(codigoEst)

$(document).ready(function () {
    $.ajax({
        method: 'get',
        url: 'http://localhost:8000/actividades/'+codigoEst
    }).done(reload = (response) => {
        const dataJson = JSON.parse(response);
        const actividades = dataJson.data;
        const table = document.getElementById('actividadesTb');
        const tbody = table.getElementsByTagName('tbody')[0];
        let html = '';
        let cont = 1;
        actividades.forEach(actividades => {
            html += '<tr>';
            html += '   <td>' + cont + '</td>';
            html += '   <td>' + actividades.descripcion+'</td>';
            html += '   <td>' + actividades.nota+'</td>';
            html += '<td>';
            html += ' <a href="html/modificarEstudiante.html?codigo='+actividades.id+'" >Modificar</a>';
            html += '</td>';
            html += '<td>';
            html += '<button onclick="eliminarEstudiante(' + actividades.id + ')">Eliminar</button>';
            html += '</td>';
            html += '<td>';
            html += '<a href="html/modificarEstudiante.html?codigo='+actividades.id+'" >Notas</a>';
            html += '</td>';
            html += '</tr>';
            cont++;
        });
        tbody.innerHTML = html;
    }).fail((error) => {
        console.error(error);
    });
})