import { Component } from '@angular/core';
import { RadioGroup } from './radio-group';

class Personne {
    private nom: string;
    private prénom: string;

    constructor(nom: string, prénom: string) {
        this.nom = nom;
        this.prénom = prénom;
    }
    
    public getNom() { return this.nom; }
    public getPrenom() { return this.prénom; }

    public uneMethodePersonnelle() {
        alert("Je commence mon traitement sur " + Personne.capitale(this.prénom) + " !");
    }

    public toString() {
        return this.nom.toUpperCase() + " " + Personne.capitale(this.prénom);
    }

    static capitale(chaine) {
        return chaine.substring(0, 1).toUpperCase() + chaine.substring(1);
    }
}

@Component({
  selector: 'my-app',
  template: `
    <h1>Liste de personnes</h1>
    <form>
      <radio-group 
        (changed)="onChange($event)" 
        [name]="choixPersonne" 
        [items]="listePersonnes" 
        [initial]="2">
      </radio-group>
    </form>

    Personne sélectionnée : {{ choix }} <hr>

    Nom : <input type="text" [(ngModel)]="nouveauNom">
 Prénom : <input type="text" [(ngModel)]="nouveauPrenom">
    <button (click)="ajouter()">Ajouter</button><hr>
  `,
  directives: [RadioGroup]
})
export class AppComponent {
    listePersonnes: Array<Personne> = [
      new Personne('dupont', 'josé'),
      new Personne('gallant', 'marion'),
      new Personne('pitard', 'fabrice'),
    ];

   /* listeCompetences: Array<string> = [
        'Management',
        'Relations clients',
        'Affaires',
        'R & D',
        'Comptabilité et C.A',
        'Communications',
        'Ressources humaines'
    ];*/

    choix: Personne;
    //selection: Array<string>;

    nouveauNom: string;
    nouveauPrenom: string;

    onChange(event) {
        this.choix = event.value;
    }

    ajouter() {
        this.listePersonnes.push(new Personne(this.nouveauNom, this.nouveauPrenom));
    }
}