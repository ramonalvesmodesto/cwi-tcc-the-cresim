import { useLocalStorage } from "./src/services/local-storage/use-local-storage.js";
import { gameStartMenu } from "./src/allMenus/gameStartMenu.js";
import { characterActionMenu } from "./src/allMenus/characterActionMenu.js";

const main = async () => {
  const obj = await gameStartMenu();

  console.clear();

  characterActionMenu(obj);
};

main();