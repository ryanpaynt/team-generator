// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(_name, _id, _email, _offNum){
        if (typeof _name !== "string" || !_name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof _id !== "number" || isNaN(_id) || _id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof _email !== "string" || !_email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof _id !== "number" || isNaN(_id) || _id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        super(_name, _id, _email);
        this.offNum = _offNum;
    }
}

Manager.prototype.getOfficeNumber = function () {
    console.log(`My office number is ${this.offNum}`);
}
Manager.prototype.getRole = function () {
    console.log('I am a Manager');
}