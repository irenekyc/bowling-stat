import "./upload.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import FormSubmissionConfirmationModal from "../../widgets/form-submission-confirmation-modal";
import InfoIcon from "../../components/icons/InfoIcon";
import {
  NORMAL_GAME,
  CHAMPIONSHIP,
  INIT_FORM_DATA,
  NEW_TEAM,
} from ".././../constants";
import {
  validateFormField,
  validateFormData,
} from "../../helpers/validateForm";
import FormGroup from "../../components/form-group";

const UploadPage = () => {
  const [teams, setTeams] = useState([]);
  const [showTeamNameInput, setShowTeamNameInput] = useState(false);
  const [showBakerMPInput, setShowBakerMPInput] = useState(false);
  const [formData, setFormData] = useState({
    ...INIT_FORM_DATA,
  });
  const [errorMessage, setErrorMessage] = useState({
    team_name: "",
    file: "",
    event_name: "",
    location: "",
    num_of_baker_games: "",
    baker_match_play_distributions: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [gamePattern, setGamePattern] = useState(NORMAL_GAME);
  const [bakerMPInput, setBakerMPInput] = useState(null);
  const [championshipGame, setChampionshipGame] = useState([1]);
  const onCheckBakerMP = (e) => {
    setShowBakerMPInput(e.target.checked);
    if (e.target.checked) {
      setBakerMPInput([0]);
    }
  };

  const uploadFile = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0] || null,
    });
    const error = validateFormField("file", e.target.files[0]);
    setErrorMessage({
      ...errorMessage,
      file: error,
    });
  };

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(
          "https://fierce-plateau-64816.herokuapp.com/teams"
        );
        setTeams(res.data.teams);
      } catch {}
    };
    fetchTeam();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const { num_error, errors } = validateFormData(formData);
    setErrorMessage({
      ...errorMessage,
      ...errors,
    });
    if (num_error === 0) {
      setShowConfirmation(true);
    }
  };

  const teamNameChange = (e) => {
    const selectedTeamName = e.target.value;

    if (selectedTeamName === NEW_TEAM) {
      setShowTeamNameInput(true);
      setFormData({
        ...formData,
        team_name: "",
        team_id: "",
      });
    } else {
      setShowTeamNameInput(false);
      const [team_id, team_name] = selectedTeamName.split("__");

      setFormData({
        ...formData,
        team_name,
        team_id,
      });
    }
  };
  const seasonChange = (e) => {
    const selectedSeason = e.target.value;
    setFormData({
      ...formData,
      season: selectedSeason,
    });
  };

  const inputOnChangeHandler = (e) => {
    const field = e.target.id;
    let value;
    value = e.target.value;
    if (value < 0) return;

    if (errorMessage[field] !== "") {
      const error = validateFormField(field, value);
      setErrorMessage({ ...errorMessage, [field]: error });
    }

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const resetForm = () => {
    setShowConfirmation(false);
    setFormData(INIT_FORM_DATA);
  };

  const toggleGamePattern = (game_pattern) => {
    setGamePattern(game_pattern);
    setFormData({
      ...formData,
      game_pattern,
    });
  };

  const removeMatchData = (e) => {
    e.preventDefault();
    const gameNo = parseInt(e.target.id) + 1;
    let updatedChampionshipGame = [...championshipGame];
    updatedChampionshipGame.pop();
    setChampionshipGame(updatedChampionshipGame);
    setFormData({
      ...formData,
      num_of_championship_matches: updatedChampionshipGame.length,
      [`champ_${gameNo}_team_games`]: 0,
      [`champ_${gameNo}_baker_games`]: 0,
      [`champ_${gameNo}_baker_mp_games`]: 0,
    });
  };

  return (
    <div className="bd-page--upload" data-testid="upload-page">
      <h3 data-testid="upload-page-heading">Upload Event Data</h3>
      <p>Please fill in below information for your event.</p>

      <Form>
        <FormGroup
          label={{ label: "Team Name", tooltip: "Your team name e.g QU Women" }}
          errorMessage={errorMessage.team_name}
        >
          <Form.Select
            onChange={teamNameChange}
            data-testid="select-team-input"
          >
            <option value="">Select team</option>
            {teams.map((team) => (
              <option
                data-testid="existing-team-option"
                value={team.team_id + "__" + team.team_name}
                key={team.team_id}
              >
                {team.team_name}
              </option>
            ))}
            <option value={NEW_TEAM}>Add my team</option>
          </Form.Select>
          {showTeamNameInput && (
            <Form.Control
              data-testid="input-new-team"
              className="mt-2"
              type="text"
              placeholder="Team Name E.g.QU Women / QU Men"
              value={formData.team_name}
              id="team_name"
              onChange={inputOnChangeHandler}
            />
          )}
        </FormGroup>
        <FormGroup
          label={{
            label: "Event Name",
            tooltip:
              "The name of the event you are uploading. E.g Flyer Classic",
          }}
          errorMessage={errorMessage.event_name}
        >
          <Form.Control
            data-testid="input-event-name"
            type="text"
            placeholder="e.g. Flyer Classic"
            id="event_name"
            value={formData.event_name}
            onChange={inputOnChangeHandler}
          />
        </FormGroup>
        <FormGroup
          label={{
            label: "Event Location",
            tooltip:
              "The name of the bowling center of this event take place E.g North Rock Lanes",
          }}
        >
          <Form.Control
            data-testid="input-event-location"
            type="text"
            placeholder="Event Location E.g St Clair Bowl"
            id="location"
            value={formData.location}
            onChange={inputOnChangeHandler}
          />
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.location || ""}
            </span>
          }
        </FormGroup>
        <FormGroup
          label={{
            label: "Season",
            tooltip: "The season year of this event take place",
          }}
        >
          <Form.Select onChange={seasonChange} data-testid="select-season">
            <option value="2021-2022" defaultChecked>
              2021-2022
            </option>
          </Form.Select>
        </FormGroup>

        <div className="bd-form__input-file-group mt-3">
          <p className="bd-page--upload__input-title">Upload Event Data:</p>
          <input
            type="file"
            onChange={uploadFile}
            accept=".csv"
            data-testid="upload-event-file"
          />
          <small>Only CSV file is accepted</small>
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.file || ""}
            </span>
          }
        </div>

        <div className="bd-form__input-file-group mt-3">
          <p className="bd-page--upload__input-title">
            <span>Event Type</span>{" "}
            <InfoIcon
              withTooltip={
                "The event type is either a normal bowling tournament, or a championship event (e.g  GLV Championship)"
              }
            />
          </p>
          <Tab.Container
            defaultActiveKey={NORMAL_GAME}
            onSelect={toggleGamePattern}
          >
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey={NORMAL_GAME}>
                  <span
                    data-testid="tab-regular-game"
                    className={`bd-form__tab ${
                      gamePattern === NORMAL_GAME
                        ? "bd-form__tab--active"
                        : "bd-form__tab--inactive"
                    }`}
                  >
                    Regular
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={CHAMPIONSHIP}>
                  <span
                    data-testid="tab-championship"
                    className={`bd-form__tab ${
                      gamePattern === CHAMPIONSHIP
                        ? "bd-form__tab--active"
                        : "bd-form__tab--inactive"
                    }`}
                  >
                    Championship
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="bd-page--upload__tab-container">
              <Tab.Pane
                eventKey={NORMAL_GAME}
                data-testid="content-regular-game"
              >
                <FormGroup
                  label={{
                    label: "Number of Team Games",
                    tooltip: "How many regular team game in this event?",
                  }}
                  errorMessage={errorMessage.num_of_baker_games}
                >
                  <Form.Control
                    id="num_of_team_games"
                    type="number"
                    placeholder="Number of team game"
                    onChange={inputOnChangeHandler}
                    value={formData.num_of_team_games}
                    data-testid="regular-game-team-game"
                  />
                </FormGroup>
                <FormGroup
                  label={{
                    label: "Number of Baker Blocks",
                    tooltip: "How many normal baker blocks in this event?",
                  }}
                  errorMessage={errorMessage.num_of_baker_games}
                >
                  <Form.Control
                    id="num_of_baker_games"
                    type="number"
                    placeholder="Number of Baker Blocks or Matches"
                    onChange={inputOnChangeHandler}
                    value={formData.num_of_baker_games}
                    data-testid="regular-game-baker-game"
                  />
                </FormGroup>
                <FormGroup
                  label={{
                    label: "Number of Games per Baker Blocks or match",
                    tooltip: "How many baker games for each baker game block",
                  }}
                  errorMessage={errorMessage.num_of_baker_game_per_block}
                >
                  <Form.Control
                    id="num_of_baker_games_per_block"
                    type="number"
                    placeholder="Number of Baker Blocks or Matches"
                    onChange={inputOnChangeHandler}
                    value={formData.num_of_baker_games_per_block}
                    data-testid="regular-game-baker-game-per-block"
                  />
                </FormGroup>
                <FormGroup
                  label={{
                    label: (
                      <Form.Check
                        data-testid="regular-game-baker-mp-checkbox"
                        type="checkbox"
                        label="This Event has Baker Match Play"
                        onChange={onCheckBakerMP}
                      />
                    ),
                    tooltip:
                      "If there is baker match play in this event, please check this box. And indicate the baker match play games",
                  }}
                ></FormGroup>
                <div className="bd-form__bakermp-row">
                  {showBakerMPInput &&
                    bakerMPInput.map((_, index) => (
                      <Form.Group
                        className="bd-form__bakermp-row__input-group mb-3"
                        key={`baker_mp_${index}`}
                        data-testid="regular-game-baker-mp-input"
                      >
                        <Form.Label className="bd-page--upload__input-title--sub">
                          <span> Baker Match Play {index + 1}</span>
                          <InfoIcon
                            withTooltip={`How many baker games in Baker Match Play Group ${
                              index + 1
                            }`}
                          />
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="0"
                          value={formData[`baker_match_play_${index + 1}`]}
                          onChange={(e) => {
                            if (e.target.value < 0) return;
                            const updatedInput = [...bakerMPInput];
                            updatedInput[index] = e.target.value;
                            setBakerMPInput(updatedInput);
                            setFormData({
                              ...formData,
                              [`baker_match_play_${index + 1}`]: e.target.value,
                            });
                          }}
                        />
                        {index === bakerMPInput.length - 1 && index < 2 && (
                          <button
                            className="bd-form__bakermp-row__add-row-button"
                            onClick={(e) => {
                              e.preventDefault();
                              setBakerMPInput([...bakerMPInput, 0]);
                            }}
                            data-testid="regular-game-baker-mp-input-add-button"
                          >
                            +
                          </button>
                        )}
                        {index !== 0 && index === bakerMPInput.length - 1 && (
                          <button
                            className="bd-form__bakermp-row__remove-row-button"
                            onClick={(e) => {
                              e.preventDefault();
                              const newArr = [...bakerMPInput];
                              newArr.pop();
                              setBakerMPInput(newArr);
                            }}
                            data-testid="regular-game-baker-mp-input-delete-button"
                          >
                            -
                          </button>
                        )}
                      </Form.Group>
                    ))}
                  {
                    <span className={"bd-form__inputError"}>
                      {errorMessage.baker_match_play_distributions || ""}
                    </span>
                  }
                </div>
              </Tab.Pane>
              <Tab.Pane
                eventKey={CHAMPIONSHIP}
                data-testid="content-championship"
              >
                {championshipGame.map((gameNo, index) => (
                  <div
                    key={`championship_game_${gameNo}_input`}
                    data-testid="championship-game-input-row"
                  >
                    <h3>Match #{gameNo}</h3>{" "}
                    {index === championshipGame.length - 1 && index !== 0 && (
                      <button id={index} onClick={removeMatchData}>
                        {" "}
                        Delete
                      </button>
                    )}
                    <Form.Group className=" mb-3">
                      <Form.Label className="bd-page--upload__input-title--sub">
                        <span> Number of Team Games</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        id={`champ_${gameNo}_team_games`}
                        value={formData[`champ_${gameNo}_team_games`]}
                        onChange={inputOnChangeHandler}
                        data-testid={`championship-match-${gameNo}-team-games`}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="bd-page--upload__input-title--sub">
                        <span> Number of Baker Games</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        id={`champ_${gameNo}_baker_games`}
                        value={formData[`champ_${gameNo}_baker_games`]}
                        onChange={inputOnChangeHandler}
                        data-testid={`championship-match-${gameNo}-baker-games`}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="bd-page--upload__input-title--sub">
                        <span> Number of Baker Match Play Games</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0"
                        id={`champ_${gameNo}_baker_mp_games`}
                        value={formData[`champ_${gameNo}_baker_mp_games`]}
                        onChange={inputOnChangeHandler}
                        data-testid={`championship-match-${gameNo}-baker-mp-games`}
                      />
                    </Form.Group>
                  </div>
                ))}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const newMatch =
                      championshipGame[championshipGame.length - 1] + 1;
                    setChampionshipGame([...championshipGame, newMatch]);
                    setFormData({
                      ...formData,
                      num_of_championship_matches: [
                        ...championshipGame,
                        newMatch,
                      ].length,
                    });
                  }}
                  data-testid="championship-add-match-button"
                >
                  + Add another match
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setChampionshipGame([1]);
                    setFormData({
                      ...formData,
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
                    });
                  }}
                  data-testid="championship-reset-match-button"
                >
                  Reset
                </button>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <Button
          variant="primary"
          onClick={submitHandler}
          data-testid="submit-form-button"
        >
          Submit
        </Button>
      </Form>

      <FormSubmissionConfirmationModal
        formData={formData}
        show={showConfirmation}
        backToForm={() => setShowConfirmation(false)}
        formSubmit={resetForm}
      />
    </div>
  );
};

export default UploadPage;
