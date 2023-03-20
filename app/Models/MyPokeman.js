
export class MyPokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.official_artwork.front_default
        this.weight = data.weight
        this.types = this.getTypes(data.types)
    }

    getTypes(data) {
        type = []
        data.forEach(t => {
            type = ',' + data.name
        });
        type = type.slice(1)
        return type

    }

    get myPokemanListTemplate() {
        return `
        
        `
    }

}




