import { validateFormField, validateFormData } from "../validateForm";
import { NORMAL_GAME } from "../../constants";

describe("Validate Form Field - if empty, error message should return error message if field is required", () => {
  it("Team Name - if empty", () => {
    const errorMessage = validateFormField("team_name", "");
    expect(errorMessage).toEqual("Please input team name");
  });
  it("Event Name - if empty", () => {
    const errorMessage = validateFormField("event_name", "");
    expect(errorMessage).toEqual("Please input event name");
  });
  it("Location - if empty", () => {
    const errorMessage = validateFormField("location", "");
    expect(errorMessage).toEqual("Please input location");
  });
  it("File - if empty", () => {
    const errorMessage = validateFormField("file", null);
    expect(errorMessage).toEqual("Please upload the event CSV");
  });
  it("Others - if empty", () => {
    const errorMessage = validateFormField("num_baker_games", null);
    expect(errorMessage).toEqual("");
  });
});

describe("Validate Form Field - if not empty, error message should be empty", () => {
  it("Team Name - not empty", () => {
    const errorMessage = validateFormField("team_name", "Team Name");
    expect(errorMessage).toEqual("");
  });
  it("Event Name - not empty", () => {
    const errorMessage = validateFormField("event_name", "Event Name");
    expect(errorMessage).toEqual("");
  });
  it("Location - not empty", () => {
    const errorMessage = validateFormField("location", "Event Location");
    expect(errorMessage).toEqual("");
  });
  it("File - not empty", () => {
    const errorMessage = validateFormField("file", { value: "some value" });
    expect(errorMessage).toEqual("");
  });
  it("Others - not empty", () => {
    const errorMessage = validateFormField("num_baker_games", null);
    expect(errorMessage).toEqual("");
  });
});

const completedFormData = {
  team_name: "Team Name",
  team_id: "team_id",
  file: {
    value: "some value",
  },
  event_name: "Event Name",
  location: "Lane",
  season: "2021-2022",
  num_of_team_games: 1,
  num_of_baker_games: 2,
  baker_match_play_1: 3,
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

const incompletedFormData = {
  team_name: "",
  team_id: "",
  file: null,
  event_name: "",
  location: "",
  season: "2021-2022",
  num_of_team_games: 1,
  num_of_baker_games: 2,
  baker_match_play_1: 3,
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

describe("Validate Form Data should check every fields", () => {
  it("Form data is completed", () => {
    const { errors, num_error } = validateFormData(completedFormData);
    expect(errors.team_name).toEqual("");
    expect(num_error).toBe(0);
  });
  it("Form data is incompleted", () => {
    const { errors, num_error } = validateFormData(incompletedFormData);
    expect(errors.team_name).toEqual("Please input team name");
    expect(errors.event_name).toEqual("Please input event name");
    expect(errors.location).toEqual("Please input location");
    expect(errors.file).toEqual("Please upload the event CSV");
    expect(num_error).toBe(4);
  });
});
