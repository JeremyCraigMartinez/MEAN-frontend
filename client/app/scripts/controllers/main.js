'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	  $scope.dataset = [{
        data: [[1285614437984, 7], [1285614537984, 50], [1285614637984, 17]],
        color: "#6699FF"
    }];
	  $scope.options = {
        xaxis: { mode: 'time' },
        yaxis: { min: 0, max: 100 },
        series: { sparkline: true }
    }

    $scope.placeholder = $('#sparkline-ph');

    
		Morris.Line({
		  element: 'line-example',
		  data: [
		    { y: '2006', a: 100, b: 90 },
		    { y: '2007', a: 75,  b: 65 },
		    { y: '2008', a: 50,  b: 40 },
		    { y: '2009', a: 75,  b: 65 },
		    { y: '2010', a: 50,  b: 40 },
		    { y: '2011', a: 75,  b: 65 },
		    { y: '2012', a: 100, b: 90 }
		  ],
		  xkey: 'y',
		  ykeys: ['a', 'b'],
		  labels: ['Series A', 'Series B']
		});

  });
