let modificarEstudiante = () => { };
let eliminarUsuario = () => { };
let reload = () => { };

$(document).ready(function () {
        if(window.location.href == 'http://127.0.0.1:5500/index.html'){
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
                html += '   <td>' + estudiantes.nombres +' '+ estudiantes.apellidos + '</td>';
                html += '<td>';
                html += ' <button onclick="modificarEstudiante('+ estudiantes.id +')">Modificar</button>';
                html += '</td>';
                html += '<td>';
                html += '<button onclick="eliminarEstudiante('+ estudiantes.id +')">Eliminar</button>';
                html += '</td>';
                html += '</tr>';
            });
            tbody.innerHTML = html;
        }).fail((error) => {
            console.error(error);
        });
        }
    
    let indexActividadSeleccionada = 0
    let idEstudiante = 0;

    /**
    * Funcianalidad para modificar un registro
    */

    modificarEstudiante = function (id) {
        $('#titulo').html("Modificar");
        indexActividadSeleccionada = 1;
        idEstudiante = id;
        window.location.assign('../registrarEstudiante.html');
        $.ajax({
            url: `http://localhost:8000/estudiantes${id}`,
            method: 'get'
        }).done(response => {
            const dataJson = JSON.parse(response);
            const msg = dataJson.data;
            console.log(msg);
            $('#name').val(msg.codigo);
            $('#username').val(msg.nombres +''+ msg.apellidos);
            $('#password').val(msg.apellidos);
        });

    }

    /**
     * Funcianalidad para registrar un usuario
     */
    // $('#registrar').click(function () {
    //     indexActividadSeleccionada = -1
    //     $codigo = $('#codigo').val("");
    //     $nombres = $('#nombres').val("");
    //     $apellidos = $('#apellidos').val("");
    //     $('#titulo').html("registrar");
    // })

    /**
    * Funcianalidad para guardar un registro o una modificacion
    */
    $('#guardar').click(function () {
        alert('hoola');
        if (indexActividadSeleccionada == -1) {
            alert('hoola');
            $codigo = $('#codigo').val();
            $nombres = $('#nombres').val();
            $apellidos = $('#apellidos').val();
            $.ajax({
                url: 'http://localhost:8000/estudiantes',
                method: 'post',
                data: {
                    codigo: $codigo,
                    nombres: $nombres,
                    apellidos: $apellidos
                }
            }).done(response => {
                const dataJson = JSON.parse(response);
                const msg = dataJson.data;
                alert(msg);
                
            });
        } else if (indexActividadSeleccionada == 1) {
            $name = $('#name').val();
            $username = $('#username').val();
            $password = $('#password').val();
            $.ajax({
                url: 'http://localhost:8000/estudiantes' + `/${idEstudiante}`,
                method: 'put',
                data: {
                    name: $name,
                    username: $username,
                    password: $password
                }
            }).done(response => {
                const dataJson = JSON.parse(response);
                const msg = dataJson.data;
                alert(msg);
                reload();
            });
        } else {
            alert('Debe seleccionar modificar o registrar');
        }
    })

    /**
    * Funcianalidad para eliminar un usuario
    */

    eliminarUsuario = function (posicionArray) {
        let id = posicionArray.toString();
        $.ajax({
            url: `http://localhost:8000/estudiantes${id}`,
            method: 'delete'
        }).done(response => {
            const dataJson = JSON.parse(response);
            const msg = dataJson.data;
            alert(msg);
            reload();
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