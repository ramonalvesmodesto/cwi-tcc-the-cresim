import { theCresimsLogo } from "../menus/theCresimsLogo.js";

export const musicTrainingAnim = async (character, display) => {
  const n = [
    "âª",
    "â©",
    "â«",
    "â¬",
    "ð",
    "â®",
    "â­",
    "à­­",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  let count = 1;
  let reticencias = ".";
  if (display == true) {
    for (let i = 0; i < 5; i++) {
      console.clear();
      console.log(`
${await theCresimsLogo()}

      ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    _____________________
   /  o   ooo ooo ooo   /|
  /  _____,,,,______   / /
 /  / // (â_â  // //  / /
/__////// ~|â /////__/ /
|  |       LL     |  |/

${count} / 10

${character.name} estÃ¡ tocando aquele Raul${reticencias}
`);
      count += 1;
      reticencias += ".";
      if (reticencias == "....") {
        reticencias = ".";
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.clear();
      console.log(`
${await theCresimsLogo()}

    ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    _____________________
   /  o   ooo ooo ooo   /|
  /  _____,,,,______   / /
 /  / // (â_â  // //  / /
/__////// â|~ /////__/ /
|  |       LL     |  |/

${count} / 10

${character.name} estÃ¡ tocando aquele Raul${reticencias}
`);
      count += 1;
      reticencias += ".";
      if (reticencias == "....") {
        reticencias = ".";
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.clear();
  console.log(`
  ${await theCresimsLogo()}


        
    _____________________
   /  o   ooo ooo ooo   /|
  /  _____,,,,______   / /
 /  / // (â_â  // //  / /
/__////// <|> /////__/ /
|  |       LL     |  |/

10 / 10

Ã ${character.name}... Melhor voltar pro CifraClub.


Pressione ENTER para continuar...
`);
};
