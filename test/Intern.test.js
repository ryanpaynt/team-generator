// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = "UNCC";
    const intern = Intern("Ryan", 1, "test@email.com", school);
    expect(intern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const intern = Intern("Ryan", 1, "test@email.com", "UNCC");
    expect(intern.getRole()).toBe(role);
});

test("Can get school via getSchool()", () => {
    const school = "UNCC";
    const intern = Intern("Ryan", 1, "test@email.com", school);
    expect(intern.getSchool()).toBe(school);
});
