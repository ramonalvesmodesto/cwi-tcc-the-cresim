import { sleepMenu } from "../characterActions/sleepMenu.js";
import { takeAShower } from "../characterActions/takeAShower.js";
import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "./characterInfoDisplay.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import { executeCheat } from "../cheats/cheats.js";
import { menuWork } from "./menuWork.js";
import { menuBuyItens } from "./menuBuyItens.js";
import { menuTrainning } from "./menuTranning.js";
import { menuInteraction } from "./menuInteraction.js";
import { updateCharacterBD } from "../crud/character.js";
import { characterDeath } from "../characterActions/characterDeath.js";

export const characterActionMenu = async (character) => {
  if (character.energy < 0) {
    character.energy = 0;
  }
  if (character.hygiene < 0) {
    character.hygiene = 0;
  }
  if (character.time <= 0) {
    await characterDeath(character);
    return;
  }
  let warningMessage = "";
  let status;

  while (true) {
    console.clear();
    const input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(character)}
${warningMessage}
Escolha uma ação para o(a) ${character.name}:

1.  ✅ Trabalhar ⬇⌛️ ⬇🛁 ⬆💵

2.  ✅ Treinar habilidade de ${character.aspiration} ⬇⌛️ ⬇🛁 ⬆🎮

3.  ✅ Dormir ⬇⌛️ ⬆✨

4.  ✅ Tomar banho ⬇⌛️ ⬇💵 ⬆🛁
 
5.  ✅ Comprar item ⬇💵 ⬆🎮

6.  ✅ Interagir com outro persongaem ⬇⌛️ ⬆❤️

7.  ✅ ⬇10✨

8.  ✅ ⬇10🛁

X.  ✅ Voltar ao menu principal

Sua escolha:`);

    switch (input.toUpperCase()) {
      // Trabalhar
      case "1":
        if (character.energy <= 2) {
          warningMessage = `
- Opção ${input} escolhida
!!! O personagem precisa de no mínimo 3 de energia para trabalhar !!!
        `;
          break;
        }
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
        `;
        character = await menuWork(character);
        break;

      // Treinar habilidade
      case "2":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
        `;
        character = await menuTrainning(character);
        break;

      // Dormir
      case "3":
        if (character.energy >= 32) {
          character.energy = 32;
          warningMessage = `
- Opção ${input} escolhida
### O personagem está com a energia completa ###
`;
          break;
        }
        warningMessage = ``;

        console.clear();
        character = await sleepMenu(character);
        break;

      // Tomar banho
      case "4":
        if (character.hygiene >= 28) {
          character.hygiene = 28;
          warningMessage = `
- Opção ${input} escolhida
### O personagem está completamente limpo ###
`;
          break;
        }
        if (character.cresceleons < 10) {
          warningMessage = `
- Opção ${input} escolhida
!!! O personagem não tem 10 Cresceleons !!!
`;
          break;
        }
        warningMessage = ``;
        console.clear();
        character.hygiene = 28;
        character.cresceleons -= 10;
        character = await takeAShower(character, 10);
        break;

      // Comprar item
      case "5":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
        `;
        character = await menuBuyItens(character);
        break;

      // Interagir com outro personagem
      case "6":
        console.clear();
        [character, status] = await menuInteraction(character);

        warningMessage = `
- Opção ${input} escolhida
  ### Interação entre usuarios realizado com sucesso ###`;
        if (!status) {
          warningMessage = `
- Opção ${input} escolhida
  !!! Energia insuficiente para realizar interação !!!`;
        }
        break;

      // Voltar para menu principal
      case "X":
        return;

      // Perder 10 energia
      case "7":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${character.name} perde 10 de energia ###
`;
        character.energy -= 10;
        break;

      // Perder 10 higiene
      case "8":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${character.name} perde 10 de energia ###
`;
        character.hygiene -= 10;
        break;

      // OPÇÃO INVALIDA e Cheat
      default:
        character = await executeCheat(character, input);

        warningMessage = `
- Opção ${input} escolhida
!!! Opção Invalida! Escolha uma opção válida !!!
`;
        if (verifyCheat(input)) {
          warningMessage = `
### Cheat aplicado com sucesso ###
`;
        }

        console.clear();
        break;
    }

    updateCharacterBD(character);
  }
};

const verifyCheat = (input) => {
  const inputUpper = input.toUpperCase()
  return (
    inputUpper == "SORTENAVIDA" ||
    inputUpper == "DEITADONAREDE" ||
    inputUpper == "JUNIM" ||
    inputUpper == "SINUSITE"
  )
}