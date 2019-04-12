var acc = document.getElementsByClassName("seta_img_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var sobreMim = this.nextElementSibling;
    if (sobreMim.style.display === "block") {
      sobreMim.style.display = "none";
    } else {
      sobreMim.style.display = "block";
    }
  });
}

// //pegando o elemento seta e atribuindo na variavel
// const seta = document.getElementById('seta_img_accordion');
// //pegando o elemento texto seta e atribuindo na variavel
// const sobreMim = document.getElementById('sobreMim');

// //colocando a ação de clicar na seta
// seta.addEventListener('click', () => {
//   //condicionando; se na variavel sobreMim tiver a classe sobreMim--invisible
//   if (sobreMim.classList.contains('sobreMim--invisible')){
//     sobreMim.classList.remove('sobreMim--invisible');
//     seta.style.transform = 'rotate(180deg)';
//   } else{
//     sobreMim.classList.add('sobreMim--invisible');
//     seta.style.removeProperty('transform');
//   }

//   })


