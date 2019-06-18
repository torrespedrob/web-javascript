function validar() { 
   var nombre = document.getElementById('nombre').value;
   var apellidos = document.getElementById('apellidos').value;
   var email = document.getElementById('email').value;
   var provincia = document.getElementById('provincia').value;
   var fecha=document.getElementById("DPC_fechaIngreso_DD/MM/YYYY").value;
   var valido = true;

   //Nombre
   if (nombre.length == 0 || parseInt(nombre)) {
      valido = false;
      document.getElementById('nombreHelp').style.visibility = "visible";
   }
   //Apellido
   if (apellidos.length == 0 || parseInt(apellidos)) {
      valido = false;
      document.getElementById('apellidosHelp').style.visibility = "visible";
   }
   //Email
   if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))) {
      valido = false;
      document.getElementById('emailHelp').style.visibility = "visible";
   }
   //Provincia
    if (provincia == 0) {
       valido = false;
       document.getElementById('provinciaHelp').style.visibility = "visible";
    }
   //Check
   if (!aceptar.checked) {
      valido = false;
      document.getElementById('aceptarHelp').style.visibility = "visible";
   }
   //Fecha
   if (fecha==""){
      document.getElementById("fechaIngresoHelp").style.visibility="visible";
      valido=false;
  }

   return valido;
}

function quitarError(campo) {
   //Quitar el mensaje de error
   document.getElementById(campo).style.visibility = "hidden";
}

function limpiarResultado() {
   //Refrescar al enviar
   document.getElementById('resultado').innerHTML = "";
}