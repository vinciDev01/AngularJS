// Déclaration du module AngularJS
var app = angular.module("myApp", []);

// Contrôleur principal
app.controller("MainController", function ($field) {
  // Charger les données depuis localStorage (si disponibles)
  $field.data = JSON.parse(localStorage.getItem("data")) || [];

  $field.newItem = "";
  $field.showData = false;

  // Fonction pour afficher / cacher les données
  $field.toggleData = function () {
    $field.showData = !$field.showData;
  };

  // Fonction pour ajouter un nouvel élément et enregistrer dans localStorage
  $field.addData = function () {
    if ($field.newItem.trim() !== "") {
      $field.data.push($field.newItem); // Ajouter l'élément à la liste
      $field.newItem = ""; // Réinitialiser le champ
      $field.saveData(); // Enregistrer les données
    }
  };

  // Fonction pour enregistrer les données dans localStorage
  $field.saveData = function () {
    localStorage.setItem("data", JSON.stringify($field.data));
  };

  // Vérification
  $field.addData = function () {
    if ($field.newItem.trim() !== "") {
      $field.data.push($field.newItem);
      console.log($field.data);
      $field.newItem = "";
      $field.saveData();
    }
  };
});
