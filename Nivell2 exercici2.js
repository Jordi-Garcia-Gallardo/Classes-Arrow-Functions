/* - Exercici 2
Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. 
La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
Invocar el mètode decirNombre des de fora de la classe. */
 
class Persona {
    constructor (nom){
        this.nom = nom;
    }
    decirNombre() {
        console.log(`El nom de la persona es ${this.nom}`);
    }
}
let Jonny = new Persona('Joan');

Jonny.decirNombre(); 