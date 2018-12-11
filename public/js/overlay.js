  function openNav(page, inputdata) {
    $("#myNav").css("width", "100%");
    var html = new EJS({ url: page }).render({data : inputdata});
    $( ".overlay-content" ).html(html);
  }

  function closecgvNav() {
    document.getElementById("myNav").style.width = "0%";
  }
