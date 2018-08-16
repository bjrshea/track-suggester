$(document).ready(function(){
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

    if (freelance || preference || favorite || soundsBest || feelsRight === "jsAnswer") {
      js += 1;
    } else if (freelance || preference || favorite || soundsBest || feelsRight === "rubyAnswer") {
      ruby += 1;
    } else {
      sharp += 1;
    }

    if (js >= 3) {
      alert("JavaScript/React");
    } else if (ruby >= 3) {
      alert("Ruby/Rails");
    } else if (sharp >= 3) {
      alert("C#/.NET");
    } else {
      alert("It looks like you're on the fence between two tracks! Please try again. :-)");
    }



    // if(uno === "answer1") {
    //   js += 1;
    // }
    // if(uno === "answer2") {
    //   ruby += 1;
    // }
    // if(uno === "answer3") {
    //   sharp += 1;
    // }
    // if(dos === "answer4") {
    //   js += 1;
    // }
    // if(dos === "answer5") {
    //   ruby += 1;
    // }
    // if(dos === "answer6") {
    //   sharp += 1;
    // }
    // if(tres === "answer7") {
    //   js += 1;
    // }
    // if(tres === "answer8") {
    //   ruby += 1;
    // }
    // if(tres === "answer9") {
    //   sharp += 1;
    // }
    // if(quatro === "answer10") {
    //   js += 1;
    // }
    // if(quatro === "answer11") {
    //   ruby += 1;
    // }
    // if(quatro === "answer12") {
    //   sharp += 1;
    // }
    // if(cinco === "answer13") {
    //   js += 1;
    // }
    // if(cinco === "answer14") {
    //   ruby += 1;
    // }
    // if(cinco === "answer15") {
    //   sharp += 1;
    // }
    // if(js >= 3) {
    //   alert("JavaScript/React")
    // }
    // if(ruby >= 3) {
    //   alert("Ruby/Rails")
    // }
    // if(sharp >= 3) {
    //   alert("C#/.NET")
    // }
    // if(sharp, ruby, js <= 2) {
    //   alert("It looks like you're on the fence between two tracks! Please try again. :-)")
    // }
  });
});

// If there were only 3 values -- answer1, answer2, and answer3 -- why wouldn't this work?

// if(uno, dos, tres, quatro, cinco === "answer1") {
//   js += 1
// }
// if(uno, dos, tres, quatro, cinco === "answer2") {
//   ruby += 1
// }
// if(uno, dos, tres, quatro, cinco === "answer3") {
//   sharp += 1
