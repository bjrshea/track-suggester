$(document).ready(function() {
  $("#form-1").submit(function(event) {
    event.preventDefault();
    var freelance = $("input:radio[name=freelance]:checked").val();
    var preference = $("input:radio[name=preference]:checked").val();
    var favorite = $("input:radio[name=favorite]:checked").val();
    var soundsBest = $("input:radio[name=sounds-best]:checked").val();
    var feelsRight = $("input:radio[name=feels-right]:checked").val();
    var js = 0;
    var ruby = 0;
    var sharp = 0;

    if(freelance === "answer1") {
      js += 1;
    } else if(freelance === "answer2") {
      ruby += 1;
    } else {
      sharp += 1;
    }

    if(preference === "answer4") {
      js += 1;
    } else if(preference === "answer5") {
      ruby += 1;
    } else {
      sharp += 1;
    }

    if(favorite === "answer7") {
      js += 1;
    } else if(favorite === "answer8") {
      ruby += 1;
    } else {
      sharp += 1;
    }

    if(soundsBest === "answer10") {
      js += 1;
    } else if(soundsBest === "answer11") {
      ruby += 1;
    } else {
      sharp += 1;
    }

    if(feelsRight === "answer13") {
      js += 1;
    } else if(feelsRight === "answer14") {
      ruby += 1;
    } else {
      sharp += 1;
    }

    if(js >= 3) {
      $("#ruby").hide();
      $("#sharp").hide();
      $("#fence").hide();
      $("#javascript").show();
    } else if(ruby >= 3) {
      $("#javascript").hide();
      $("#sharp").hide();
      $("#fence").hide();
      $("#ruby").show();
    } else if(sharp >= 3) {
      $("#javascript").hide();
      $("#ruby").hide();
      $("#fence").hide();
      $("#sharp").show();
    } else {
      $("#javascript").hide();
      $("#ruby").hide();
      $("#sharp").hide();
      $("#fence").show();
    }
  });
});
