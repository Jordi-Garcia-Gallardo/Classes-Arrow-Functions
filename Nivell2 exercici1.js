/* - Exercici 1
Crear una arrow function que, 
rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */
 
((a=8) => {
    Perro = {Nom:'Tobby', Edad: a,}
    console.log(Perro);
})();