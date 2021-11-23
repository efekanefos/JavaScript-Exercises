const texts = ["Efekan", "an Frontend Developer", "24 years old"];

let count = 0;
/* texts kısmındaki stringlerin sırası */

let index = 0;

/* Mevcut String ifadesinin harflerinin index numarası */

let currentText = "";

/* O anda yazılan texts kısmındaki string ifadesi */

let letter = "";

/* O anda yazılan ifadenin slice ile harflere bölünmüş hali */

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  /* texts kısmındaki son kelime yazıldıktan sonra ilk kelimeye geri dön */

  currentText = texts[count]; /* O anki yazılan kelime */
  letter = currentText.slice(0, ++index);
  /* Yazılan kelimenin ilk başta ilk harfinden başlayıp son harfine kadar oluşturulması */

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  /* Yazılma işlemi süren kelimenin bütün harfleri yazıldıysa count++ ile sonraki kelimeye geç */
  /* index = 0 sayesinde sonraki kelime de ilk harfinden başlasın */

  setTimeout(type, 300);
})();
