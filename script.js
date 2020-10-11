// Wait till the DOM is ready.
$(function () {
    var roles = ["Student", "VITian", "Learner","Activist"];
    var count = 0;
    setInterval(() => {
      $("#intro .content h2 span").fadeOut("fast", function () {
        $(this).text(roles[count++ % roles.length]);
        $(this).fadeIn("fast");
      });
    }, 1000);
  });
  