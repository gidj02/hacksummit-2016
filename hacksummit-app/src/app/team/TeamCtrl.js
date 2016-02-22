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
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		renderTo:'performance',
	    },
	    title: {
		text: 'Sprint<br>performance',
		align: 'center',
		verticalAlign: 'middle',
		y: 40
	    },
	    tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    plotOptions: {
		pie: {
		    dataLabels: {
			enabled: true,
			distance: -50,
			style: {
			    fontWeight: 'bold',
			    color: 'white',
			    textShadow: '0px 1px 2px black'
			}
		    },
		    startAngle: -90,
		    endAngle: 90,
		    center: ['50%', '75%']
		}
	    },
	    series: [{
		type: 'pie',
		name: 'Sprint performance',
		innerSize: '50%',
		data: [
		    ['Backlog',   10.38],
		    ['In-progress',       56.33],
		    ['To-do', 29.71],
		    {
			name: 'Proprietary or Undetectable',
			y: 0.2,
			dataLabels: {
			    enabled: false
			}
		    }
		]
	    }]
	});
    }


	Team.init = function () {
		Team.createPerformanceChart ();
	}

	Team.init();
}])
