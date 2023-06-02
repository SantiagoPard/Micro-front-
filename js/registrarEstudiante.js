/**
 * Funcianalidad para registrar un usuario
 */
$("#guardar").click(function () {
  $codigo = $("#codigo").val();
  $nombres = $("#nombres").val();
  $apellidos = $("#apellidos").val();
  $.ajax({
    url: "http://localhost:8000/estudiantes",
    method: "post",
    data: {
      codigo: $codigo,
      nombres: $nombres,
      apellidos: $apellidos,
    },
  }).done((response) => {
    const dataJson = JSON.parse(response);
    const msg = dataJson.data;
    alert(msg);
  });
});
