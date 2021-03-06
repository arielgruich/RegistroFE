(function(){
  angular
    .module('app')
    .controller('InteraccionController', [
        '$mdDialog', '$interval','InteraccionService', InteraccionController
    ]);

  function InteraccionController($mdDialog, $interval, InteraccionService) {
    var vm = this;

    console.log("Tortu");

    vm.user = {
      usuario: ["Eva", "Alisson", "Silvia"],
      nombre: '',
      telefono1: '',
      canal: '',
      tipo: '',
      registro_bitacora: '127.0.0.1',
    };

    InteraccionService.InsertarPeticion(vm.user.nombre, vm.user.telefono1, vm.user.canal, vm.user.tipo,
     vm.user.tipo, vm.user.canal).then(function(respose){
        vm.respose = respose;
    });

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

    function showAlert() {
        alert = $mdDialog.alert({
            title: 'Guardado!',
            content: vm.reloadServer + " Interaccion Registrada.",
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
