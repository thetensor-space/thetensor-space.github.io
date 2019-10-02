let renderKaTexElements = () => {
  [...document.getElementsByClassName("katex-expression")].map(kaTexElem => {
    console.log(kaTexElem);
    katex.render(kaTexElem.innerHTML, kaTexElem, {
      throwOnError: false
    });
  });
};

renderKaTexElements();
