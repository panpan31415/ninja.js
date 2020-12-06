import { getTotalNumberOfPages, search } from "./logic";
import _ from "lodash";
describe("getTotalNumberOfPages function", () => {
  it("should return 0 if rows is undefined", () => {
    expect(getTotalNumberOfPages(undefined, 5)).toBe(0);
  });
  it("should return 2 if rowsPerPage is undefined", () => {
    const rows = _.range(10);
    expect(getTotalNumberOfPages(rows)).toBe(2);
  });
  it("should return 0 if rows per page is 0", () => {
    const rows = _.range(10);
    expect(getTotalNumberOfPages(rows, 0)).toBe(0);
  });
  it("should return 0 if rows per page is 0", () => {
    const rows = _.range(10);
    expect(getTotalNumberOfPages(rows, 0)).toBe(0);
  });
  it("should return 2 if rows is 9", () => {
    const rows = _.range(9);
    expect(getTotalNumberOfPages(rows)).toBe(2);
  });
});

describe("search function", () => {
  it("should return empty array if rows is undefined", () => {
    expect(search(undefined).length).toBe(0);
  });
  it("should return whole array if search text is falsy", () => {
    const rows = ["a", "b", "c"];
    expect(search(rows)).toEqual(rows);
    expect(search(rows, "")).toEqual(rows);
  });
  it("should find matched rows", () => {
    const rows = [
      { name1: "Abc", email: "abc@test.com" },
      { name1: "Bcd", email: "bcd@test.com" },
      { name1: "Cde", email: "cde@test.com" },
    ];
    expect(search(rows, "ab")).toEqual([
      { name1: "Abc", email: "abc@test.com" },
    ]);
    expect(search(rows, "test")).toEqual(rows);
  });
});
