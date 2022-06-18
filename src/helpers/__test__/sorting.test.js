import sorting from "../sorting";

describe("sorting", () => {
  it("sorting - same", () => {
    const a = {
      values: {
        id: 1,
      },
    };
    const b = {
      values: {
        id: 1,
      },
    };
    const result = sorting("id", a, b);
    expect(result).toBe(0);
  });
  it("sorting - a > b", () => {
    const a = {
      values: {
        id: 2,
      },
    };
    const b = {
      values: {
        id: 1,
      },
    };
    const result = sorting("id", a, b);
    expect(result).toBe(1);
  });

  it("sorting - a < b", () => {
    const a = {
      values: {
        id: 2,
      },
    };
    const b = {
      values: {
        id: 4,
      },
    };
    const result = sorting("id", a, b);
    expect(result).toBe(-1);
  });
});
