$(document).ready(function() {

  // prendo la classe ".next" (ossia l'angle destro) e applicando un click vogliamo
  // che esegua ciò che si torva nella funzione.
  $(".next").click(imgCircleNext);
  // per scorrere le immagini con le freccie della tastiera ricorro a questi comandi
  // richiamando la funzione "imgCirclePrev" sia per il destro "39"...
    if (e.keyCode == 39) {
      imgCircleNext();
    }
  });

  $(".prev").click(imgCirclePrev);
  // ...sia per il tasto sinistro "37"
  $(document).keydown(function(e){
  $(document).keydown(function(e){
    if (e.keyCode == 37) {
      imgCirclePrev();
    }
  });

  // avanti

  function imgCircleNext() {
    // applico una variabile chiamata "imgActive"
    var imgActive = $("img.active");
    // applico una variabile chiamata cirleActive"
    var circleActive =$(".fa-circle.active");

    // a "imgActive" rimuoviamo la classe active
    imgActive.removeClass("active");
    // a "circleActive" rimuoviamo la classe active
    circleActive.removeClass("active");

     // se l'img a cui abbiamo tolto la classe imgActive ha la classe last
     // allora selezioniamo la prima

     if (imgActive.hasClass("last") == true) {
       // qui sto selezionando la prossima immagine che in questo caso è la prima
       var nextImg = $("img.first");
       // qui sto selezionando il prossima cerchietto che in questo caso è la prima
       var nextCircle = $(".fa-circle.first");

     // altrimenti se non ha la classe last la prossima immagine sara l'immagine
     // succesiva all'immagine a cui abbiamo tolto la classe active

     // altrimenti sen no ha la classe last il prossimo cerchietto sara il cerchietto
     // succesivo al cerchietto a cui abbiamo tolto la classe active
      }  else {
      // sto selezionando l'immagine successiva all'immagine che aveva la classe active
       var nextImg = imgActive.next();
       // sto selezionando il cerchietto successivo al cerchietto che aveva la classe active
       var nextCircle = circleActive.next();
    }
    // sto aggiungendo la classe active all'immagine successiva
    nextImg.addClass("active");
    // sto aggiungendo la classe active al cerchietto succesivo
    nextCircle.addClass("active");
  }


  // indietro

  function imgCirclePrev() {
    // applico una variabile chiamata "imgActive"
    var imgActive = $("img.active");
    // applico una variabile chiamata cirleActive"
    var circleActive =$(".fa-circle.active");

    // a "imgAct" rimuoviamo la classe active
    imgActive.removeClass("active");
    // a "circleActive" rimuoviamo la classe active
    circleActive.removeClass("active");

    if (imgActive.hasClass("first") == true) {
      // qui sto selezionando la prossima immagine che in questo caso è la prima
      var nextImg = $("img.last");
      // qui sto selezionando il prossima cerchietto che in questo caso è la prima
      var nextCircle = $(".fa-circle.last");

      // altrimenti se no ha la classe last la prossima immagine sara l'immagine
      // succesiva all'immagine a cui abbiamo tolto la classe active

      // altrimenti sen no ha la classe last il prossimo cerchietto sara il cerchietto
      // succesivo al cerchietto a cui abbiamo tolto la classe active
    } else {
    // sto selezionando l'immagine successiva all'immagine che aveva la classe active
      var nextImg = imgActive.prev();
      // sto selezionando il cerchietto successivo al cerchietto che aveva la classe active
      var nextCircle = circleActive.prev();
    }

    // sto aggiungendo la classe active all'immagine successiva
    nextImg.addClass("active");
    // sto aggiungendo la classe active al cerchietto succesivo
    nextCircle.addClass("active");
  }

});
