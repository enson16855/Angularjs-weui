function dialogCtrl($scope) {
    $scope.isShowDialog1 = false; //是否显示对话框1
    $scope.isShowDialog2 = false; //是否显示对话框2

    $scope.showDialog1 = function() {
        $scope.isShowDialog1 = true;
        $scope.isShowDialog2 = false;
    }

    $scope.showDialog2 = function() {
        $scope.isShowDialog1 = false;
        $scope.isShowDialog2 = true;
    }

    $scope.btnCancel = function() {
        $scope.isShowDialog1 = false;
    }

    $scope.btnOk = function() {
        $scope.isShowDialog1 = $scope.isShowDialog2 = false;
    }
}
