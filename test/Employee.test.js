// Starter file provided by Instructor (03/09/2021) AC
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Ryan";
    const employee = new Emplooyee(name);
    expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testVal = 1;
    const employee = new Employee("Ryan", testVal);
    expect(employee.id).toBe(testVal);
});

test("Can set email via constructor argument", () => {
    const emailVal = 'test@email.com';
    const employee = new Employee("Ryan", 1, emailVal);
    expect(employee.email).toBe(emailVal);
});

test("Can get name via getName()", () => {
    const name = "Ryan";
    const employee = new Emplooyee(name);
    expect(employee.getName()).toEqual(name);
});

test("Can get id via getId()", () => {
    const testVal = 1;
    const employee = new Employee("Ryan", testVal);
    expect(employee.getId()).toEqual(testVal);
});

test("Can get email via getEmail()", () => {
    const emailVal = 'test@email.com';
    const employee = new Employee("Ryan", 1, emailVal);
    expect(employee.getEmail()).toEqual(emailVal);
});

test("getRole() should return \"Employee\"", () => {
    const roleVal = "Employee";
    const employee = new Employee("Ryan", 1, "test@email.com");
    expect(e.getRole()).toEqual(roleValue);
});
