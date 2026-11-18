const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const resultado = document.getElementById("resultado");
const aviso = document.getElementById("mensaje-promocion");
const verPromo = document.getElementById("boton-promocion");
const calcular = document.getElementById("calcular");
const limpiar = document.getElementById("limpiar");
verPromo.addEventListener("click", function () {
aviso.textContent = "10 % de descuento desde $500 MXN.";
});

calcular.addEventListener("click",cotizar);
function cotizar() {
const precio = Number(producto.value);
const unidades = Number(cantidad.value);
if (producto.value === "") {
resultado.textContent = "Selecciona un producto.";
return;
}
if (!Number.isInteger(unidades) || unidades < 1 || unidades > 20) {
resultado.textContent = "Escribe un entero entre 1 y 20.";
return;
}
resultado.textContent = "";
const subtotal = precio * unidades;
let descuento = 0;
if (subtotal >= 500) {
descuento = subtotal * 0.10;
}
const total = subtotal - descuento;
resultado.textContent =
"Subtotal: $" + subtotal.toFixed(2) +
" | Descuento: $" + descuento.toFixed(2) +
" | Total: $" + total.toFixed(2) + " MXN";
}

limpiar.addEventListener("click", function () {
producto.value = "";
cantidad.value = "";
resultado.textContent = "";
aviso.textContent = "";
producto.focus();
});
const productosCompra = [
{ precio: 38, cantidadId: "cantidad-1", subtotalId: "subtotal-1" },
{ precio: 60, cantidadId: "cantidad-2", subtotalId: "subtotal-2" },
{ precio: 90, cantidadId: "cantidad-3", subtotalId: "subtotal-3" },
{ precio: 100, cantidadId: "cantidad-4", subtotalId: "subtotal-4" },
{ precio: 230, cantidadId: "cantidad-5", subtotalId: "subtotal-5" },
{ precio: 250, cantidadId: "cantidad-6", subtotalId: "subtotal-6" }
];


function calcularCompra() {
let total = 0;
for (const producto of productosCompra) {
const campo = document.getElementById(producto.cantidadId);
const cantidad = Number(campo.value);
if (campo.value.trim() === "" || !Number.isInteger(cantidad) || cantidad < 0) {
alert("Escribe cantidades enteras iguales o mayores que cero.");
campo.focus();
return null;
}
const subtotal = producto.precio * cantidad;
document.getElementById(producto.subtotalId).textContent = subtotal.toFixed(2);
total += subtotal;
}
return total;
}
document.getElementById("calcular-compra").addEventListener("click", () => {
const importe = calcularCompra();
if (importe === null) return;
let descuento = 0;
if (importe >= 1000) {
descuento = importe * 0.10;
} else {
descuento = 0;
}
const totalPagar = importe - descuento;
document.getElementById("importe-compra").textContent = importe.toFixed(2);
document.getElementById("descuento-compra").textContent = descuento.toFixed(2);
document.getElementById("total-compra").textContent = totalPagar.toFixed(2);
});

document.getElementById("calcular-compra").addEventListener("click", () => {
const importe = calcularCompra();
if (importe === null) return;
document.getElementById("importe-compra").textContent = importe.toFixed(2);
});