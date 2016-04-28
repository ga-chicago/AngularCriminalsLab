angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
  var self = this;
  self.props = [];  // our collection of criminals
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    //1. $http get then...
  }

  function addCriminal(){
    //2. $http post then...
  }

  function deleteCriminal(criminal){
    //BONUS: $http delete then...
    //you'll need to access an object's ._id for this
    //or object['_id'] for MongoDB (unlike traditional SQL)
  }

}
