
angular.module('app')

.factory("InteraccionService", ['$soap',function($soap){
    var base_url = "http://localhost:8080/Registro/RegistroWS?wsdl";

    return {
        InsertarPeticion: function(usuario, nombre, telefono1, canal, tipo, registro_bitacora){
            return $soap.post(base_url,"InsertarPeticion", {Nombre: nombre, Telefono1: telefono1, Canal: canal, Tipo: tipo, UsuarioBitacora: usuario, RegistroBitacora: registro_bitacora});
        }
    }
}])
