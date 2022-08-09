# Primeros pasos

Antes de poder usar tu cuenta para enviar y recibir facturas es necesario que configures la llave criptográfica y la contraseña en producción. En esta guía te llevaremos paso a paso para configurar tu cuenta.

## Llave criptográfica y Usuario y contraseña de producción

### Llave criptográfica

La llave criptográfica es un certificado emitido por el ministerio de Hacienda y se usa como medida de seguridad para garantizar la autoría de los documentos electrónicos, se genera en el portal del [ATV](https://atv.hacienda.go.cr/ATV/Login.aspx). Normalmente este certificado lo genera el contador o quien tenga acceso al portal del [ATV](https://atv.hacienda.go.cr/ATV/Login.aspx).

Una vez que tengas ese archivo ".p12" debes ir sobre la esquina superior derecha, dar clic sobre la foto y luego en empresa, una vez en esta parte, das clic sobre el botón verde "Conectividad" y se mostrará una ventana y escoges la pestaña "Llave criptográfica", es esta ventana hay dos campos, en el primero ingresas el pin de 4 dígitos y el en segundo cargar el archivo de la Llave criptográfica.
una vez cargados presionas el botón azul que dice "Actualizar".

### Usuario y contraseña en producción

El usuario y contraseña en producción se usa para que nuestro sistema se conecte con el ministerio de Hacienda y enviar los documentos firmados bajo el nombre del usuario, tiene la apariencia de un correo electrónico. Ejemplo: **"cpj-3-101-XXXXXX@prod.comprobanteselectronicos.go.cr"** que empieza por el tipo de cédula + más la cédula del usuario. Esta contraseña se genera en el portal del [ATV](https://atv.hacienda.go.cr/ATV/Login.aspx).

Una vez que tengas el usuario y la contraseña en producción, debes ir sobre la esquina superior derecha, dar clic sobre la foto y luego en empresa, una vez en esta parte, das clic sobre el botón verde "Conectividad" y se mostrará una ventana con la opción **"Usuario ATV"**, es esta ventana hay dos campos, en el primero ingresas el usuario y el en segundo la contraseña. Puedes probar que el usuario y contraseña conecten de manera correcta, presionando el ícono en forma de check que aparece a la izquierda del campo **"Usuario ATV"**. Si se logra conectar, verás el texto verde "Usuario y Contraseña Correctos". Una vez cargados presionas el botón azul que dice "Actualizar".



Ahora ya tienes tu cuenta lista para continuar con los siguientes pasos!!!


## Crear un producto
Para crear un cliente debes ir al menú lateral izquierdo, buscar la opción mantenimiento luego dar clic en la opción productos.
Presionas el botón "Nuevo +" y se mostrará una ventana con dos secciones para ingresar la información de tu producto. en la parte de la izquierda se ingresa la información relativa al producto o servicio y en la parte derecha se muestra una lista de códigos [Cabys](https://www.bccr.fi.cr/indicadores-economicos/cabys/Catalogo-de-bienes-servicios.xlsx) ordenado por tarifa, para relacionar con el producto.

- **Código**

Ingresa en este campo el código de tu producto, puede ser cualquier cosa. ***Ejemplo CALC54544***

- **Tipo Código**

En este campo normalmente se deja la opción por defecto, pero puedes escoger la que más se adapte a tu producto.

- **Nombre**

En este campo se ingresa el nombre de tu producto.

- **Costo y margen**

Estos campos se usan para productos que se compran y se venden, ejemplo: compras una calculadora para venderla, entonces en costo ingresas el precio de costo de esa calculadora y en margen ingresas el margen de ganancia con el que vas a trabajar. También puede dejarlos en 0 para ingresar el precio al crear la factura. Lo puedes editar después.

- **Código Cabys**

En este campo se ingresa el código Cabys de referencia del producto, se debe buscar en la tabla de la derecha de acuerdo a la tarifa a la que esté afecto el producto. Por defecto está seleccionada la pestaña **"Exe"**, que lista los códigos Cabys para productos exentos. Seleccione la pestaña de la tarifa que desees e ingresa palabras claves para buscar un código que se relacione con tu producto o servicio. Una vez encontrado solo debes tocar el código para que este se agregue a tu producto y se configure el impuesto correspondiente. Para el ejemplo de la calculadora, el código Cabys correspondiente es ***"4513000000000"*** sobre la pestaña **"Grav 13%"**.

> Una vez que hagas esta parte los siguientes dos campos estarán completados, si necesitas cambiar la tarifa del impuesto lo puedes hacer.

- **Código Iva**

En esta opción escoges el tipo de impuesto de tu producto, normalmente se escoge *Impuesto al valor Agregado*.

- **Código Tarifa IVA**

Es esta opción se escoge la tarifa del impuesto al que está afecto tu producto.

- **Categoría**

Este campo se puede dejar vacío, sirve para categorizar los productos para facilitar la búsqueda por grupos.

- **Controlar inventario**

Si tienes el inventario activado, verás esta opción. Sirve para indicar si al producto se le debe llevar control del stock.

- **Decimales**

Esta opción sirve para definir la cantidad de decimales que tomará este producto. *Ejemplo con tres decimales 2,242.123*

- **P.V (- iv)** y **P.V (+ ivi)**

Estos dos campos son auto calculados si ingresó valores en ***Costo*** y ***Margen***. Definen el precio sin impuesto y precio con impuesto.

- **Tipo de producto**

Define si el producto estará disponible para facturas de venta o facturas de compra. Por defecto se selecciona **"Venta"** ya que son los productos que se venderán.


>Ya casi tienes tu producto listo.

Para finalizar solo debes presionar el botón **Guardar**

Si regresas a la lista de productos, verás tu primer producto disponible. :100:

Si deseas editarlo, solo debes dar clic sobre el nombre del producto.


## Crear un cliente

Para crear un cliente debes ir al menú lateral izquierdo, buscar la opción mantenimiento
