
// DESAPARECER NAVBAR CON SCROLL DOWN
if ($('.smart-scroll').length > 0) {
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}



let titulos = ["Convocatoria gráfica de inspiración EP",
  "Lanzamiento EP",
  "Título 3",
  "Título 4",
  "Título 5",
  "Título 6",];
let loremIpsum= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus ac magna maximus facilisis. Donec euismod interdum ipsum a finibus. Vestibulum aliquet, massa at facilisis semper, est erat commodo elit, quis gravida ex felis egestas elit. ";
let textos = ["Texto1", "Texto 2", "Texto 3", "Texto 4", "Texto 5", "Texto 6"]



$(document).ready(function () {

// CAMBIAR NOTICIAS

// PC (ventana modal)
  let j;
  $imagen = $("img.galeria");
  $modal = $("#myModal:hidden");
  $imagenModal = $("#imagenModal:hidden");
  $tituloModal = $("#tituloModal:hidden");
  $textoModal = $("#textoModal");
  $botonPC = $("#cambiarNoticiasPC");

  $imagen.click(function(){
    if (window.innerWidth >1200) {
      imagenModal.src = this.src;
      imagenModal.alt = this.alt;
      j = parseInt(this.alt);

      $tituloModal.html(titulos[j]);
      $textoModal.html(textos[j] + ": " + loremIpsum);
      $("#myModal:hidden").modal("show");
    }
  });

  $botonPC.click(function(){
    j=j+1
    if(j>5){
      j=0;
    }
    $imagen[j].click();

  })

  // CELULAR
  let i =1;
  $titulo = $("#tituloNoticia");
  $texto = $("#cuerpoNoticia");
  $imagenNoticia = $("#imagenNoticia");
  $boton = $("#cambiarNoticias");
  $boton.click(function(){
    if(i>5){
      i=0;
    }
    $titulo.html(titulos[i]);
    imagenNoticia.src = "../public/textura" + i + ".jpeg";
    $texto.html(textos[i] + ": " + loremIpsum);
    i = i+1;

  });

});
