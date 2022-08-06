import {
  screen,
  render,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import UploadPage from "../index";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mockInitialState } from "../../../helpers/__test__/test-utlis";
import mockTeamList from "../../../helpers/__test__/__data/teamList.json";
import { NEW_TEAM } from "../../../constants";

const mockFile = new File(["hello"], "hello.svg", { type: "txt/csv" });

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

  it("Submit Upload Page with empty data", () => {
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
    const submitButton = screen.getByTestId("submit-form-button");
    act(() => {
      fireEvent.click(submitButton, { cancelable: true, bubbles: true });
    });
    waitFor(() => {
      const errorMessage = screen.queryAllByTestId("input-error-message");
      expect(errorMessage).toHaveLength(4);
    });
  });
});

describe("Team Name Select", () => {
  it("Team Select", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const teamSelect = screen.getByTestId("select-team-input");
    expect(teamSelect).toBeInTheDocument();
    waitFor(() => {
      const existingTeamOptions = screen.queryAllByTestId(
        "existing-team-option"
      );
      expect(existingTeamOptions).toHaveLength(mockTeamList.teams.length);
    });

    const newTeamInput = screen.queryByTestId("input-new-team");
    expect(newTeamInput).toBeNull();
  });

  it("Add my team", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const teamSelect = screen.getByTestId("select-team-input");
    expect(teamSelect).toBeInTheDocument();
    const newTeamInput = screen.queryByTestId("input-new-team");
    expect(newTeamInput).toBeNull();
    waitFor(() => {
      const existingTeamOptions = screen.queryAllByTestId(
        "existing-team-option"
      );
      expect(existingTeamOptions).toHaveLength(mockTeamList.teams.length);
    });
    act(() => {
      fireEvent.change(teamSelect, { target: { value: NEW_TEAM } });
    });
    waitFor(() => {
      expect(newTeamInput).toBeInTheDocument();
      fireEvent.change(newTeamInput, { target: { value: "new team" } });
      expect(newTeamInput.value).toBe("new team");
    });
  });
});

describe("Event Name Input", () => {
  it("Render Event Name Input", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const eventNameInput = screen.getByTestId("input-event-name");
    expect(eventNameInput).toBeInTheDocument();
  });
});

describe("Event Location Input", () => {
  it("Render Event Location Input", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const eventLocation = screen.getByTestId("input-event-location");
    expect(eventLocation).toBeInTheDocument();
    fireEvent.change(eventLocation, { target: { value: "event location" } });
    expect(eventLocation.value).toBe("event location");
  });
});

describe("Event Season Select", () => {
  it("Render Event Season Select", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const eventSeasonSelect = screen.getByTestId("select-season");
    expect(eventSeasonSelect).toBeInTheDocument();
  });
});

describe("Event File upload", () => {
  it("Render event File upload", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const eventFileUpload = screen.getByTestId("upload-event-file");
    expect(eventFileUpload).toBeInTheDocument();
    act(() => {
      userEvent.upload(eventFileUpload, mockFile);
    });
    expect(eventFileUpload.files[0]).toStrictEqual(mockFile);
  });
});

describe("Event Type Selection", () => {
  it("Render Normal Game inputs  by default", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const regularGameTab = screen.getByTestId("tab-regular-game");
    expect(regularGameTab).toBeInTheDocument();
    expect(regularGameTab).toHaveClass("bd-form__tab--active");
    const championshipGameTab = screen.getByTestId("tab-championship");
    expect(championshipGameTab).toBeInTheDocument();
    expect(championshipGameTab).not.toHaveClass("bd-form__tab--active");

    const regularGameContent = screen.getByTestId("content-regular-game");
    const championshipContent = screen.getByTestId("content-championship");
    expect(regularGameContent).toBeInTheDocument();
    expect(regularGameContent).toHaveClass("active show");
    expect(championshipContent).toBeInTheDocument();
    expect(championshipContent).not.toHaveClass("active show");
  });

  it("Switch to championship", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const regularGameTab = screen.getByTestId("tab-regular-game");
    const championshipGameTab = screen.getByTestId("tab-championship");
    act(() => {
      fireEvent.click(championshipGameTab, { bubbles: true, cancelable: true });
    });
    expect(championshipGameTab).toHaveClass("bd-form__tab--active");
    expect(regularGameTab).not.toHaveClass("bd-form__tab--active");
    const regularGameContent = screen.getByTestId("content-regular-game");
    const championshipContent = screen.getByTestId("content-championship");
    expect(regularGameContent).not.toHaveClass("active show");
    expect(championshipContent).toHaveClass("active show");
  });
});

