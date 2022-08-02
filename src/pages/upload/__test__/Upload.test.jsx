import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import UploadPage from "../index";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mockInitialState } from "../../../helpers/__test__/test-utlis";

describe("Render Upload Page", () => {
  it("Render Upload Page", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const title = screen.getByTestId("upload-page-heading");
    expect(title).toHaveTextContent("Upload Event Data");
  });
});
