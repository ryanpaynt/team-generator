// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(_name, _id, _email, _school){
        if (typeof _name !== "string" || !_name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof _id !== "number" || isNaN(_id) || _id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof _email !== "string" || !_email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof _school !== "string" || !_school.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        super(_name, _id, _email);
        this.school = _school;
    }
}

Intern.prototype.getSchool = function () {
    console.log(`I currently go to ${this.school}`);
}
Intern.prototype.getRole = function () {
    console.log('I am an Intern');
}