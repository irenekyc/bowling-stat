import { screen, render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import Main from "../index";

describe("Layout - Main", () => {
  it("Render Main - Default", () => {
    render(
      <Main>
        <h2>Some Content</h2>
      </Main>
    );
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent("Some Content");
    expect(main).toHaveClass("bd-main__section");
  });
});
