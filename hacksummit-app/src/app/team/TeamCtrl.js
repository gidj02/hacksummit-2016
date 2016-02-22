angular.module('agile')

.controller('TeamCtrl', ['$state', '$uibModal', function ($state, $uibModal){
    Team = this;
    Team.teams = [{id:1, name: 'Gino Team'},
                  {id:2, name: 'Ben Team'},]
    Team.selectedTeam = 1;
    Team.chart = '';

    Team.animationTime = 10;
    Team.value = 3200;
    Team.maxValue = 5000;
    Team.gaugeType = 'gauge';

    Team.createPerformanceChart = function (){
		Highcharts.setOptions({
            global : {
                useUTC : false
            }
        });

		Team.chart = new Highcharts.Chart({
			chart: {
				renderTo: 'performance',
			},
       		title: {
	            text: 'Performance Chart',
	        },
	        xAxis: {
	            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
	        },
	        labels: {
	            items: [{
	                html: 'Total fruit consumption',
	                style: {
	                    left: '50px',
	                    top: '18px',
	                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
	                }
	            }]
	        },
	        series: [{
	            type: 'column',
	            name: 'Jane',
	            data: [3, 2, 1, 3, 4]
	        }, {
	            type: 'column',
	            name: 'John',
	            data: [2, 3, 5, 7, 6]
	        }, {
	            type: 'column',
	            name: 'Joe',
	            data: [4, 3, 3, 9, 0]
	        }, {
	            type: 'spline',
	            name: 'Average',
	            data: [3, 2.67, 3, 6.33, 3.33],
	            marker: {
	                lineWidth: 2,
	                lineColor: Highcharts.getOptions().colors[3],
	                fillColor: 'white'
	            }
	        }, {
	            type: 'pie',
	            name: 'Total consumption',
	            data: [{
	                name: 'Jane',
	                y: 13,
	                color: Highcharts.getOptions().colors[0] // Jane's color
	            }, {
	                name: 'John',
	                y: 23,
	                color: Highcharts.getOptions().colors[1] // John's color
	            }, {
	                name: 'Joe',
	                y: 19,
	                color: Highcharts.getOptions().colors[2] // Joe's color
	            }],
	            center: [100, 80],
	            size: 100,
	            showInLegend: false,
	            dataLabels: {
	                enabled: false
	            }
	        }]
	    });
	}

	Team.init = function () {
		Team.createPerformanceChart ();
	}

	Team.init();
}])