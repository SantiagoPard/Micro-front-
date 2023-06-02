let url = new URLSearchParams(window.location.search);
let codigoEst = url.get("codigo");
$("#titulo").html('Modificar Actividad');
$("#volverAct").attr('href','../actividades.html?codigo='+codigoEst);
$("#codigoEstudiante").val(codigoEst);
$("#guardar").click(function () {
    $descripcion = $("#descripcion").val();
    $nota = $("#nota").val();
    $codigo = $("#codigoEstudiante").val();
   
    $.ajax({
      url: "http://localhost:8000/actividades",
      method: "post",
      data: {
        descripcion: $descripcion,
        nota: $nota,
        codigo_estudiante: $codigo,
      },
    }).done((response) => {
      const dataJson = JSON.parse(response);
      const msg = dataJson.data;
      alert(msg);
    });
  });