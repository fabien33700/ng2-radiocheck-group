import { Component } from '@angular/core';
import { RadioGroup } from './radio-group';
import { CheckGroup } from './check-group';

class Person {
    private lastname: string;
    private firstname: string;

    constructor(lastname: string, firstname: string) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    
    public getLastname() { return this.lastname; }
    public getFirstname() { return this.firstname; }

    public toString() {
        return this.lastname.toUpperCase() + " " + Person.capitalize(this.firstname);
    }

    static capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1);
    }
}

@Component({
  selector: 'my-app',
  template: `
    <h1>People list</h1>
    <form>
      <radio-group 
        (changed)="onRadioChange($event)" 
        [name]="personChoice" 
        [items]="personList" 
        [initial]="2">
      </radio-group>
    </form>

    Selected person : {{ personChoice }} <br>

    Last name  : <input type="text" [(ngModel)]="newLastname">
    First name : <input type="text" [(ngModel)]="newFirstname">
    <button (click)="addPerson()">Add a new person</button>
    
    <hr>

    <form>
      <check-group 
        (changed)="onCheckChange($event)"
        [name]="skillChoices" 
        [items]="skillList"
        [initial]="[1, 4]">
      </check-group>
    </form>

    Selected skills : 
    <ul>
        <li *ngFor="let skill of skillChoices">{{ skill }}</li>
    </ul>

    <input type="text" [(ngModel)]="newSkill">
    <button (click)="addSkill()">Add a new skill</button>
  `,
  directives: [RadioGroup, CheckGroup]
})
export class AppComponent {
    personList: Array<Person> = [
      new Person('Howard', 'Benjamin'),
      new Person('Singleton', 'Kate'),
      new Person('Pierce', 'Julia'),
      new Person('Bauer', 'Michael')
    ];

   skillList: Array<string> = [
        'Management',
        'Client relationship',
        'Business',
        'R & D',
        'Accounting',
        'Communication',
        'Human ressources'
    ];

    personChoice: Person;
    skillChoices: Array<string>;

    newLastname: string;
    newFirstname: string;
    newSkill: string;

    onRadioChange(event) {
        this.personChoice = event.value;
    }

    onCheckChange(event) {
        this.skillChoices = event.values;
    }

    addPerson() {
        this.personList.push(new Person(this.newLastname, this.newFirstname));
    }

    addSkill() {
        this.skillList.push(this.newSkill);
    }
}