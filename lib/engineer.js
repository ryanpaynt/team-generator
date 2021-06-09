class Engineer extends Employee{
    constructor(_name, _id, _email, _gitHub){
        if (typeof _name !== "string" || !_name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof _id !== "number" || isNaN(_id) || _id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof _email !== "string" || !_email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof _gitHub !== "string" || !_gitHub.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        super(_name, _id, _email);
        this.gitHub = _gitHub;
    }
}

Engineer.prototype.getGitHubUserName = function () {
    console.log(`GitHub Username: ${this.gitHub}`);
}
Engineer.prototype.getRole = function () {
    console.log('I am a Engineer');
}