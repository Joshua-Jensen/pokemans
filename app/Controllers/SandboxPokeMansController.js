import { sandboxPokemanService } from "../Services/SandboxPokeMansService.js"

export class SandboxPokemansController {
    constructor() {
        this.getMyPokeMans()
    }


    setActive(id) {
        sandboxPokemanService.setActive(id)
    }
}