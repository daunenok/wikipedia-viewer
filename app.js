$(document).ready(function() {
	$("#search").on("click", function(event) {
		event.preventDefault();
		var str = "https://en.wikipedia.org/w/api.php?" + 
		          "action=query&generator=search&gsrsearch=" + 
		          $("#text-search").val() + 
		          "&format=json&prop=info&" + 
		          "inprop=url|displaytitle&origin=*";
		$.get(str, showResults);
	});
});

function showResults(data) {
	var pages = data.query.pages;
	var element;
	$("#results").empty();

	for (item in pages) {
		element = "<div class='panel panel-primary'>";
		element += "<div class='panel-body'>";
		element += "<a href='" + pages[item].fullurl;
		element += "' target='_blank'>";
		element += pages[item].displaytitle;
		element += "</a></div></div>";
		$("#results").append(element);
	}
}
   
