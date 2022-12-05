function Elementos(elemento, classe, evento) {
  const elementos = document.querySelectorAll(elemento);
  function initAcordion() {
    if (elementos.length) {
      elementos[0].nextElementSibling.classList.add(classe);
      elementos[0].classList.add(classe);
      function ativar() {
        this.classList.toggle(classe);
        this.nextElementSibling.classList.toggle(classe);
      }

      elementos.forEach((item) => {
        item.addEventListener(evento, ativar);
      });
    }
  }
  initAcordion();
}
const h4 = new Elementos(".js-acordion", "ativo", "click");