describe("Regular Game inputs", () => {
  it("Render Normal Game input", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const gameTeamGameInput = screen.getByTestId("regular-game-team-game");
    expect(gameTeamGameInput).toBeInTheDocument();
    const gameBakerGameInput = screen.getByTestId("regular-game-baker-game");
    expect(gameBakerGameInput).toBeInTheDocument();
    const gameBakerGamePerBlockInput = screen.getByTestId(
      "regular-game-baker-game-per-block"
    );
    expect(gameBakerGamePerBlockInput).toBeInTheDocument();
    const gameBakerMPCheckbox = screen.getByTestId(
      "regular-game-baker-mp-checkbox"
    );
    expect(gameBakerMPCheckbox).toBeInTheDocument();
    expect(gameBakerMPCheckbox.checked).toBe(false);
    const gameBakerMPInput = screen.queryAllByTestId(
      "regular-game-baker-mp-input"
    );
    expect(gameBakerMPInput).toHaveLength(0);
  });

  it("Normal Game input - function", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const gameTeamGameInput = screen.getByTestId("regular-game-team-game");
    fireEvent.change(gameTeamGameInput, { target: { value: 2 } });
    expect(gameTeamGameInput.value).toBe("2");
    const gameBakerGameInput = screen.getByTestId("regular-game-baker-game");
    fireEvent.change(gameBakerGameInput, { target: { value: 5 } });
    expect(gameBakerGameInput.value).toBe("5");
    const gameBakerGamePerBlockInput = screen.getByTestId(
      "regular-game-baker-game-per-block"
    );
    fireEvent.change(gameBakerGamePerBlockInput, { target: { value: 4 } });
    expect(gameBakerGamePerBlockInput.value).toBe("4");
    const gameBakerMPCheckbox = screen.getByTestId(
      "regular-game-baker-mp-checkbox"
    );
    fireEvent.click(gameBakerMPCheckbox);
    expect(gameBakerMPCheckbox.checked).toBe(true);

    const gameBakerMPInput = screen.queryAllByTestId(
      "regular-game-baker-mp-input"
    );
    expect(gameBakerMPInput).toHaveLength(1);
    const gameBakerMPInputAddButton = screen.getByTestId(
      "regular-game-baker-mp-input-add-button"
    );
    expect(gameBakerMPInputAddButton).toBeInTheDocument();
    const gameBakerMPInputRemoveButton = screen.queryByTestId(
      "regular-game-baker-mp-input-remove-button"
    );
    expect(gameBakerMPInputRemoveButton).toBeNull();
  });

  it("Normal Game input - baker mp add / remove row function", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();
    const gameBakerMPCheckbox = screen.getByTestId(
      "regular-game-baker-mp-checkbox"
    );
    fireEvent.click(gameBakerMPCheckbox);
    expect(gameBakerMPCheckbox.checked).toBe(true);

    const gameBakerMPInput = screen.queryAllByTestId(
      "regular-game-baker-mp-input"
    );
    expect(gameBakerMPInput).toHaveLength(1);
    const gameBakerMPInputAddButton = screen.getByTestId(
      "regular-game-baker-mp-input-add-button"
    );
    expect(gameBakerMPInputAddButton).toBeInTheDocument();
    const gameBakerMPInputRemoveButton = screen.queryByTestId(
      "regular-game-baker-mp-input-remove-button"
    );
    expect(gameBakerMPInputRemoveButton).toBeNull();

    // Click add button, input row should be 2 and delete button is now shown
    act(() => {
      fireEvent.click(gameBakerMPInputAddButton);
    });
    waitFor(() => {
      expect(gameBakerMPInput).toHaveLength(2);
      expect(gameBakerMPInputRemoveButton).toBeInTheDocument();

      // Click delete button, input row should be reduced to 1 and delete button not shown
      fireEvent.click(gameBakerMPInputRemoveButton);
    });

    waitFor(() => {
      expect(gameBakerMPInput).toHaveLength(1);
      expect(gameBakerMPInputRemoveButton).toBeNull();
    });
  });
});

