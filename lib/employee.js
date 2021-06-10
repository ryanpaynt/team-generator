// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(age) || age < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof email !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;