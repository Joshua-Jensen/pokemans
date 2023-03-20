export class Pokeman {
    constructor(data) {
        this.name = data.name
        this.url = data.url

    }



    static PokemanList(pokeman) {
        return `
<div class="col-10 selectable p-2 " onclick="app.pokemanController.selectPokeMan('${pokeman.name}')"><h4 class="bg-light p-2">${pokeman.name}</h2></div>
`
    }
}


