mudaTema = document.getElementById("checkbox");

mudaTema.addEventListener("change", () => {
  console.log("mudou");
  if (mudaTema.checked) {
    console.log("noite");
    bgColor = "#090e16";
    iconeColor = "#ffffff";
    principalColor = "#7b4ae2";
    principalColorOpaca = "rgba(122, 74, 226, 0.253)";
    textColor = "#ffffff";

    trocaTema();
  } else {
    console.log("dia");
    bgColor = "#F5F3F7";
    iconeColor = "#9A73B5";
    principalColor = "#61398F";
    principalColorOpaca = "rgba(97, 57, 143,0.253)";
    textColor = "#4A4A4A";
    trocaTema();
  }
});

function mudaBg(bg) {
  document.documentElement.style.setProperty("--background-color", bg);
}

function mudaIconesColor(iconColor) {
  document.documentElement.style.setProperty("--icones-color", iconColor);
}

function mudaCorPrincipal(prinColor) {
  document.documentElement.style.setProperty("--cor-principal", prinColor);
}

function mudaCorPrincipalOpaca(prinColorOpaca) {
  document.documentElement.style.setProperty(
    "--cor-principal-opacidade",
    prinColorOpaca
  );
}

function mudaCorTexto(txtColor) {
  document.documentElement.style.setProperty("--cor-texto", txtColor);
}

function trocaTema() {
  mudaBg(bgColor);
  mudaIconesColor(iconeColor);
  mudaCorPrincipal(principalColor);
  mudaCorPrincipalOpaca(principalColorOpaca);
  mudaCorTexto(textColor);
}
