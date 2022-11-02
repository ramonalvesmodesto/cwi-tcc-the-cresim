import { useLocalStorage } from "./src/services/local-storage/use-local-storage.js";
import { gameStartMenu } from "./src/allMenus/gameStartMenu.js";
import { characterActionMenu } from "./src/allMenus/characterActionMenu.js";

const main = async () => {
  while (true) {
    const obj = await gameStartMenu();
  
    if (obj == "exit") {
      return;
    } else if (obj) {
      console.clear();
      await characterActionMenu(obj);
    }
    
  }
};

main();
