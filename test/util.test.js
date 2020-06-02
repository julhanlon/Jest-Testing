const { add, minus, multiply, divide, power } = require("../util/util");

describe("Add", () => {
  describe("Sucess", () => {
    it("Should return the sum of the two passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => add("2", 2)).toThrowError();
    });

    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => add(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguemnts were received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Sucess Again", () => {
    it("should return the result of subtracting the numbers", () => {
      expect(minus(4, 3)).toBe(1);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => minus("2", 2)).toThrowError();
    });

    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguemnts were received", () => {
      expect(() => minus()).toThrowError();
    });
  });
});

describe("Multiply", () => {
  describe("Sucess Again", () => {
    it("should return the result of multiplying the numbers", () => {
      expect(multiply(4, 3)).toBe(12);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => multiply("2", 2)).toThrowError();
    });

    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => multiply(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguemnts were received", () => {
      expect(() => multiply()).toThrowError();
    });
  });
});

describe("Divide", () => {
  describe("Sucess Again", () => {
    it("should return the result of diving the numbers", () => {
      expect(divide(12, 3)).toBe(4);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => divide("2", 2)).toThrowError();
    });

    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => divide(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguemnts were received", () => {
      expect(() => divide()).toThrowError();
    });
  });
});

describe("Power", () => {
  describe("Sucess Again", () => {
    it("should return the result of raising one number to the other", () => {
      expect(power(4, 2)).toBe(16);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => power("2", 2)).toThrowError();
    });

    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => power(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguemnts were received", () => {
      expect(() => power()).toThrowError();
    });
  });
});
