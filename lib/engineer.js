// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof gitHub !== "string" || !gitHub.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        super(name, id, email);
        this.gitHub = gitHub;
    }
}

Engineer.prototype.getGitHubUserName = function () {
    console.log(`GitHub Username: ${this.gitHub}`);
}
Engineer.prototype.getRole = function () {
    console.log('I am a Engineer');
}