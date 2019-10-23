import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Flight from "./flight";
let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe("Flight component", () => {
  test("it shows a list of Flight", () => {
    act(() => {
      render(<Flight />, container);
    });
    expect(container.textContent).toBe("What to expect?");
  });
});
