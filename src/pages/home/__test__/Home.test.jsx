import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../index";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

import { mockInitialState } from "../../../helpers/__test__/test-utlis";

describe("Render Home Page", () => {
  it("render home page", () => {
    render(
      <MemoryRouter>
        <Provider store={mockInitialState}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    const pageTitle = screen.getByTestId("home-page-title");
    expect(pageTitle).toHaveTextContent("Teams");
    const teams = screen.queryAllByTestId("home-page-team-list");
    expect(teams).toHaveLength(2);
  });
});
