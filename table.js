var table ="";
var rows = 1;
var cols = ["purpose","details","requested for ","owner"];
for (var i = 0; i < rows; i++) {
  table +="<tr>";
  for (var c = 0; c <=cols.length -1; c++) {
    table += "<td>" + cols[c]+ "</td>";
  }
  table += "</tr>";

}
document.write("<table >" + table+ "</table>");
