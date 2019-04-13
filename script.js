var acc = document.getElementsByClassName("seta_img_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active")
    this.style.transform = 'rotate(180deg)'

    /* Toggle between hiding and showing the active panel */
    var sobreMim = this.nextElementSibling;
    if (sobreMim.style.display === "block") {
      sobreMim.style.display = "none";
      this.style.transform = 'rotate(0deg)'
    } else {
      sobreMim.style.display = "block";
    }
  });
}