describe("Championship Inputs", () => {
  it("Render Championship input", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();

    // Switch to championship
    const championshipGameTab = screen.getByTestId("tab-championship");
    act(() => {
      fireEvent.click(championshipGameTab, { bubbles: true, cancelable: true });
    });
    expect(championshipGameTab).toHaveClass("bd-form__tab--active");
    const championshipGameInputRow = screen.getAllByTestId(
      "championship-game-input-row"
    );
    expect(championshipGameInputRow).toHaveLength(1);
    const addMatchButton = screen.getByTestId("championship-add-match-button");
    expect(addMatchButton).toBeInTheDocument();
    const resetMatchButton = screen.getByTestId(
      "championship-reset-match-button"
    );
    expect(resetMatchButton).toBeInTheDocument();
    const matchOneTeamGameInput = screen.getByTestId(
      "championship-match-1-team-games"
    );
    const matchOneBakerGameInput = screen.getByTestId(
      "championship-match-1-baker-games"
    );
    const matchOneBakerMPGameInput = screen.getByTestId(
      "championship-match-1-baker-mp-games"
    );
    expect(matchOneTeamGameInput).toBeInTheDocument();
    expect(matchOneBakerGameInput).toBeInTheDocument();
    expect(matchOneBakerMPGameInput).toBeInTheDocument();
  });

  it("Championship input - input game data", () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();

    // Switch to championship
    const championshipGameTab = screen.getByTestId("tab-championship");
    act(() => {
      fireEvent.click(championshipGameTab, { bubbles: true, cancelable: true });
    });
    expect(championshipGameTab).toHaveClass("bd-form__tab--active");
    const championshipGameInputRow = screen.getAllByTestId(
      "championship-game-input-row"
    );
    expect(championshipGameInputRow).toHaveLength(1);
    const matchOneTeamGameInput = screen.getByTestId(
      "championship-match-1-team-games"
    );
    const matchOneBakerGameInput = screen.getByTestId(
      "championship-match-1-baker-games"
    );
    const matchOneBakerMPGameInput = screen.getByTestId(
      "championship-match-1-baker-mp-games"
    );
    fireEvent.change(matchOneTeamGameInput, { target: { value: 5 } });
    expect(matchOneTeamGameInput.value).toBe("5");
    fireEvent.change(matchOneBakerGameInput, { target: { value: 2 } });
    expect(matchOneBakerGameInput.value).toBe("2");
    fireEvent.change(matchOneBakerMPGameInput, { target: { value: 7 } });
    expect(matchOneBakerMPGameInput.value).toBe("7");
  });

  it("Championship input - input game data and add one more row", async () => {
    render(
      <MemoryRouter initialEntries={["/upload"]}>
        <Provider store={mockInitialState}>
          <UploadPage />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("upload-page");
    expect(page).toBeInTheDocument();

    // Switch to championship
    const championshipGameTab = screen.getByTestId("tab-championship");
    act(() => {
      fireEvent.click(championshipGameTab, { bubbles: true, cancelable: true });
    });
    expect(championshipGameTab).toHaveClass("bd-form__tab--active");
    const championshipGameInputRow = screen.getAllByTestId(
      "championship-game-input-row"
    );
    expect(championshipGameInputRow).toHaveLength(1);
    const matchOneTeamGameInput = screen.getByTestId(
      "championship-match-1-team-games"
    );
    const matchOneBakerGameInput = screen.getByTestId(
      "championship-match-1-baker-games"
    );
    const matchOneBakerMPGameInput = screen.getByTestId(
      "championship-match-1-baker-mp-games"
    );
    fireEvent.change(matchOneTeamGameInput, { target: { value: 5 } });
    expect(matchOneTeamGameInput.value).toBe("5");
    fireEvent.change(matchOneBakerGameInput, { target: { value: 2 } });
    expect(matchOneBakerGameInput.value).toBe("2");
    fireEvent.change(matchOneBakerMPGameInput, { target: { value: 7 } });
    expect(matchOneBakerMPGameInput.value).toBe("7");

    // Click on add match
    const addMatchButton = screen.getByTestId("championship-add-match-button");
    act(() => {
      fireEvent.click(addMatchButton, { cancelable: true, bubbles: true });
    });
    waitFor(() => {
      expect(championshipGameInputRow).toHaveLength(2);
    });
    act(() => {
      const matchTwoTeamGameInput = screen.getByTestId(
        "championship-match-2-team-games"
      );
      const matchTwoBakerGameInput = screen.getByTestId(
        "championship-match-2-baker-games"
      );
      const matchTwoBakerMPGameInput = screen.getByTestId(
        "championship-match-2-baker-mp-games"
      );

      expect(matchTwoTeamGameInput).toBeInTheDocument();
      expect(matchTwoBakerGameInput).toBeInTheDocument();
      expect(matchTwoBakerMPGameInput).toBeInTheDocument();

      fireEvent.change(matchTwoTeamGameInput, { target: { value: 1 } });
      expect(matchTwoTeamGameInput.value).toBe("1");
      fireEvent.change(matchTwoBakerGameInput, { target: { value: 2 } });
      expect(matchTwoBakerGameInput.value).toBe("2");
      fireEvent.change(matchTwoBakerMPGameInput, { target: { value: 3 } });
      expect(matchTwoBakerMPGameInput.value).toBe("3");
    });

    // Click on reset button, input row should be 1 and values becomes zero
    const resetMatchButton = screen.getByTestId(
      "championship-reset-match-button"
    );
    act(() => {
      fireEvent.click(resetMatchButton, { cancelable: true, bubbles: true });
    });
    waitFor(() => {
      expect(championshipGameInputRow).toHaveLength(1);
      expect(matchOneTeamGameInput.value).toBe("0");
      expect(matchOneBakerGameInput.value).toBe("0");
      expect(matchOneBakerMPGameInput.value).toBe("0");
    });
  });
});
