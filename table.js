var table = "";
var rows = 1;
var cols = ["purpose", "details", "requested for ", "owner"];
for (var i = 0; i < rows; i++) {
    table += "<tr>";
    for (var c = 0; c <= cols.length - 1; c++) {
        table += "<td>" + cols[c] + "</td>";
    }
    table += "</tr>";

}
document.write("<table >" + table + "</table>");

/*for (i = 1; i < 1000; i++) {
    name = ["exam", "essay", "quiz"];
    for (j = 0; j < 3; j++) {
        db.scores.insert({
            "student": i,
            "type": name[j],
            score: Math.round(Math.random() * 1000)
        })
      }
  }*/
