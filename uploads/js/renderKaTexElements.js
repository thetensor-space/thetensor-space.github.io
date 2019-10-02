let renderKaTexElements = () => {
  [...document.getElementsByClassName("katex-expression")].map(kaTexElem => {
    katex.render(kaTexElem.innerHTML, kaTexElem, {
      throwOnError: false
    });
  });
};

renderKaTexElements();