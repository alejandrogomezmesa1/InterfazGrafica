###
# Este algoritmo esta diseñado para calcular el precio final de mis producto a la hora de subirlos a la plataforma de Rappi
# teniendo en cuenta los siguientes valores: iva = 0.19 comision = 0.18 GastoBancario = 0.1,4 y tomando como referencia el valor
# del producto
# ¿Cual es el valor final del producto a la hora de sumarle los impuestos?
# Primero se calcula el valor del producto mas la comision
# Segundo se calcula el resultado de valor producto y comision por solo por el valor del iva
# Tercero se calcula el valor del producto por el gasto bancario
# Cuarto se suman los valores para obtener el precio final que seria gastobancario, comisioniva, valorproducto
# ###

 

def calculoprecio(): 
    
        # Solicitar valor del producto
    ValorProducto = int(input("Ingrese el precio del producto que desea incluir en rappi: "))
    
        # Definir porcentajes
    Comision = 0.18
    Iva = 0.19
    GastoBancario = 0.014  
    
    
            # Calcular comisión de Rappi
    calculo_comision_producto = ValorProducto * Comision 
    
            # Calcular IVA sobre la comisión (no sobre el producto)
    calculo_comision_iva = calculo_comision_producto * Iva
    
            # Calcular gasto bancario
    base_gastobancario_ = calculo_comision_iva  + ValorProducto + calculo_comision_producto  
    calculo_gasto_bancario = base_gastobancario_ * GastoBancario
    
            # Calcular precio final (suma de todos los componentes)
    calculo_valor_final = calculo_gasto_bancario + calculo_comision_iva + ValorProducto + calculo_comision_producto
    
    
    return (f"""
    -------------------------------
    📌 **Detalle de cálculos:**
    - Valor producto: ${ValorProducto:.2f}
    - Comisión Rappi (18%): ${calculo_comision_producto:.2f}
    - IVA sobre comisión (19%): ${calculo_comision_iva:.2f}
    - Gasto bancario (1.4% sobre producto + comisión + IVA): ${calculo_gasto_bancario:.2f}
    -------------------------------
    💰 **PRECIO FINAL EN RAPPI: ${calculo_valor_final:,.3f}**
    """)

    
print(calculoprecio())


