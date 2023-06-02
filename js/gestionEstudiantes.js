let modificarUsuario = () => { };
let eliminarUsuario = () => { };
let reload = () => { };

$(document).ready(function () {
    
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
                html += ' <button>Modificar</button>';
                html += '</td>';
                html += '<td>';
                html += '<button>Eliminar</button>';
                html += '</td>';
                html += '</tr>';
            });
            tbody.innerHTML = html;
        }).fail((error) => {
            console.error(error);
        });
    

    // let indexActividadSeleccionada = 0
    // let idUsuario = 0;

    // /**
    // * Funcianalidad para modificar un registro
    // */

    // modificarUsuario = function (id) {
    //     $('#titulo').html("Modificar");
    //     indexActividadSeleccionada = 1;
    //     idUsuario = id;

    //     $.ajax({
    //         url: `http://localhost:8000/usuarios` + `/${id}`,
    //         method: 'get'
    //     }).done(response => {
    //         const dataJson = JSON.parse(response);
    //         const msg = dataJson.data;
    //         console.log(msg);
    //         $('#name').val(msg.name);
    //         $('#username').val(msg.username);
    //         $('#password').val(msg.password);
    //     });

    // }

    // /**
    //  * Funcianalidad para registrar un usuario
    //  */
    // $('#registrar').click(function () {
    //     indexActividadSeleccionada = -1
    //     $usuario = $('#name').val("");
    //     $username = $('#username').val("");
    //     $password = $('#password').val("");
    //     $('#titulo').html("registrar");
    // })

    // /**
    // * Funcianalidad para guardar un registro o una modificacion
    // */
    // $('#guardar').click(function () {
    //     if (indexActividadSeleccionada == -1) {
    //         $usuario = $('#name').val();
    //         $username = $('#username').val();
    //         $password = $('#password').val();
    //         $.ajax({
    //             url: 'http://localhost:8000/usuarios',
    //             method: 'post',
    //             data: {
    //                 name: $usuario,
    //                 username: $username,
    //                 password: $password
    //             }
    //         }).done(response => {
    //             const dataJson = JSON.parse(response);
    //             const msg = dataJson.data;
    //             alert(msg);
    //             reload();
    //         });
    //     } else if (indexActividadSeleccionada == 1) {
    //         $name = $('#name').val();
    //         $username = $('#username').val();
    //         $password = $('#password').val();
    //         $.ajax({
    //             url: 'http://localhost:8000/usuarios' + `/${idUsuario}`,
    //             method: 'put',
    //             data: {
    //                 name: $name,
    //                 username: $username,
    //                 password: $password
    //             }
    //         }).done(response => {
    //             const dataJson = JSON.parse(response);
    //             const msg = dataJson.data;
    //             alert(msg);
    //             reload();
    //         });
    //     } else {
    //         alert('Debe seleccionar modificar o registrar');
    //     }
    // })

    // /**
    // * Funcianalidad para eliminar un usuario
    // */

    // eliminarUsuario = function (posicionArray) {
    //     let id = posicionArray.toString();
    //     $.ajax({
    //         url: 'http://localhost:8000/usuarios' + `/${id}`,
    //         method: 'delete'
    //     }).done(response => {
    //         const dataJson = JSON.parse(response);
    //         const msg = dataJson.data;
    //         alert(msg);
    //         reload();
    //     });
    // }




    // // $.ajax({
    // //     url: 'http://localhost:8000/usuarios/7',
    // //     method: 'delete'
    // // }).done(response => {
    // //     const dataJson = JSON.parse(response);
    // //     const msg = dataJson.data;
    // //     alert(msg);
    // // });

    // // $.ajax({
    // //     url: 'http://localhost:8000/usuarios',
    // //     method: 'get'
    // // }).done(response => {
    // //     const dataJson = JSON.parse(response);
    // //     const msg = dataJson.data;
    // //     console.log(msg);
    // // });
})