import { screen, render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../index";
import { MemoryRouter } from "react-router";

describe("Layout - Header", () => {
  it("Render Header - Default", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("Render Header - with level 2", () => {
    render(
      <MemoryRouter>
        <Header level2="qu-women" />
      </MemoryRouter>
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    const level1 = screen.getByTestId("bread-crumb-link");
    expect(level1).toBeInTheDocument();
    expect(level1).toHaveTextContent("Home");
    expect(level1).toHaveAttribute("href", "/");
    const level2 = screen.getByTestId("bread-crumb-text");
    expect(level2).toBeInTheDocument();
    expect(level2).toHaveTextContent("QU Women");
    expect(level2).not.toHaveAttribute("href", "/qu-women");
  });
  it("Render Header - with level 3", () => {
    render(
      <MemoryRouter>
        <Header level2="qu-women" level3="all-event--2021-2022" />
      </MemoryRouter>
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    const level1 = screen.getAllByTestId("bread-crumb-link")[0];
    expect(level1).toBeInTheDocument();
    expect(level1).toHaveTextContent("Home");
    expect(level1).toHaveAttribute("href", "/");
    const level2 = screen.getAllByTestId("bread-crumb-link")[1];
    expect(level2).toBeInTheDocument();
    expect(level2).toHaveTextContent("QU Women");
    expect(level2).toHaveAttribute("href", "/qu-women");
    const level3 = screen.getByTestId("bread-crumb-text");
    expect(level3).toBeInTheDocument();
    expect(level3).toHaveTextContent("all-event--2021-2022");
  });
});
