angular.module('agile')

.controller('ProjectDataModal', function ($uibModalInstance, $http, data) {
	
	Data = this;
	Data.project = data;
	Data.tags = data.selectegtags;

	Data.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});