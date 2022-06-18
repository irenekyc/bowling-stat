import { screen, render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import SortingDropdown from "../index";

describe("Sorting Dropdown", () => {
  const mockToggleSortBy = jest.fn();
  it("Render Sorting Dropdown", () => {
    act(() => render(<SortingDropdown toggleSortBy={mockToggleSortBy} />));
    const sortingDropdown = screen.queryByTestId("sorting-dropdown");
    expect(sortingDropdown).toBeInTheDocument();
  });
  it("Render Sorting Dropdown", () => {
    act(() => render(<SortingDropdown toggleSortBy={mockToggleSortBy} />));
    const sortingDropdown = screen.queryByTestId("sorting-dropdown");
    expect(sortingDropdown).toBeInTheDocument();
    const sortingDropdownButton = screen.queryByTestId(
      "sorting-dropdown-button"
    );
    expect(sortingDropdownButton).toBeInTheDocument();
    const sortingDesc = screen.queryByTestId("sorting-dropdown-button-desc");
    expect(sortingDesc).not.toBeNull();
    const sortingAsc = screen.queryByTestId("sorting-dropdown-button-asc");
    expect(sortingAsc).not.toBeNull();

    fireEvent(
      sortingDesc,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );

    expect(mockToggleSortBy).toBeCalledWith(true);
    fireEvent(
      sortingAsc,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    expect(mockToggleSortBy).toBeCalledWith(false);
  });
});
