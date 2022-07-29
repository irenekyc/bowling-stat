import "./upload.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import FormSubmissionConfirmationModal from "../../widgets/form-submission-confirmation-modal";
import InfoIcon from "../../components/icons/InfoIcon";

const NEW_TEAM = "NEW_TEAM";
const NORMAL_GAME = "NORMAL_GAME";
const CHAMPIONSHIP = "CHAMPIONSHIP";
const initFormData = {
  team_name: "",
  team_id: "",
  file: null,
  event_name: "",
  location: "",
  season: "2021-2022",
  num_of_team_games: 0,
  num_of_baker_games: 0,
  baker_match_play_1: 0,
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

const UploadPage = () => {
  const [teams, setTeams] = useState([]);
  const [showTeamNameInput, setShowTeamNameInput] = useState(false);
  const [showBakerMPInput, setShowBakerMPInput] = useState(false);
  const [formData, setFormData] = useState({
    ...initFormData,
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
    const error = validateField("file", e.target.files[0]);
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

  const validateFormData = () => {
    let error = {};
    Object.entries(formData).forEach(([key, value]) => {
      error = {
        ...error,
        [key]: validateField(key, value),
      };
    });

    setErrorMessage({
      ...errorMessage,
      ...error,
    });

    return Object.values(error).filter((value) => value !== "").length;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const num_of_errors = validateFormData();
    if (num_of_errors === 0) {
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
  const validateField = (field, value) => {
    switch (field) {
      case "team_name":
      case "event_name":
      case "location":
        if (value === "") {
          return `Please input ${field.split("_").join(" ")}`;
        } else {
          return "";
        }

      case "file":
        if (!value) {
          return "Please upload the event CSV";
        } else {
          return "";
        }

      // case "num_of_baker_games":
      //   if (value === 0) {
      //     return "Number cannot be zero";
      //   } else {
      //     return "";
      //   }
      default:
        return "";
    }
  };

  const inputOnChangeHandler = (e) => {
    const field = e.target.id;
    let value;
    value = e.target.value;
    if (value < 0) return;

    if (errorMessage[field] !== "") {
      const error = validateField(field, value);
      setErrorMessage({ ...errorMessage, [field]: error });
    }

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const resetForm = () => {
    setShowConfirmation(false);
    setFormData(initFormData);
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
    <div className="bd-page--upload">
      <h3>Upload Event Data</h3>
      <p>Please fill in below information for your event.</p>

      <Form>
        <Form.Group className="my-3">
          <Form.Label className="bd-page--upload__input-title">
            <span>Team Name</span>
            <InfoIcon withTooltip={"Your team name e.g QU Women"} />
          </Form.Label>
          <Form.Select onChange={teamNameChange}>
            <option value="">Select team</option>
            {teams.map((team) => (
              <option
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
              className="mt-2"
              type="text"
              placeholder="Team Name E.g.QU Women / QU Men"
              value={formData.team_name}
              id="team_name"
              onChange={inputOnChangeHandler}
            />
          )}
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.team_name || ""}
            </span>
          }
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label className="bd-page--upload__input-title">
            <span>Event Name</span>
            <InfoIcon
              withTooltip={
                "The name of the event you are uploading. E.g Flyer Classic"
              }
            />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Flyer Classic"
            id="event_name"
            value={formData.event_name}
            onChange={inputOnChangeHandler}
          />
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.event_name || ""}
            </span>
          }
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label className="bd-page--upload__input-title">
            <span>Event Location</span>
            <InfoIcon
              withTooltip={
                "The name of the bowling center of this event take place E.g North Rock Lanes"
              }
            />
          </Form.Label>
          <Form.Control
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
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label className="bd-page--upload__input-title">
            <span> Season </span>
            <InfoIcon
              withTooltip={"The season year of this event take place"}
            />
          </Form.Label>
          <Form.Select onChange={seasonChange}>
            <option value="2021-2022" defaultChecked>
              2021-2022
            </option>
          </Form.Select>
        </Form.Group>
        <div className="bd-form__input-file-group mt-3">
          <p className="bd-page--upload__input-title">Upload Event Data:</p>
          <input type="file" onChange={uploadFile} accept=".csv" />
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
              <Tab.Pane eventKey={NORMAL_GAME}>
                <Form.Group className="mb-3">
                  <Form.Label className="bd-page--upload__input-title--sub">
                    <span> Number of Team Games</span>
                    <InfoIcon
                      withTooltip={"How many regular team game in this event?"}
                    />
                  </Form.Label>
                  <Form.Control
                    id="num_of_team_games"
                    type="number"
                    placeholder="Number of team game"
                    onChange={inputOnChangeHandler}
                    value={formData.num_of_team_games}
                  />
                  {
                    <span className={"bd-form__inputError"}>
                      {errorMessage.num_of_baker_games || ""}
                    </span>
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="bd-page--upload__input-title--sub">
                    <span> Number of Baker Games</span>
                    <InfoIcon
                      withTooltip={"How many normal baker game in this event?"}
                    />
                  </Form.Label>
                  <Form.Control
                    id="num_of_baker_games"
                    type="number"
                    placeholder="Number of Baker Blocks or Matches"
                    onChange={inputOnChangeHandler}
                    value={formData.num_of_baker_games}
                  />
                  {
                    <span className={"bd-form__inputError"}>
                      {errorMessage.num_of_baker_games || ""}
                    </span>
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="bd-page--upload__input-title--sub">
                    <span> Number of Games per Baker Blocks or match</span>
                    <InfoIcon
                      withTooltip={
                        "How many baker games for each baker game block"
                      }
                    />
                  </Form.Label>
                  <Form.Control
                    id="num_of_baker_games_per_block"
                    type="number"
                    placeholder="Number of Baker Blocks or Matches"
                    onChange={inputOnChangeHandler}
                    value={formData.num_of_baker_games_per_block}
                  />
                  {
                    <span className={"bd-form__inputError"}>
                      {errorMessage.num_of_baker_game_per_block || ""}
                    </span>
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="bd-page--upload__input-title--sub">
                    <span>
                      <Form.Check
                        type="checkbox"
                        label="This Event has Baker Match Play"
                        onChange={onCheckBakerMP}
                      />
                    </span>
                    <InfoIcon
                      withTooltip={
                        "If there is baker match play in this event, please check this box. And indicate the baker match play games"
                      }
                    />
                  </div>
                </Form.Group>
                <div className="bd-form__bakermp-row">
                  {showBakerMPInput &&
                    bakerMPInput.map((_, index) => (
                      <Form.Group
                        className="bd-form__bakermp-row__input-group mb-3"
                        key={`baker_mp_${index}`}
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
              <Tab.Pane eventKey={CHAMPIONSHIP}>
                {championshipGame.map((gameNo, index) => (
                  <div key={`championship_game_${gameNo}_input`}>
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
                >
                  Reset
                </button>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <Button variant="primary" onClick={submitHandler}>
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
