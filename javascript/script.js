$(document).ready(function () {
  $("#btn").click(function () {
    $.get("https://aimtell.com/quiz/sites.json/", "jsonp", function (
      data,
      status
    ) {
      console.log(data);
      var data = JSON.parse(data);

      data.forEach(function (dt) {
        $("#tdata").append(
          "<tr>" + "<td>" + dt.id + "</td>",
          "<td>" + dt.name + "</td>",
          "<td>" + dt.url + "</td>" + "</tr>"
        );
      });
    });
  });
});
