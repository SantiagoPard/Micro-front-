let url = new URLSearchParams(window.location.search);
let id = url.get("id");
let codigoEst = url.get("codigo")

$("#titulo").html("Modificar");
$("#volverAct").attr('href','../actividades.html?codigo='+codigoEst);
$.ajax({
    url: "http://localhost:8000/actividad/" + `${id}`,
    method: "get",
}).done((response) => {
    const dataJson = JSON.parse(response);
    const msg = dataJson.data;
    console.log(msg);
    $("#descripcion").val(msg.descripcion);
    $("#nota").val(msg.nota);
});

$("#guardarAct").click(function () {
    $descripcion = $("#descripcion").val();
    $nota = $("#nota").val();
    $.ajax({
        url: "http://localhost:8000/actividades" + `/${id}`,
        method: "put",
        data: {
            descripcion: $descripcion,
            nota: $nota,
        },
    }).done((response) => {
        const dataJson = JSON.parse(response);
        const msg = dataJson.data;
        alert(msg);
        location.href='../actividades.html?codigo='+codigoEst;
    });
});
