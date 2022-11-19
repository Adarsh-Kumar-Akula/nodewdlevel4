/* eslint-disable no-undef */
// const todoList = require("../todo");
const var_list = require("../todo");
let thisday = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = var_list();

describe("var_list is being tested", () => {
  beforeAll(() => {
    add({
      title: "recharage mobile",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding a new activity to the var_list ", () => {
    // expect(all.length).toBe(0);

    let length = all.length;

    add({
      title: "visiting medical shop",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking an activity as completed in var_list", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retriving  all activities in var_list which are overdue", () => {
    let var1 = overdue();

    expect(
      var1.every((todo) => {
        return todo.dueDate < thisday;
      })
    ).toBe(true);
  });

  test("retriving  all activities in var_list which are dueToday", () => {
    let var2 = dueToday();

    expect(
      var2.every((todo) => {
        return todo.dueDate === thisday;
      })
    ).toBe(true);
  });

  
  test("retriving  all activities in var_list which are dueLater", () => {
    let var3 = dueLater();
    expect(
      var3.every((todo) => {
        return todo.dueDate > thisday;
      })
    ).toBe(true);
  });
});
