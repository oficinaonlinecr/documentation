# Inventario

El módulo de inventario permite llevar control de las entradas y salidas de productos. En otras palabras controlar el stock disponible para la venta.

Antes de usar este módulo debes tenerlo activo, mediante la compra de un plan anual o mensual.

## Comprar plan de Inventario

Para comprar el plan de inventario, se puede hacer en línea mediante Paypal o bien mediante depósito en nuestras cuentas bancarias.

### Pago mediante Paypal

Para pagar mediante Paypal, debes ir al menú de la izquierda y dar clic sobre **Planes de inventario**, luego escoges el plan que más se adapte a tus necesidades, la modalidad de pago y presionas el botón verde que dice **Paypal**.

Serás redirigido al sitio oficial de [Paypal](https://www.paypal.com) donde debe ingresar con tu cuenta de Paypal y realizar el pago.

Una vez realizado el pago, serás redirigido a nuestro sitio y se aplicará la configuración del plan a tu cuenta.


## Configurar los productos

Con el plan ya activado, debes ir al menú de la izquierda y dar clic sobre **Mantenimiento** y luego en productos.
Una vez el la lista de productos, notarás que a la derecha de cada registro se habilita una casilla bajo el título ***Inventario***.
> Esta casilla solo aparece cuando el producto tiene la **Unidad de medida** diferente de servicios.

Debes marcar la casilla sobre los productos que desees llevar el control del stock.

## Agregar stock inicial

Para agregar el stock inicial a los productos, debes ir al menú de la izquierda y dar clic sobre **Inventario**.
Una vez dentro, das clic sobre la pestaña **"Stock"**.
En esta lista verás todos los productos a los cuales les activaste la casilla en el paso anterior. Notarás que hay varios campos: **"Inicial"**, **"Existencias"**, **"Mínimo"**, **"Máximo"** y **"Ubicación"**

- **Inicial:**

Cuando el producto no tiene ningún movimiento y *Existencias* en 0, este campo será editable. Sirve para indicar la cantidad inicial del stock para esta línea.
> Una vez ingresado un valor, ya no ser editable.

- **Existencias:**

En este campo se muestran la cantidad de producto disponible para la venta, este campo se ve actualizando cada vez que realizas una venta o cuando ingresas mercadería. También se puede modificar por medio de ajustes.


- **Mínimo:**

Define la cantidad mínima de productos que deseas tener disponibles para la venta. Será usado para notificarte cuando un producto tiene menos del *mínimo* para que compres más. Para actualizarlo presione el ícono de la derecha.

- **Máximo:**

Define la cantidad máxima de productos que deseas tener disponibles para la venta. Será usado para notificarte cuando un producto tiene más del *máximo* para que **no** compres más. Para actualizarlo presione el ícono de la derecha.

- **Ubicación:**

Define la ubicación física del producto en la tienda, su objetivo es ayudarte a encontrar el producto para ser entregado al cliente. Para actualizarlo presione el ícono de la derecha.
>Ejemplo: Tarima 2, o sección 3B.

::::tip
 Ya has agregado **Stock** inicial a tus productos.
::::

## Ajuste de stock

> Solo el usuario con permisos puede realizar estas acciones.

El ajuste se usa, como su nombre lo indica, para ajustar la cantidad disponible, hacia arriba o abajo. Hay circunstancias donde se requiere ajustar la cantidad sin realizar una venta o ingresar nueva mercadería, por ejemplo cuando se daña la mercadería por una inundación, incendio o por un robo. O también cuando se recibe mercadería por un premio o regalo de algún particular. Otro caso es agregar mercadería sin usar la factura *Xml* de compra.

Para realizar un ajuste hay dos formas de hacerlo: **único producto** o con **varios productos**.

1 **Único producto**

Para realizar un ajuste sobre un único producto, debes ir a la pestaña **"Stock"** y dar clic sobre las existencias de la línea, serás enviado al formulario de crear ajustes con el producto seleccionado. En el campo **"Stock real"** ingresas la cantidad de unidades que tienes en este momento en la tienda, escribes un comentario y presionas el botón **"Crear ajuste"**

2 **Varios productos**

Para realizar un ajuste de varios productos debes dar clic sobre la pestaña **"Ajustes"**, luego das clic sobre el botón **"Nuevo ajuste +"**, serás llevado al formulario para crear un ajuste con varios productos. Ahora seleccione los productos a los cuales deseas ajustar el stock. Ingresa la cantidad de **"Stock real"** que tienes en este momento en la tienda para cada línea, ingresa un comentario y por último presionas el botón **"Crear ajuste"**


En ambos casos al regresar a la pestaña **Stock** verás los cambios aplicados.

> El comentario por línea es opcional

::::tip
 Con estos pasos has ajustado el stock de los productos
::::

## Cargar stock desde factura recibida XML

Para cargar el stock desde facturas de compra recibidas en el sistema, debe ir a **Documentos recibidos** > **Proveedores**. Sobre cada uno de los documentos recibidos, a la derecha hay una casilla bajo el título **Inventario**.

Marque la casilla para los documentos que deseas agregar al módulo inventario. Una vez marcados estos aparecerán en dicho módulo bajo la pestaña **"Pendientes"**.

Ahora dirígete al módulo inventario da clic sobre pa pestaña **"Pendientes"** y escoga la categoría correspondiente *Facturas, Ticketes, Notas de crédito o Notas de débito*.

Ahora toca el número del documento para ver un listado con los productos provenientes del documento y asociarlos con los tuyos.

En esta pantalla verás varios campos: **"Enviar a stock",	"Código",	"Nombre",	"Costo Unit",	"Impuesto",	"Cantidad",	"Asociar con",	"Actualizar?",	"Margen (%)"**

Vamos a ver para que son.

- **"Enviar a stock"**

Este campo sirve para seleccionar de esa lista de productos cuales quiero procesar, por defecto está seleccionada. Si hay una línea que no es para el inventario, entonces desmárquela.
> Ejemplo: Compró algo para uso personal o del negocio al mismo proveedor, como productos de limpieza.

- **"Código"**

Este campo contiene el código del producto que viene en el xml del proveedor.

- **"Nombre"**

Este campo contiene el nombre del producto que viene en el xml del proveedor.

- **"Costo Unit"**

Este campo contiene el costo del producto que viene en el xml del proveedor, sin inpuesto.

- **"Impuesto"**

Este campo contiene la tarifa de impuesto del producto que viene en el xml del proveedor.

- **"Cantidad"**

Este campo contiene la cantidad productos que vienen por cada línea en el xml del proveedor.
> Se puede variar la cantidad a ingresar, si por ejemplo compraste 5 unidades pero te vas a dejar 1 para uso personal. entonces la cambias a 4.

- **"Asociar con"**

Indica con cual de tus productos vas a asociar esa línea para poder agregarle la cantidad de stock.

- **"Actualizar?"**

Si el precio del producto del xml es diferente del precio de tu producto asociado, entonces puedes indicar si deseas actualizar el precio de tu producto.

- **"Crear producto"** *Casilla*

Esta casilla se usa por si el producto del xml no tiene un candidato para asociar. El producto es nuevo y no existe en tu base de datos.
Al marcarla se creará un nuevo producto en tu base de datos con los datos procedcentes del xml del proveedor.
> Luego lo puedes editar.

- **"Margen (%)"**
Si has marcado ***Actualizar***, entonces este campo estará habilitado para actualizar el precio de venta con el nuevo margen.

Una vez explicado para que sirve cada campo, solo falta que asocies cada línea del documento con tus productos y presiones el botón azul **"Enviar a stock"**

> Los mismos pasos aplican para los demás documetos: **Ticketes, Notas de crédito y Notas de débito**

> En el caso de las **Notas de crédito**, cuando se aplican, estas descontarán la cantidad de existencias.

::::tip
 Con esto has agregado productos a tu stock por medio de un documento de compra
::::
