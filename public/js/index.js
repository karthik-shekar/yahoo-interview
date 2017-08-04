$("#ajax-btn").on("click", function() {
  console.log("making an ajax call");
  $("#testModal").modal("hide");
  $.ajax({
    url: "/delete"
  }).then(function(data) {
    $("#ajax-res").html(data);
    $("#ajax-res").removeClass("hide");
    setTimeout(function() {
      $("#ajax-res").addClass("hide");
      $("#ajax-res").html("");
    }, 5000);
  }, function(xhr, statusText, err) {
    $("#ajax-res").html(err);
    $("#ajax-res").removeClass("hide");
    setTimeout(function() {
      $("#ajax-res").addClass("hide");
      $("#ajax-res").html("");
    }, 5000);
  });
});
