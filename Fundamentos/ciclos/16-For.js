const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman']

console.log('\nFor Tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    
}

console.log('\nFor In');
for(let i in heroes){
    console.log(heroes[i]);
}

console.log('\nFor of');
for (let heroe of heroes) {
    console.log( heroe )
}