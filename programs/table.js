var map = ([
		{
			"homeTeam":"Lawrence Library",
			"awayTeam":"LUGip",
			"markerImage":"images/red.png",
			"information": "Linux users group meets second Wednesday of each month.",
			"fixture":"Wednesday 7pm",
			"capacity":"",
			"previousScore":""
		},
		{
			"homeTeam":"Hamilton Library",
			"awayTeam":"LUGip HW SIG",
			"markerImage":"images/white.png",
			"information": "Linux users can meet the first Tuesday of the month to work out harward and configuration issues.",
			"fixture":"Tuesday 7pm",
			"capacity":"",
			"tv":""
		},
		{
			"homeTeam":"Applebees",
			"awayTeam":"After LUPip Mtg Spot",
			"markerImage":"images/newcastle.png",
			"information": "Some of us go there after the main LUGip meeting, drink brews, and talk.",
			"fixture":"Wednesday whenever",
			"capacity":"2 to 4 pints",
			"tv":""
		}
])

//var fruits = JSON.parse(`[{"apple" : "100", "mango" : "50"}, {"apple" : "10", "mango" : "50"}]`);

var table  = "<table border='1'>";
for (table1 in map) {
    //table += "<tr><th>" + map + "</th></tr>"
  //  table += "<tr><th>" + + "</th></tr>";
    //table += "<tr><th>" + map [table1]["awayTeam"] + "</th></tr>";
    table += "<tr><td>" + map [table1]["markerImage"] + "</td></tr>";
    table += "<tr><td>" + map [table1]["information"] + "</td></tr>";
    table += "<tr><td>" + map [table1]["fixture"] + "</td></tr>";

}
table  += "</table>";

document.getElementById('mytable').innerHTML = table;
