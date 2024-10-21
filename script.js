// Déclaration du module AngularJS
var app = angular.module("myApp", []);

// Contrôleur principal
app.controller("MainController", function ($scope) {
  // Charger les données depuis localStorage (si disponibles)
  $scope.data = JSON.parse(localStorage.getItem("data")) || [];
  $scope.newItem = "";
  $scope.showData = false;

  // Fonction pour afficher / cacher les données
  $scope.toggleData = function () {
    $scope.showData = !$scope.showData;
  };

  // Fonction pour ajouter une todo et enregistrer dans localStorage
  $scope.addData = function () {
    if ($scope.newItem.trim() !== "") {
      $scope.data.push($scope.newItem);
      $scope.newItem = ""; 
      $scope.saveData();
    }
  };

  // Fonction pour supprimer une todo
  $scope.removeData = function (index) {
    $scope.data.splice(index, 1); 
    $scope.saveData(); // Enregistrer les données après la suppression
  };

  // Fonction pour effacer toutes les todo
  $scope.clearAll = function () {
    $scope.data = [];
    $scope.saveData();
  };

  // Fonction pour enregistrer les données dans localStorage
  $scope.saveData = function () {
    localStorage.setItem("data", JSON.stringify($scope.data));
  };
});
