let url = new URLSearchParams(window.location.search);
let codigoEst = url.get("codigo");
console.log(codigoEst);
$("#titulo").html("Modificar");
$.ajax({
    url: "http://localhost:8000/estudiantes/" + `${codigoEst}`,
    method: "get",
}).done((response) => {
    const dataJson = JSON.parse(response);
    const msg = dataJson.data;
    console.log(msg);
    $("#codigo").val(msg.codigo);
    $("#nombres").val(msg.nombres);
    $("#apellidos").val(msg.apellidos);
});

$("#guardarMod").click(function () {
    $codigo = $("#codigo").val();
    $nombres = $("#nombres").val();
    $apellidos = $("#apellidos").val();
    $.ajax({
        url: "http://localhost:8000/estudiantes" + `/${codigoEst}`,
        method: "put",
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
