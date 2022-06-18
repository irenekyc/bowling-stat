import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Team from "../index";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

import { mockInitialState } from "../../../helpers/__test__/test-utlis";

describe("Team App", () => {
  it("Render Team App", () => {
    render(
      <MemoryRouter>
        <Provider store={mockInitialState}>
          <Team />
        </Provider>
      </MemoryRouter>
    );
  });
});
