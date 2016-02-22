angular.module('agile')

.controller('HomeCtrl', ['$state', function ($state){
	Home = this;

	this.$state = $state;
	Home.chart = [];

	Home.createPerformanceChart = function (){
		Highcharts.setOptions({
            global : {
                useUTC : false
            }
        });

		Home.chart = new Highcharts.Chart({
	        chart: {
	            type: 'column',
				renderTo: 'performance'
	        },
	        title: {
	            text: 'Over-all Performance'
	        },
	        xAxis: {
	            categories: ['Deadpool Project', '#SELFIE', 'Iska', 'Illuminati Project', 'Burnik']
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Burndown Chart'
	            },
	            stackLabels: {
	                enabled: true,
	                style: {
	                    fontWeight: 'bold',
	                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	                }
	            }
	        },
	        legend: {
	            align: 'right',
	            x: -30,
	            verticalAlign: 'top',
	            y: 25,
	            floating: true,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	            borderColor: '#CCC',
	            borderWidth: 1,
	            shadow: false
	        },
	        tooltip: {
	            headerFormat: '<b>{point.x}</b><br/>',
	        },
	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: false,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
	                    style: {
	                        textShadow: '0 0 3px black'
	                    }
	                }
	            }
	        },
	        series: [{
	            name: 'Done',
	            data: [5, 3, 4, 7, 2]
	        }, {
	            name: 'In Progress',
	            data: [2, 2, 3, 2, 1]
	        }, {
	            name: 'To do',
	            data: [3, 4, 4, 2, 5]
	        },{
	            type: 'spline',
	            name: 'Planned Hours',
	            data: [12, 11, 13, 13, 10],
	            color: '#40d47e',
	            marker: {
	                lineWidth: 2,
	                lineColor: '#40d47e',
	                fillColor: '#40d47e'
	            }
	        },{
	            type: 'spline',
	            name: 'Velocity',
	            data: [10, 9, 11, 11, 8],
	            color: 'orange',
	            marker: {
	                lineWidth: 2,
	                lineColor: 'orange',
	                fillColor: 'orange'
	            }
	        }]
	    });
	}

   	Home.init = function () {
   		Home.createPerformanceChart ();
   	}

   	Home.init ();

}])