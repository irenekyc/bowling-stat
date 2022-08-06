import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormSubmissionConfirmationModal from "../index";
import { NORMAL_GAME, CHAMPIONSHIP } from "../../../constants";

// TODO: mock api response
const mockBackToForm = jest.fn();
const mockFormSubmit = jest.fn();
const regularGameData = {
  team_name: "Team Name",
  team_id: "team_id",
  file: null,
  event_name: "Event Name",
  location: "Event Location",
  season: "2021-2022",
  num_of_team_games: 1,
  num_of_baker_games: 2,
  baker_match_play_1: 7,
  baker_match_play_2: 0,
  baker_match_play_3: 0,
  num_of_baker_games_per_block: 5,
  game_pattern: NORMAL_GAME,
  champ_1_team_games: 0,
  champ_1_baker_games: 0,
  champ_1_baker_mp_games: 0,
  champ_2_team_games: 0,
  champ_2_baker_games: 0,
  champ_2_baker_mp_games: 0,
  champ_3_team_games: 0,
  champ_3_baker_games: 0,
  champ_3_baker_mp_games: 0,
  num_of_championship_matches: 1,
};
const championshipGameData = {
  team_name: "Team Name",
  team_id: "team_id",
  file: null,
  event_name: "Event Name",
  location: "Event Location",
  season: "2021-2022",
  num_of_team_games: 0,
  num_of_baker_games: 0,
  baker_match_play_1: 0,
  baker_match_play_2: 0,
  baker_match_play_3: 0,
  num_of_baker_games_per_block: 5,
  game_pattern: CHAMPIONSHIP,
  champ_1_team_games: 1,
  champ_1_baker_games: 1,
  champ_1_baker_mp_games: 0,
  champ_2_team_games: 0,
  champ_2_baker_games: 0,
  champ_2_baker_mp_games: 0,
  champ_3_team_games: 0,
  champ_3_baker_games: 0,
  champ_3_baker_mp_games: 0,
  num_of_championship_matches: 1,
};
describe("Render Form Submission Modal", () => {
  it("Render Form Submission Modal - Regular Game", () => {
    render(
      <FormSubmissionConfirmationModal
        formData={regularGameData}
        backToForm={mockBackToForm}
        show={true}
        formSubmit={mockFormSubmit}
      />
    );
    const FormSubmissionModalHeader = screen.queryByTestId(
      "file-upload-confirmation-modal-header"
    );
    expect(FormSubmissionModalHeader).not.toBeNull();
    expect(FormSubmissionModalHeader).toHaveTextContent(
      "File Upload Confirmation"
    );
    const teamName = screen.getByTestId(
      "file-upload-confirmation-modal-team-name"
    );
    expect(teamName).toHaveTextContent(regularGameData.team_name);
    const eventName = screen.getByTestId(
      "file-upload-confirmation-modal-event-name"
    );
    expect(eventName).toHaveTextContent(regularGameData.event_name);
    const eventLocation = screen.getByTestId(
      "file-upload-confirmation-modal-event-location"
    );
    expect(eventLocation).toHaveTextContent(regularGameData.location);
    const teamGameNumber = screen.getByTestId(
      "file-upload-confirmation-modal-normal-game-traditional-team-game"
    );
    expect(teamGameNumber).toHaveTextContent(regularGameData.num_of_team_games);
    const bakerGameNumber = screen.getByTestId(
      "file-upload-confirmation-modal-normal-game-baker-game-blocks"
    );
    expect(bakerGameNumber).toHaveTextContent(
      regularGameData.num_of_baker_games
    );
    const bakerGamePerBlock = screen.getByTestId(
      "file-upload-confirmation-modal-normal-game-baker-number-per-block"
    );
    expect(bakerGamePerBlock).toHaveTextContent(
      regularGameData.num_of_baker_games_per_block
    );
  });

  it("Render Form Submission Modal - Championship", () => {
    render(
      <FormSubmissionConfirmationModal
        formData={championshipGameData}
        backToForm={mockBackToForm}
        show={true}
        formSubmit={mockFormSubmit}
      />
    );
    const FormSubmissionModalHeader = screen.queryByTestId(
      "file-upload-confirmation-modal-header"
    );
    expect(FormSubmissionModalHeader).not.toBeNull();
    expect(FormSubmissionModalHeader).toHaveTextContent(
      "File Upload Confirmation"
    );
    const teamName = screen.getByTestId(
      "file-upload-confirmation-modal-team-name"
    );
    expect(teamName).toHaveTextContent(championshipGameData.team_name);
    const eventName = screen.getByTestId(
      "file-upload-confirmation-modal-event-name"
    );
    expect(eventName).toHaveTextContent(championshipGameData.event_name);
    const eventLocation = screen.getByTestId(
      "file-upload-confirmation-modal-event-location"
    );
    expect(eventLocation).toHaveTextContent(championshipGameData.location);
    const teamGameNumber = screen.queryByTestId(
      "file-upload-confirmation-modal-normal-game-traditional-team-game"
    );
    expect(teamGameNumber).toBeNull();
    const bakerGameNumber = screen.queryByTestId(
      "file-upload-confirmation-modal-normal-game-baker-game-blocks"
    );
    expect(bakerGameNumber).toBeNull();
    const bakerGamePerBlock = screen.queryByTestId(
      "file-upload-confirmation-modal-normal-game-baker-number-per-block"
    );
    expect(bakerGamePerBlock).toBeNull();
  });

  it("Render Form Submission Modal - functions", () => {
    render(
      <FormSubmissionConfirmationModal
        formData={championshipGameData}
        backToForm={mockBackToForm}
        show={true}
        formSubmit={mockFormSubmit}
      />
    );

    const backButton = screen.getByTestId(
      "file-upload-confirmation-modal-button-back"
    );
    fireEvent.click(backButton, { cancellable: true, bubble: true });
    expect(mockBackToForm).toBeCalled();
  });

  it("Render Form Submission Modal - submit", () => {
    render(
      <FormSubmissionConfirmationModal
        formData={championshipGameData}
        backToForm={mockBackToForm}
        show={true}
        formSubmit={mockFormSubmit}
      />
    );

    const submitButton = screen.getByTestId(
      "file-upload-confirmation-modal-button-confirm"
    );
    fireEvent.click(submitButton, { cancellable: true, bubble: true });
    waitFor(() => {
      const successfulModal = screen.getByTestId("upload-success-modal-header");
      expect(successfulModal).toBeInTheDocument();
    });
  });
});
