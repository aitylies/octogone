export default class Actor{
  constructor(name, image, health, lvl){
    this.name = name;
    this.image = image;
    this.health = health;
    this.lvl = lvl;
  }
  attack(cible) {
    if ( this.health > 0 ) {
      let degat = this.force;
      alert(`${this.name} attaque ${cible.name} et lui inflige : ${degat} point(s) de dégâts.` );
      cible.health = cible.health - degat;
      if ( cible.health > 0 ) {
        alert(`Il reste à ${cible.name} ${cible.health} point(s) de vie.`);
      } else {
        cible.health = 0;
        alert(`${cible.name} est mort ! `);
      }

    } else {
      alert(`${this.name} ne peut pas attaquer, il est mort ...`);
    }
  }



}
