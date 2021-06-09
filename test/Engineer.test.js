// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const ghLink = 'www.link@gitHub.com';
    const eng = Engineer("Ryan", 1, "test@email.com", ghLink);
    expect(eng.gitHub()).toBe(ghLink);
});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const eng = Engineer("Ryan", 1, "test@email.com", 'www.link@gitHub.com');
    expect(eng.getRole()).toBe(role);
});

test("Can get GitHub username via getGithub()", () => {
    const usrVal = 'www.link@gitHub.com';
    const eng = Engineer("Ryan", 1, "test@email.com", usrVal);
    expect(eng.getGitHub()).toBe(usrVal);
});
