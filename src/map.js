const nums = [1, 2, 3, 4, 5]

const maps=nums.map((num)=>num*num);
console.log(maps);

const names = ["alice", "bob", "charlie", "danielle"]

const maps2=names.map((name)=>name.charAt(0).toUpperCase() + name.slice(1));
console.log(maps2);



const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const map3=pokemon.map((poke)=>`<p>${poke}</p>`)
console.log(map3);