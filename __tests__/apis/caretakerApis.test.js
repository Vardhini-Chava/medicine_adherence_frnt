import { careTaker } from "../../src/repositories/apis/careTaker";

describe("test caretaker apis", () => {
  it("test caretaker", () => {
    const payload = "payload";
    expect(careTaker.caretaker(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it("test emailcaretaker", () => {
    const payload = "payload";
    expect(careTaker.emailcaretaker(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it("test reqcaretaker", () => {
    const payload = "payload";
    expect(careTaker.reqCaretaker(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it("test sendimage", async () => {
    const payload = "payload";
    const response = { data: {} };
    const result = await careTaker.sendImage(payload);
    expect(result).toEqual(response);
  });
});
