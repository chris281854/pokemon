/* global cy */
describe('pokedex',function(){
   it('front page can be opened',function(){
    cy.visit('http://localhost:5000');
    cy.contains('pikachu')
    cy.contains('Pokemon and Pokémon character names are trademarks of Nintendo')

   })
})