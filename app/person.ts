export class Person {
    private lastname: string;
    private firstname: string;
    private age: number;

    constructor(lastname: string, firstname: string, age: number) {
        this.lastname = lastname.toUpperCase();
        this.firstname =  Person.capitalize(firstname);
        this.age = age;
    }
    
    public getLastname() { return this.lastname; }
    public getFirstname() { return this.firstname; }
    public getAge() { return this.age; }

    public toString() {
        return this.lastname + " " + this.firstname;
    }

    public introduce() {
        return "Hello, my name is " + this.toString() + ", I'm " + this.age + " years old.";
    }

    static capitalize(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1);
    }
}