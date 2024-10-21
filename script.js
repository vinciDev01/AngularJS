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

  // Fonction pour ajouter un nouvel élément et enregistrer dans localStorage
  $scope.addData = function () {
    if ($scope.newItem.trim() !== "") {
      $scope.data.push($scope.newItem); // Ajouter l'élément à la liste
      $scope.newItem = ""; // Réinitialiser le champ
      $scope.saveData(); // Enregistrer les données
    }
  };

  // Fonction pour supprimer un élément
  $scope.removeData = function (index) {
    $scope.data.splice(index, 1); // Supprimer l'élément à l'index spécifié
    $scope.saveData(); // Enregistrer les données après la suppression
  };

  // Fonction pour effacer toutes les tâches
  $scope.clearAll = function () {
    $scope.data = []; // Réinitialiser le tableau des tâches
    $scope.saveData(); // Enregistrer les données (vide) dans localStorage
  };

  // Fonction pour enregistrer les données dans localStorage
  $scope.saveData = function () {
    localStorage.setItem("data", JSON.stringify($scope.data));
  };
});
