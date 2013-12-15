$(document).ready(function(){
	var business = ["sin",
							"nis",
							"sin",
							"isn",
							"ins"];

			var confusing = ["fusing",
							"fsuing",
							"sfuing",
							"ufsing",
							"usfing",
							"sufing"];

			var confusion = ["fusion",
							"fsuion",
							"fiuson",
							"fuison",
							"fusoin",
							"sufion"];
			var base = "con"; //l'origine du monde

	setInterval(function()
	        {
	            if($("#NW, #NE, #SW, #SE").css("visibility") == "visible")
	            {
	                $("#NW, #NE, #SW, #SE").css('visibility','hidden');
	            }
	            else
	            {
	                $("#NW, #NE, #SW, #SE").css('visibility','visible');
	            }
	        }, 20);

	setInterval(function(){
		$("#word1").text("confusing bu"+business[Math.floor(Math.random()*business.length)]+"ess with ");
	},Math.random()*5000+Math.random()*5000);

	setInterval(function(){
		$("#word2").text(base+confusion[Math.floor(Math.random()*confusion.length)]);
	},Math.random()*5000+Math.random()*5000);
			
	setInterval(function(){
		$('title').text(base+confusing[Math.floor(Math.random()*business.length)]+" bu"+business[Math.floor(Math.random()*business.length)]+"ess")
	},Math.random()*5000+Math.random()*5000);
})
