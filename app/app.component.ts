import { Component } from '@angular/core';
import { RadioGroup } from './components/radio-group';
import { CheckGroup } from './components/check-group';

import { Person } from './person';

@Component({
    moduleId: module.id,
    selector: 'ng2-radiocheck-example',
    templateUrl: 'app.component.html',
    directives: [RadioGroup, CheckGroup]
})
export class AppComponent {
    personList: Array<Person> = [
      new Person('Howard', 'Benjamin', 35),
      new Person('Singleton', 'Kate', 23),
      new Person('Pierce', 'Julia', 26),
      new Person('Bauer', 'Michael', 44)
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

    constructor() {
        this.skillChoices = [];
    }

    onRadioChange(event) {
        this.personChoice = event.value;
    }

    onCheckChange(event) {
        this.skillChoices = event.values;
    }

    randomAge() {
        return Math.round((Math.random() * 10) + 20);
    }

    addPerson() {
        this.personList.push(new Person(this.newLastname, this.newFirstname, this.randomAge()));
    }

    addSkill() {
        this.skillList.push(this.newSkill);
    }

    skillCount() {
        return this.skillChoices.length;
    }
}