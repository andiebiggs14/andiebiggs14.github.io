  $(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['firstPage', '2ndPage', '3rdPage', '4thPage', '5thPage', 'lastPage']
    });

    var k = parseInt($("#splashtitle").css("top").replace("px", ""));
    var j = parseInt($("#splashtitle").css("left").replace("px", ""));

    $("#splashtitle").hover(function() {
        $("#splashtitle").css("width",500).css("top",k-30).css("left",j-50);
    }, function() {
        $("#splashtitle").css("width",400).css("top",k).css("left",j);
    });

    var r1 = 0;
    $(".arrow-right-1").click(function() {
      r1 = r1+1;
      if (r1 == 1) {
        $(".slideshow1-img3").toggleClass("transparent");
      }
      else if (r1 == 2) {
        $(".slideshow1-img2").toggleClass("transparent");
        r1 = 0;
      }
    });

    var l1 = 0;
    $(".arrow-left-1").click(function() {
      l1 = l1+1;
      if (l1 == 1) {
        $(".slideshow3-img3").toggleClass("transparent");
      }
      else if (l1 == 2) {
        $(".slideshow3-img2").toggleClass("transparent");
        l1= 0;
      }
    });

    var r2 = 0;
    $(".arrow-right-2").click(function() {
      r2 = r2+1;
      if (r2 == 1) {
        $(".slideshow2-img3").toggleClass("transparent");
      }
      else if (r2 == 2) {
        $(".slideshow2-img2").toggleClass("transparent");
        r2 = 0;
      }
    });

    var l2 = 0;
    $(".arrow-left-2").click(function() {
      l2 = l2+1;
      if (l2 == 1) {
        $(".slideshow2-img3").toggleClass("transparent");
      }
      else if (l2 == 2) {
        $(".slideshow2-img2").toggleClass("transparent");
        l2 = 0;
      }
    });

    var r3 = 0;
    $(".arrow-right-3").click(function() {
      r3 = r3+1;
      if (r3 == 1) {
        $(".slideshow3-img3").toggleClass("transparent");
      }
      else if (r3 == 2) {
        $(".slideshow3-img2").toggleClass("transparent");
        r3 = 0;
      }
    });

    var l3 = 0;
    $(".arrow-left-3").click(function() {
      l3 = l3+1;
      if (l3 == 1) {
        $(".slideshow3-img3").toggleClass("transparent");
      }
      else if (l3 == 2) {
        $(".slideshow3-img2").toggleClass("transparent");
        l3= 0;
      }
    });

    $("#apprepend").append(document.createTextNode("Andie Biggs")).prepend(document.createTextNode("Hi,"));

  });