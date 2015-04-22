'use strict';

/* Filters */

//step 9
angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    }
});