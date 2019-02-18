import Actor from "./Actor.js"

export default class Player extends Actor{
  constructor(exp, lvl, sexe){
    this.exp = exp;
    this.sexe = sexe;
  }
}
