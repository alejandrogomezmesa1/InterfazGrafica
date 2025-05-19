// Agregar evento "Enter" para calcular ambos precios
document.getElementById("valorProducto").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calcularPrecio();
        calcularPrecioSinRappi();
    }
});

function calcularPrecio() {
    let valorProducto = parseFloat(document.getElementById("valorProducto").value);
    
    if (isNaN(valorProducto) || valorProducto <= 0) {
        document.getElementById("resultado").innerHTML = "<p style='color: red;'>Ingrese un valor válido</p>";
        return;
    }

    // Definir porcentajes
    let comision = 0.18;
    let iva = 0.19;
    let gastoBancario = 0.014;

    // Cálculos con Rappi
    let calculoComisionProducto = valorProducto * comision;
    let calculoComisionIva = calculoComisionProducto * iva;
    let baseGastoBancario = valorProducto + calculoComisionProducto + calculoComisionIva;
    let calculoGastoBancario = baseGastoBancario * gastoBancario;
    let calculoValorFinal = Math.ceil(valorProducto + calculoComisionProducto + calculoComisionIva + calculoGastoBancario); // Redondeo hacia arriba

    // Mostrar resultados con Rappi
    document.getElementById("resultado").innerHTML = `
        <h3>📌 Detalle de cálculos con Rappi:</h3>
        <p>Valor del producto: $${valorProducto.toFixed(2)}</p>
        <p>Comisión Rappi (18%): $${calculoComisionProducto.toFixed(2)}</p>
        <p>IVA sobre comisión (19%): $${calculoComisionIva.toFixed(2)}</p>
        <p>Gasto bancario (1.4%): $${calculoGastoBancario.toFixed(2)}</p>
        <h2>💰 Precio final en Rappi (redondeado): $${calculoValorFinal}</h2>
    `;
}

function calcularPrecioSinRappi() {
    let valorProducto = parseFloat(document.getElementById("valorProducto").value);
    
    if (isNaN(valorProducto) || valorProducto <= 0) {
        document.getElementById("resultadoSinRappi").innerHTML = "<p style='color: red;'>Ingrese un valor válido</p>";
        return;
    }

    // Definir porcentajes
    let comision = 0.18;
    let iva = 0.19;
    let gastoBancario = 0.014;

    // **Cálculo inverso para obtener el precio sin Rappi**
    let precioSinRappi = valorProducto / (1 + comision + (comision * iva) + gastoBancario);
    let precioRedondeadoSinRappi = Math.ceil(precioSinRappi); // Redondeo hacia arriba

    // Mostrar resultados sin Rappi
    document.getElementById("resultadoSinRappi").innerHTML = `
        <h3>🔄 Precio estimado SIN costos de Rappi:</h3>
        <h2>💵 Precio sin comisión, IVA y gasto bancario: $${precioRedondeadoSinRappi}</h2>
    `;
}
