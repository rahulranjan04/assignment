/**
 * 
 */

app.directive('fileModel', function ($parse) {
    return {
        restrict: 'A', // the directive can be used as an attribute only

        /*
		 * link is a function that defines functionality of directive scope:
		 * scope associated with the element element: element on which this
		 * directive used attrs: key value pair of element attributes
		 */
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function() {
               scope.$apply(function() {
                  modelSetter(scope, element[0].files[0]);
               });
            });
         }
    };
});

app.directive('confirmClick', function ($window) {
	  var i = 0;
	  return {
	    restrict: 'A',
	    priority:  1,
	    compile: function (tElem, tAttrs) {
	      var fn = '$$confirmClick' + i++,
	          _ngClick = tAttrs.ngClick;
	      tAttrs.ngClick = fn + '($event)';

	      return function (scope, elem, attrs) {
	        var confirmMsg = attrs.confirmClick || 'Are you sure?';

	        scope[fn] = function (event) {
	          if($window.confirm(confirmMsg)) {
	            scope.$eval(_ngClick, {$event: event});
	          }
	        };
	      };
	    }
	  };
	});