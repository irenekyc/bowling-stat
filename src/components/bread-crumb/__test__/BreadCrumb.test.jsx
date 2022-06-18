import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import BreadCrumb from "../index";

describe("Bread Crumb", () => {
  const breadCrumbLabel = "label";
  const breadCrumbHref = "/href";
  it("Render Bread Crumb - inactive, no link", () => {
    render(<BreadCrumb isActive={false} label={breadCrumbLabel} />);
    const breadCrumb = screen.queryByTestId("bread-crumb-text");
    const breadCrumbLink = screen.queryByTestId("bread-crumb-link");
    expect(breadCrumb).toBeInTheDocument();
    expect(breadCrumbLink).toBeNull();
    expect(breadCrumb).toHaveTextContent(breadCrumbLabel);
  });
  it("Render Bread Crumb - active with link", () => {
    render(
      <MemoryRouter>
        <BreadCrumb
          isActive={false}
          label={breadCrumbLabel}
          link={breadCrumbHref}
        />
      </MemoryRouter>
    );
    const breadCrumb = screen.queryByTestId("bread-crumb-text");
    const breadCrumbLink = screen.queryByTestId("bread-crumb-link");
    expect(breadCrumb).toBeNull();
    expect(breadCrumbLink).toBeInTheDocument();
    expect(breadCrumbLink).toHaveTextContent(breadCrumbLabel);
  });
});
