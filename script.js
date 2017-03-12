$(document).ready(function() {
	$.get("this_doesn't_exist.html", function(data) {
		doSomethingGood();
	}).fail(function(error) {
		console.log('Something went wrong: ' + error);
	});
});