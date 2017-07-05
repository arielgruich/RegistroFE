(function(){

  angular
    .module('app', ['angularSoap'])
    .controller('InteraccionController', [
        '$mdDialog', '$interval',
      InteraccionController
    ]);

  function InteraccionController($mdDialog, $interval) {
    var vm = this;
    vm.user = {
      usuario: ["Eva", "Alisson", "Silvia"],
      nombre: '',
      telefono1: '' ,
      canal: '' ,
      tipo: '' ,
      registro_bitacora: '127.0.0.1' ,
    };
    vm.buttonEnabled = false;
    vm.showProgress = false;
    vm.reloadServer = 'Guardando';
    vm.performProgress = performProgress;
    vm.determinateValue = 10;
    function performProgress() {
        vm.showProgress = true;
        interval = $interval(function() {
            vm.determinateValue += 1;
            if (vm.determinateValue > 50) {
                vm.determinateValue = 10;
                vm.showProgress = false;
                showAlert();
                $interval.cancel(interval)
            }
        }, 50, 0, true);
    }

    function registro("PeticionService", ['$soap',function($soap)
      var base_url = "http://localhost:8080/Registro/RegistroWS?wsdl";

      return {
          InsertarPeticion: function(Nombre, Telefono1, Canal, Tipo, Usuario, RegistroBitacora){
            return $soap.post(base_url,"InsertarPeticion", {Nombre: nombre,
                                                      Telefono1: telefono1,
                                                      Canal: canal,
                                                      Tipo: tipo,
                                                      RegistroBitacora: registro_bitacora});
          }
      }
    }])



    function showAlert() {
        alert = $mdDialog.alert({
            title: 'Guardado!',
            content: vm.reloadServer + " Interaccion Registrada",
            ok: 'Cerrar'
        });
        $mdDialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    }

  }

})();
