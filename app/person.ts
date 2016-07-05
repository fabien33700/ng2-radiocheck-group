export class Person {
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