import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "../index";

describe("Layout - Page", () => {
  it("Render Page - Default", () => {
    render(
      <Page>
        <h2>Some Content</h2>
      </Page>
    );
    const pageLayout = screen.getByTestId("page-layout");
    expect(pageLayout).toBeInTheDocument();
    expect(pageLayout).toHaveTextContent("Some Content");
    expect(pageLayout).toHaveClass("bd-layout");
  });
});
