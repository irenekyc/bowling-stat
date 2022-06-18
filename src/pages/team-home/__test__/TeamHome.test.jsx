import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import TeamHome from "../index";
import { MemoryRouter, Router } from "react-router";
import { Provider } from "react-redux";

import { mockInitialState } from "../../../helpers/__test__/test-utlis";
import TeamApp from "../../team/Team";

describe("Team Home page", () => {
  it("Render Team Page", () => {
  
    render(
      <MemoryRouter>
        <Provider store={mockInitialState}>
            <TeamHome />
        </Provider>
      </MemoryRouter>
    );

  });
});
