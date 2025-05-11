
const Messages404 = [
	{
		"main": "This is not the page you are looking for...",
		"return": "You can go about your business. Move along."
	},
	{
		"main": "You have left the simulation. I think that is a bug...",
		"return": "Home"
	},
	{
		"main": "Did you change realities? This page doesn't exist...",
		"return": "Return to your parallel universe"
	},
	{
		"main": "Page Not Found. No geckos here...",
		"return": "Let's find the geckos then"
	},
	{
		"main": "Page Not Found. Maybe the geckos took it.",
		"return": "But where to?"
	}
];

$(window).on("load", function() {
    var message = Messages404[Math.floor(Math.random() * Messages404.length)];
    console.log(message);
    $("#main404").html(message.main);
    $("#return404").html(message.return);
});