import {
  screen,
  render,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import { InfoIcon, SortingIcon } from "../index";

describe("Render Icon", () => {
  it("Render Info Icon - with tooltip", () => {
    render(<InfoIcon withTooltip="some tool tip" />);
    const infoIcon = screen.getByTestId("info-icon");
    expect(infoIcon).toHaveClass("bd-icons--tooltip");
    const tooltip = screen.getByTestId("info-icon-tooltip");
    expect(tooltip).not.toHaveClass("bd-icons--tooltip__info--show");

    act(() => fireEvent.mouseEnter(infoIcon));
    waitFor(() => {
      expect(tooltip).toHaveClass("bd-icons--tooltip__info--show");
      expect(tooltip).toHaveTextContent("some tool tip");
    });
    act(() => fireEvent.mouseLeave(infoIcon));
    waitFor(() => {
      expect(tooltip).not.toHaveClass("bd-icons--tooltip__info--show");
    });
  });

  it("Render Info Icon - without tooltip", () => {
    render(<InfoIcon />);
    const infoIcon = screen.getByTestId("info-icon");
    expect(infoIcon).not.toHaveClass("bd-icons--tooltip");
  });

  it("Render Sorting Icon", () => {
    render(<SortingIcon />);
    const sortingIcon = screen.getByTestId("sorting-icon");
    expect(sortingIcon).toBeInTheDocument();
  });
});
