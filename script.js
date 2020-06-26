//to create function that append city names to the side bar
$("#submitBtn").on("click", function () {
  event.preventDefault();
  console.log($("#cityName").val()); // to test its grabbing the right input
  const a = $("<div>");
  a.addClass("cityEl");
  a.text($("#cityName").val());
  $(".cityLists").append(a);
});
