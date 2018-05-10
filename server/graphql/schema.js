const { buildSchema } = require('graphql');
const axios = require('axios');

let characters = [];

// (function() {
//     return axios.get(`https://rickandmortyapi.com/api/character/`).then((res) => characters = res.data)
// })()

class Character {
    constructor({ id, name, species, gender, image}) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.gender = gender;
        this.image = image
    }
}


const schema = buildSchema(
    `
    type Character {
        id: Int!
        name: String
        species: String
        gender: String
        image: String
    },
    type Query {
        character: [Character]!
    }
    `
)

const root = {
    character() {
        return axios.get(`https://rickandmortyapi.com/api/character/`).then(res => res.data.results.map(val => new Character(val))).catch(console.log)
    }
}

module.exports = {
    root,
    schema
};