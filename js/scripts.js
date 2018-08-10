$(document).ready(function(){
  $("#form-1").submit(function(event) {
    event.preventDefault();

    var uno = $("input:radio[name=question1]:checked").val();
    var dos = $("input:radio[name=question2]:checked").val();
    var tres = $("input:radio[name=question3]:checked").val();
    var quatro = $("input:radio[name=question4]:checked").val();
    var cinco = $("input:radio[name=question5]:checked").val();

    if(uno === "answer1" && dos === "answer4" && tres === "answer7") {
      alert("JavaScript")
    }

  });
});
