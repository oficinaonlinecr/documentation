# Saldo en facturas

Al realizar una factura, si no se ingresa monto en el campo **"Dinero recibido"**, automáticamente quedará saldo pendiente para llevar el control de las cuentas por cobrar a los clientes, aún cuando el documento sea de contado.

Estos saldos pendientes se pueden eliminar de dos maneras:

- Recibo de dinero.
- Eliminación directa.

## Recibo de dinero

Para realizar un recibo de dinero, primero el documento debe estar **aceptado** por *Hacienda*, una vez el estado de Hacienda sea "aceptado", se habilitará la opción correspondiente dentro del menú del botón acción.

Para realizar un recibo tenemos dos formas:

- Sobre el documento.
- Sobre el cliente.

## Recibo sobre el documento:

Sobre la lista de documentos, debes ir a la derecha sobre la factura con saldo mayor a 0, presionas el botón **Acción** y escojes la opción **Abono +**, serás llevado al formulario para ingresar los datos del abono, este puede ser parcial o total.

Una vez en el formulario, ingresas la informacion correspondiente al pago:

- **Fecha del pago**

En este campo ingresas la fecha efectiva en la cual se recibió el pago, por ejemplo si hoy estás haciendo un recibo de un pago recibido la semana pasada. Este campo es opcional.

- **Monto**

En este campo ingresas el monto del abono a aplicar, debe ser mayor a 0 y menor o igual al saldo del documento.

- **Recibir**

En este campo ingresas la cantidad entregada por el cliente para determinar si debes dar vuelto. Es opcional. En caso de ingresar un monto menor al monto a aplicar, se mostrará una advertencia.

- **Método de pago**

En este campo seleccionas como se ha recibido el pago: Efectivo, Trasferencia, Cheque...

- **Comentarios**

Al presionar este botón se mostrará una ventana para ingresar información relacionada con el pago, por ejemplo el número de transferencia o cualquier información relevante para usted o su cliente.


Una vez ingresada y revisada la información, debes presionar el botón verde que dice **"Crear recibo"**


::::tip
Con esto has creado un recibo de dinero sobre un documento.
::::

## Recibo sobre el cliente

Esta opción permite crear un recibo de dinero con varias facturas de un mismo cliente.

> Si seleccionas el mismo documento 2 veces, se mostrará una notificación.

Para realizar un recibo sobre un cliente, debes dar clic sobre el menú de la izquierda en ***Mantenimiento > Clientes***. Una vez en la lista de clientes, buscas el cliente al cual deseas aplicar un abono y presionas el botón verde que dice **"Cobro +"**. Serás llevado a un formulario donde podrás escoger a cuales facturas deseas aplicarle abono.

Este recibo puede contener facturas en Colones y Dólares al mismo tiempo y te permite expresar el total del recibo en cualquiera de estas monedas.

Ingresa la información referente al pago:

- **Fecha del pago**

En este campo ingresas la fecha efectiva en la cual se recibió el pago, por ejemplo si hoy estás haciendo un recibo de un pago recibido la semana pasada. Este campo es opcional.

-- ***Modificar monto***
 
Al seleccionar un documento, por defecto se aplica el monto del saldo, si desear aplicar un abono menor, seleccione esta casilla y a continuación ingrese el monto a aplicar, el monto debe ser mayor a 0 y menor o igual al saldo del documento.

-- **Monto**

En este campo ingresas el monto del abono a aplicar, debe ser mayor a 0 y menor o igual al saldo del documento.

- **Recibir**

En este campo ingresas la cantidad entregada por el cliente para determinar si debes dar vuelto. Es opcional. En caso de ingresar un monto menor al monto a aplicar, se mostrará una advertencia.

- **Método de pago**

En este campo seleccionas como se ha recibido el pago: Efectivo, Trasferencia, Cheque ...

- **Comentarios**

Al presionar este botón se mostrará una ventana para ingresar información relacionada con el pago, por ejemplo el número de transferencia o cualquier información relevante para usted o su cliente.


Una vez ingresada y revisada la información, debes presionar el botón verde que dice **"Crear recibo"**

::::tip
Con esto has creado un recibo de dinero sobre un cliente con uno o varios documentos.
::::

## Eliminación directa

Esta opción sirve para elimar el saldo de una o varias facturas a la vez sin generar recibos de dinero.

Para acceder a esta opción debes ir al **Dashborad** o pantalla principal de la aplicación y dar clic sobre el cuadro que dice **"POR COBRAR"**.
Serás llevado a un listado donde se muestran las facturas pendientes de cobro ordenadas por antigüedad: **"Sin vencer"**, **"1 a 30"**, **"31 a 60"**, **"61 a 90"** y **"91 ó más"**.

Puedes usar las pestañas de antigúedad para buscar documentos.

Para marcar un documento debes presionar la casilla de la derecha sobre el documento en cuestión y das clic sobre el botón celeste que dice **"Aplicar"**, se mostrará una ventana de confirmación preguntando si deseas continuar y avisándote que esta acción es irreversible.

Si estás de acuerdo, entonces presiona el boton que dice **"Sí, quitar saldo"**


::::tip
Con esto has quitado el saldo de una o varias facturas sin generar recibos de dinero
::::