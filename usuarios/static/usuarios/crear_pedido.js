//Opciones entre Lente y Otro Producto.
console.log("generar_pedido.js is loaded");

$(document).ready(function() {
    $("#opcionesForm").change(function () {
        if ($(this).val() == "form") {
            //Si opcionesForm == "form", muestra los campos inputSolido, inputLiquido e inputGaseoso. Se esconde inputProducto.
            $("#inputsForm").show();
            $("#inputsOtroProducto").hide();
            $("#inputProducto").removeAttr("required");
            $("#inputProducto").removeAttr("data-error");
            $("#inputSolido").attr("required", "");
            $("#inputSolido").attr("data-error", "This field is required.");
            $("#inputLiquido").attr("required", "");
            $("#inputLiquido").attr("data-error", "This field is required.");
            $("#inputGaseoso").attr("required", "");
            $("#inputGaseoso").attr("data-error", "This field is required.");
        } else {
            //Si opcionesFormula == "Formula", muestra los campos inputSolido, inputLiquido e inputGaseoso. Se esconde inputProducto.
            $("#inputsForm").hide();
            $("#inputsOtroProducto").show();
            $("#inputSolido").removeAttr("required");
            $("#inputSolido").removeAttr("data-error");
            $("#inputLiquido").removeAttr("required");
            $("#inputLiquido").removeAttr("data-error");
            $("#inputGaseoso").removeAttr("required");
            $("#inputGaseoso").removeAttr("data-error");
            $("#inputProducto").attr("required", "");
            $("#inputProducto").attr("data-error", "This field is required.");
        }
    });
    $("#opcionesForm").trigger("change");  //Cuando cambia el estado, se ejecuta el evento change().
});

function run_1() {

    var e = document.getElementById("opcionesForm");
    var e_text = e.options[e.selectedIndex].text;

    console.log("Opción elegida:" + e.value);

    var str1 = "Resultado: ";
    var mid = " - ";
    var calculo_id = 0;

    //En caso del tipo ser "form", calcula el id en función de las opciones seleccionadas.
    if (e.value == "form") {
        console.log("ES LENTE");

        var e1 = document.getElementById("inputSolido");
        var e1_text = e1.options[e1.selectedIndex].text.toLowerCase();
        console.log("e1_text:" + e1_text);
        if (e1_text == "cerca") {
            calculo_id += 4;
        } else {
            calculo_id += 0;
        }

        var e2 = document.getElementById("inputLiquido");
        var e2_text = e2.options[e2.selectedIndex].text.toLowerCase();
        console.log("e2_text:" + e2_text);
        if (e2_text == "derecha") {
            calculo_id += 2;
        } else {
            calculo_id += 0;
        }

        var e3 = document.getElementById("inputGaseoso");
        var e3_text = e3.options[e3.selectedIndex].text.toLowerCase();
        console.log("e3_text:" + e3_text);
        if (e3_text == "sin armazón") {
            calculo_id += 1;
        } else {
            calculo_id += 0;
        }

        calculo_id += 1;

        document.getElementById("texto").innerHTML = str1.concat(
            e_text," ",e1_text,mid,e2_text,mid,e3_text,"(id = ",calculo_id,")"
        );
        document.getElementById("id_producto").value = `${calculo_id}`;
    } else {
        var id_otro = document.getElementById("inputProducto").value;
        //var tipo_otro = document.getElementById("inputProducto").selected.innerHTML;
        document.getElementById("texto").innerHTML = str1.concat(e_text, " (id= ",id_otro, ")");
        document.getElementById("id_producto").value = `${id_otro}`;
    }

    var valor = document.getElementById("texto").innerHTML;
    var valor = valor.replace("Resultado: ", "");
    var valor = valor.replace("ó", "o");
    console.log("Valor: " + valor);
}

function calculo_subtotal() {
    var cantidad = document.getElementById("inputCantidad").value;
    var precio = document.getElementById("inputPrecio").value;

    console.log("Cantidad: " + cantidad);
    console.log("Precio: " + precio);

    var subtotal = 0;

    if (cantidad > 0 && precio > 0) {
        var subtotal = (cantidad * precio).toFixed(2);
        console.log("SUBTOTAL = " + subtotal);

        document.getElementById("inputSubtotal").value = subtotal.toString();
    } else {
        document.getElementById("inputSubtotal").value = "0";
    }
}