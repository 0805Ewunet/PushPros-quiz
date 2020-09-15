$(document).ready(function () {
  $("button").click(function () {
    $(".container").load("https://aimtell.com/quiz/sites.json/", "jsonp");
  });
});

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // Create a new table row element
  var tRow = $("<tr>");

  // Methods run on jQuery selectors return the selector i run on
  // This is why I can create and save a reference to a td in the same statement i update its text
  var idTd = $("<td>").text(response.id);
  var nameTd = $("<td>").text(response.nameTd);
  var urlTd = $("<td>").text(response.url);

  // Append the newly created table data to the table row
  tRow.append(idTd, nameTd, urlTd);
  // Append the table row to the table body
  $("tbody").append(tRow);
});
