import { PokeMansController } from "./Controllers/PokeMansController.js";
import { SandboxPokemansController } from "./Controllers/SandboxPokeMansController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokeMansController = new PokeMansController();
  sandboxPokeMansController = new SandboxPokemansController();
}
window["app"] = new App();
