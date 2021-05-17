var questions = document.getElementsByClassName("question");
var i;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    console.log(this.nextElementSibling)

    /* Toggle between hiding and showing the active panel */
    var reponse = this.nextElementSibling;
    if (reponse.style.display === "block") {
      reponse.style.display = "none";
    } else {
      reponse.style.display = "block";
    }
  });
}
