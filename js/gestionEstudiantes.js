
let modificarEstudiante = () => { };
let eliminarEstudiante = () => { };
let reload = () => { };

$(document).ready(function () {

    if (window.location.href == 'http://127.0.0.1:5500/index.html') {
        $.ajax({
            method: 'get',
            url: 'http://localhost:8000/estudiantes'
        }).done(reload = (response) => {
            const dataJson = JSON.parse(response);
            const estudiantes = dataJson.data;
            const table = document.getElementById('estudiantesTb');
            const tbody = table.getElementsByTagName('tbody')[0];
            let html = '';
            estudiantes.forEach(estudiantes => {
                html += '<tr>';
                html += '   <td>' + estudiantes.codigo + '</td>';
                html += '   <td>' + estudiantes.nombres + ' ' + estudiantes.apellidos + '</td>';
                html += '<td>';
                html += ' <a href="html/modificarEstudiante.html?codigo='+estudiantes.codigo+'" >Modificar</a>';
                html += '</td>';
                html += '<td>';
                html += '<button onclick="eliminarEstudiante(' + estudiantes.codigo + ')">Eliminar</button>';
                html += '</td>';
                html += '<td>'
                html += '<a href="html/modificarEstudiante.html?codigo='+estudiantes.codigo+'" >Notas</a>'
                html += '</td>'
                html += '</tr>';
            });
            tbody.innerHTML = html;
        }).fail((error) => {
            console.error(error);
        });
    }

    /**
    * Funcianalidad para eliminar un usuario
    */

    eliminarEstudiante = function (posicionArray) {
        id = posicionArray;
        $.ajax({
            url: `http://localhost:8000/estudiantes/${id}`,
            method: 'delete'
        }).done(response => {
            const dataJson = JSON.parse(response);
            const msg = dataJson.data;
            alert(msg);
        
        });
    }




    // // $.ajax({
    // //     url: 'http://localhost:8000/estudiantes/7',
    // //     method: 'delete'
    // // }).done(response => {
    // //     const dataJson = JSON.parse(response);
    // //     const msg = dataJson.data;
    // //     alert(msg);
    // // });

    // // $.ajax({
    // //     url: 'http://localhost:8000/estudiantes',
    // //     method: 'get'
    // // }).done(response => {
    // //     const dataJson = JSON.parse(response);
    // //     const msg = dataJson.data;
    // //     console.log(msg);
    // // });
})