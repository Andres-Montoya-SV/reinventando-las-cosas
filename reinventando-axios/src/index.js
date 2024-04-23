import request from './lib/requests.js';

// Error
let ditto = await request("https://pokeapi.co/api/v2/pokemon/dito",{
    method: "GET"
});

// Success
let pikachu = await request("https://pokeapi.co/api/v2/pokemon/pikachu",{
    method: "GET"
});

console.log(ditto);
console.log(pikachu)