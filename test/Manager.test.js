// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/man");

test("Can set office number via constructor argument", () => {
    const idVal = 1;
    const man = Manager("Ryan", 1, "test@email.com", idVal);
    expect(man.officeNumber).toBe(idVal);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const man = Manager("Ryan", 1, "test@email.com", 1)
    expect(man.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
    const offNum = 1;
    const man = Manager("Ryan", 1, "test@email.com", offNum);
    expect(man.getOfficeNumber()).toBe(offNum);
});
