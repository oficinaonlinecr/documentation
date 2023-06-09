(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{181:function(e,a,o){"use strict";o.r(a);var r=o(0),n=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,a=e._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"saldo-en-facturas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saldo-en-facturas"}},[e._v("#")]),e._v(" Saldo en facturas")]),e._v(" "),a("p",[e._v("Al realizar una factura, si no se ingresa monto en el campo "),a("strong",[e._v('"Dinero recibido"')]),e._v(", automáticamente quedará saldo pendiente para llevar el control de las cuentas por cobrar a los clientes, aún cuando el documento sea de contado.")]),e._v(" "),a("p",[e._v("Estos saldos pendientes se pueden eliminar de dos maneras:")]),e._v(" "),a("ul",[a("li",[e._v("Recibo de dinero.")]),e._v(" "),a("li",[e._v("Eliminación directa.")])]),e._v(" "),a("h2",{attrs:{id:"recibo-de-dinero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recibo-de-dinero"}},[e._v("#")]),e._v(" Recibo de dinero")]),e._v(" "),a("p",[e._v("Para realizar un recibo de dinero, primero el documento debe estar "),a("strong",[e._v("aceptado")]),e._v(" por "),a("em",[e._v("Hacienda")]),e._v(', una vez el estado de Hacienda sea "aceptado", se habilitará la opción correspondiente dentro del menú del botón acción.')]),e._v(" "),a("p",[e._v("Para realizar un recibo tenemos dos formas:")]),e._v(" "),a("ul",[a("li",[e._v("Sobre el documento.")]),e._v(" "),a("li",[e._v("Sobre el cliente.")])]),e._v(" "),a("h2",{attrs:{id:"recibo-sobre-el-documento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recibo-sobre-el-documento"}},[e._v("#")]),e._v(" Recibo sobre el documento:")]),e._v(" "),a("p",[e._v("Sobre la lista de documentos, debes ir a la derecha sobre la factura con saldo mayor a 0, presionas el botón "),a("strong",[e._v("Acción")]),e._v(" y escoges la opción "),a("strong",[e._v("Abono +")]),e._v(", serás llevado al formulario para ingresar los datos del abono, este puede ser parcial o total.")]),e._v(" "),a("p",[e._v("Una vez en el formulario, ingresas la información correspondiente al pago:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Fecha del pago")])])]),e._v(" "),a("p",[e._v("En este campo ingresas la fecha efectiva en la cual se recibió el pago, por ejemplo si hoy estás haciendo un recibo de un pago recibido la semana pasada. Este campo es opcional.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Monto")])])]),e._v(" "),a("p",[e._v("En este campo ingresas el monto del abono a aplicar, debe ser mayor a 0 y menor o igual al saldo del documento.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Recibir")])])]),e._v(" "),a("p",[e._v("En este campo ingresas la cantidad entregada por el cliente para determinar si debes dar vuelto. Es opcional. En caso de ingresar un monto menor al monto a aplicar, se mostrará una advertencia.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Método de pago")])])]),e._v(" "),a("p",[e._v("En este campo seleccionas como se ha recibido el pago: Efectivo, Trasferencia, Cheque...")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Comentarios")])])]),e._v(" "),a("p",[e._v("Al presionar este botón se mostrará una ventana para ingresar información relacionada con el pago, por ejemplo el número de transferencia o cualquier información relevante para usted o su cliente.")]),e._v(" "),a("p",[e._v("Una vez ingresada y revisada la información, debes presionar el botón verde que dice "),a("strong",[e._v('"Crear recibo"')])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Recibo creado")]),e._v(" "),a("p",[e._v("Con esto has creado un recibo de dinero sobre un documento.")])]),e._v(" "),a("h2",{attrs:{id:"recibo-sobre-el-cliente"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recibo-sobre-el-cliente"}},[e._v("#")]),e._v(" Recibo sobre el cliente")]),e._v(" "),a("p",[e._v("Esta opción permite crear un recibo de dinero con varias facturas de un mismo cliente.")]),e._v(" "),a("blockquote",[a("p",[e._v("Si seleccionas el mismo documento 2 veces, se mostrará una notificación.")])]),e._v(" "),a("p",[e._v("Para realizar un recibo sobre un cliente, debes dar clic sobre el menú de la izquierda en "),a("em",[a("strong",[e._v("Mantenimiento > Clientes")])]),e._v(". Una vez en la lista de clientes, buscas el cliente al cual deseas aplicar un abono y presionas el botón verde que dice "),a("strong",[e._v('"Cobro +"')]),e._v(". Serás llevado a un formulario donde podrás escoger a cuales facturas deseas aplicarle abono.")]),e._v(" "),a("p",[e._v("Este recibo puede contener facturas en Colones y Dólares al mismo tiempo y te permite expresar el total del recibo en cualquiera de estas monedas.")]),e._v(" "),a("p",[e._v("Ingresa la información referente al pago:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Fecha del pago")])])]),e._v(" "),a("p",[e._v("En este campo ingresas la fecha efectiva en la cual se recibió el pago, por ejemplo si hoy estás haciendo un recibo de un pago recibido la semana pasada. Este campo es opcional.")]),e._v(" "),a("p",[e._v("-- "),a("em",[a("strong",[e._v("Modificar monto")])])]),e._v(" "),a("p",[e._v("Al seleccionar un documento, por defecto se aplica el monto del saldo, si desea aplicar un abono menor, seleccione esta casilla y a continuación ingrese el monto a aplicar, el monto debe ser mayor a 0 y menor o igual al saldo del documento.")]),e._v(" "),a("p",[e._v("-- "),a("strong",[e._v("Monto")])]),e._v(" "),a("p",[e._v("En este campo ingresas el monto del abono a aplicar, debe ser mayor a 0 y menor o igual al saldo del documento.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Recibir")])])]),e._v(" "),a("p",[e._v("En este campo ingresas la cantidad entregada por el cliente para determinar si debes dar vuelto. Es opcional. En caso de ingresar un monto menor al monto a aplicar, se mostrará una advertencia.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Método de pago")])])]),e._v(" "),a("p",[e._v("En este campo seleccionas como se ha recibido el pago: Efectivo, Trasferencia, Cheque ...")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Comentarios")])])]),e._v(" "),a("p",[e._v("Al presionar este botón se mostrará una ventana para ingresar información relacionada con el pago, por ejemplo el número de transferencia o cualquier información relevante para usted o su cliente.")]),e._v(" "),a("p",[e._v("Una vez ingresada y revisada la información, debes presionar el botón verde que dice "),a("strong",[e._v('"Crear recibo"')])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Recibo creado")]),e._v(" "),a("p",[e._v("Con esto has creado un recibo de dinero sobre un cliente con uno o varios documentos.")])]),e._v(" "),a("h2",{attrs:{id:"eliminacion-directa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eliminacion-directa"}},[e._v("#")]),e._v(" Eliminación directa")]),e._v(" "),a("p",[e._v("Esta opción sirve para elimar el saldo de una o varias facturas a la vez sin generar recibos de dinero.")]),e._v(" "),a("p",[e._v("Para acceder a esta opción debes ir al "),a("strong",[e._v("Dashborad")]),e._v(" o pantalla principal de la aplicación y dar clic sobre el cuadro que dice "),a("strong",[e._v('"POR COBRAR"')]),e._v(".\nSerás llevado a un listado donde se muestran las facturas pendientes de cobro ordenadas por antigüedad: "),a("strong",[e._v('"Sin vencer"')]),e._v(", "),a("strong",[e._v('"1 a 30"')]),e._v(", "),a("strong",[e._v('"31 a 60"')]),e._v(", "),a("strong",[e._v('"61 a 90"')]),e._v(" y "),a("strong",[e._v('"91 ó más"')]),e._v(".")]),e._v(" "),a("p",[e._v("Puedes usar las pestañas de antigúedad para buscar documentos.")]),e._v(" "),a("p",[e._v("Para marcar un documento debes presionar la casilla de la derecha sobre el documento en cuestión y das clic sobre el botón celeste que dice "),a("strong",[e._v('"Aplicar"')]),e._v(", se mostrará una ventana de confirmación preguntando si deseas continuar y avisándote que esta acción es irreversible.")]),e._v(" "),a("p",[e._v("Si estás de acuerdo, entonces presiona el botón que dice "),a("strong",[e._v('"Sí, quitar saldo"')])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Recibo creado")]),e._v(" "),a("p",[e._v("Con esto has quitado el saldo de una o varias facturas sin generar recibos de dinero")])])])}],!1,null,null,null);a.default=n.exports}}]);