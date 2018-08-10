$(document).ready(function(){
  $("#form-1").submit(function(event) {
    var js = 0
    var ruby = 0
    var sharp = 0
    var uno = $("input:radio[name=question1]:checked").val();
    var dos = $("input:radio[name=question2]:checked").val();
    var tres = $("input:radio[name=question3]:checked").val();
    var quatro = $("input:radio[name=question4]:checked").val();
    var cinco = $("input:radio[name=question5]:checked").val();

    if(uno === "answer1") {
      js += 1
    }
    if(uno === "answer2") {
      ruby += 1
    }
    if(uno === "answer3") {
      sharp += 1
    }
    if(dos === "answer4") {
      js += 1
    }
    if(dos === "answer5") {
      ruby += 1
    }
    if(dos === "answer6") {
      sharp += 1
    }
    if(tres === "answer7") {
      js += 1
    }
    if(tres === "answer8") {
      ruby += 1
    }
    if(tres === "answer9") {
      sharp += 1
    }
    if(quatro === "answer10") {
      js += 1
    }
    if(quatro === "answer11") {
      ruby += 1
    }
    if(quatro === "answer12") {
      sharp += 1
    }
    if(cinco === "answer13") {
      js += 1
    }
    if(cinco === "answer14") {
      ruby += 1
    }
    if(cinco === "answer15") {
      sharp += 1
    }
    if(js >= 3) {
      alert("JavaScript/React")
    }
    if(ruby >= 3) {
      alert("Ruby/Rails")
    }
    if(sharp >= 3) {
      alert("C#/.NET")
    }
    if(sharp, ruby, js === 2) {
      alert("It looks like you're on the fence between two tracks! Maybe research all 3 and see which looks the most appealing. :-)")
    }
    event.preventDefault();
  });
});
